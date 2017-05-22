'use strict';

import React from 'react';

const oscillation = {
	'007': [
		'#f03c59',
		'#d74155',
		'#cb3b5f',
		'#b0376a',
		'#ae3769',
		'#ad3868',
		'#a1366e',
		'#943474',
		'#843377',
		'#843376',
		'#76327f',
		'#663085',
		'#543186',
		'#44318a',
		'#2d2f92',
		'#50498c',
		'#5a578b',
		'#6a638b',
		'#7a7186',
		'#887e7f',
		'#9a8d78',
		'#bfae6b',
		'#d1c25a',
		'#e5d443',
		'#e4d443',
		'#f8eb23'
	]
};

export default class OscillationComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			number: 7
		};
	}
	convertHex(hex, opacity) {
		const hexCode = hex.replace('#', '');
		const r = parseInt(hexCode.substring(0, 2), 16);
		const g = parseInt(hexCode.substring(2, 4), 16);
		const b = parseInt(hexCode.substring(4, 6), 16);
		console.log(r, g, b, opacity);
		return 'rgba('+r+','+g+','+b+','+opacity/100+')';
	}

	genHsla(start, end, i, a, type) {
		const { totalSides } = this.state;
		// if (type === 'inverse') {

		// }

		const hue = ((Math.abs((type === 'inverse' ? start.h + 360 : start.h) - end.h) / totalSides) * i),
					saturation = ((Math.abs(start.s - end.s) / totalSides) * i),
					lightness = ((Math.abs(start.l - end.l) / totalSides) * i);

		const c = {
			h: type === 'inverse' ? ((start.h + 360) - hue) : start.h + hue,
			s: saturation + Math.min(start.s, end.s),
			l: lightness + Math.min(start.l, end.l),
			a
		};

		return `hsla(${c.h}, ${c.s}%, ${c.l}%, ${c.a})`;
	}

	genZindex(total, i) {
		return i <= (total / 2)
				? i + 1
				: total - i;
	}
	genStyles(colors) {
		let arr = [];
		for (var i = 0; i < colors.length; i++) {
			arr.push({
				background: this.convertHex(colors[i], 80),
				left: `calc((100% / ${colors.length - 1}) * ${i})`,
				top: `calc(50% - 200px)`,
				zIndex: this.genZindex(colors.length, i)
			});
		}
		return arr;
	}

	render() {
		const styles = this.genStyles(oscillation['007']);

		return (
			<div id="oscillation" className="fn-beer" style={this.props.style}>
				<div className="name"></div>
				<div className="graphic-group perspective-container">
					{
						styles.map((style, index) => {
							return (<div key={index} style={style}></div>);
						})
					}
				</div>
			</div>
		);
	}
}
