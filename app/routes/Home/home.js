import React from 'react';
import { connect } from 'react-redux';
// import * as Component from 'APP/app/components';
import { Content, Parallax, Distortion, Footer, Splash, MainGrid } from '../../components';
require('./home.stylesheet.scss');

const medium = [
	// {
	// 	id: 1,
	// 	url: './images/finback_01.png',
	// 	type: 'image',
	// 	sort: 1
	// },
	// {
	// 	id: 2,
	// 	url: './images/finback_03.png',
	// 	type: 'image',
	// 	sort: 4
	// },
	{
		id: 3,
		url: 'Oscillation',
		type: 'component',
		sort: 1
	}
];

class Home extends React.Component {
	render() {
		return (
			<div className="smart-sections">
				<Splash images={medium} />
				<MainGrid />
				<section id="contact">
					<div>
						<h2>Want to work with us?</h2>
					</div>
					<div className="icon-btn round-o">
						<i className="fa fa-chevron-right" aria-hidden="true"></i>
					</div>
				</section>
				<Footer />
			</div>
		);
	}
}

const mapState = ({ posts }) => ({ posts });

export default connect(mapState)(Home);
