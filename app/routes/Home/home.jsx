import React from 'react';
import { connect } from 'react-redux';
import { medium } from '../../assets/medium';
import { Footer, Splash, MainGrid } from '../../components';

class Home extends React.Component {
	render() {
		return (
			<div className="smart-sections">
				<Splash images={medium.main} />
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
