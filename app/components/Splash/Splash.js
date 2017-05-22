import React from 'react';
import PropTypes from 'prop-types';
import { Content, Parallax, Distortion, Footer } from './../index';

export default class SplashComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mouseX: (document.documentElement.clientWidth / 2),
			mouseY: (document.documentElement.clientHeight / 2),
		};
	}

	onMouseMove(e) {
		this.setState({
			mouseX: e.pageX,
			mouseY: e.pageY,
		});
	}

	render() {
		const { mouseX, mouseY } = this.state;
		const { images } = this.props;

		return (
			<section id="splash" className="fullscreen">
				<div className="parallax-section full-height" onMouseMove={this.onMouseMove.bind(this)}>
					<Distortion.Container mouseX={mouseX} mouseY={mouseY} >
						{
							images.length ? images.map((image, index) => (
								<Distortion.Content layer={image} key={index} />
							)) : null
						}
					</Distortion.Container>
				</div>
			</section>
		);
	}
}

SplashComponent.propTypes = {
	images: PropTypes.arrayOf(PropTypes.object)
};

SplashComponent.defaultProps = {
	images: []
};
