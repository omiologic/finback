'use strict';

import React, { Component } from 'react';
import classNames from 'classnames';

export default class FieldScoutComponent extends Component {
	state = {
		animate: false
	}

	componentDidMount() {
		this.setState({ animate: true });
	}

	render() {

		const animate = classNames({
			'arrow': true,
			'animate': this.state.animate
		});

		console.log(this.props.style.height);
		const height = this.props.style.height;
		const leftTriangleSty = {
			left: `-${height}px`,
		  borderLeft: `${height}px solid transparent`,
		  borderRight: `${height}px solid transparent`,
		  borderBottom: `${height}px solid rgba(29, 113, 51, 1)`
		};

		const rightTriangleSty = {
		  borderLeft: `${height}px solid transparent`,
		  borderRight: `${height}px solid transparent`,
		  borderBottom: `${height}px solid rgba(83, 179, 90, 0.5)`
		};

		return (
			<div id="fieldscout" style={this.props.style}>
				<div className="perspective-container">
					<div className={animate} style={leftTriangleSty}></div>
					<div className={animate} style={rightTriangleSty}></div>
				</div>
			</div>
		);
	}
}
