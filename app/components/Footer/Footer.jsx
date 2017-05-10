import React, { Component } from 'react';
export default class FooterComponent extends Component {
	render() {
		return (
			<section id="footer" className="ui-content">
				<div className="brand">
					<img src="./images/logo.png" alt="Finback Brewery" />
				</div>
				<div className="business-info">
					<div>WHALEY GOOD BEER</div>
					<div>love life, have fun, love art, drink beer</div>
					<div>FINBACK BREWERY</div>
					<div>78-01 77th Ave</div>
					<div>QUEENS, NEW YORK</div>
				</div>
				<div className="social-media">
					<div>
						<div className="icon-btn inline">
	            <i className="fa fa-facebook-square"></i>
	          </div>
	          <div className="icon-btn inline">
	            <i className="fa fa-instagram"></i>
	          </div>
	          <div className="icon-btn inline">
	            <i className="fa fa-twitter-square"></i>
	          </div>
	          <div className="icon-btn inline">
	            <i className="fa fa-newspaper-o"></i>		
	          </div>
					</div>
					<div>info@finbackbrewery.com</div>
				</div>
				<div className="sitemap">
					<div>Home</div>
					<div>About</div>
					<div>Beers</div>
					<div>Shop</div>
					<div>CSB</div>
				</div>
      </section>
		)
	}
}
