import React from 'react';
import PropTypes from 'prop-types';
class ParallaxBackground extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidUpdate(prevProps, prevState) {
		if(!prevProps.children && this.props.children && this.props.children.length){
			this.props.initCurrent();
		}
	}
	render(){
		const { current, mouseX, mouseY, children } = this.props;
		let viewportHeight = document.documentElement.clientHeight;

		return (
			<div>
				{
					children && children.length ?
					React.Children.map(children, (child, index) => {
						let childProps = { 
	            style: {
	              zIndex: 1,
	              visibility: 'hidden',
	              transform: `matrix(1, 0, 0, 1, 0, ${viewportHeight})`
	            },
	            mouseX: mouseX,
	            mouseY: mouseY,
	            isCurrent: index === current ? true : false
	          }

	          return React.cloneElement(child, childProps)
					}) : null
				}
			</div>
		);
	}
}

ParallaxBackground.propTypes =  {
	current: PropTypes.number,
	mouseX: PropTypes.number,
	mouseY: PropTypes.number
};

ParallaxBackground.defaultProps = {
	current: 0,
	mouseX: 0,
	mouseY: 0
};

export default ParallaxBackground;