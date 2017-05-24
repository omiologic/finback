import React, { Component } from 'react';

export default class MainGridComponent extends Component {
	render() {
		return (
			<section id="main-section">
        <div className="flex flex-wrap flex-between">
          <div className="flex flex-col flex-col-xs-100 flex-col-lg-50">
            <div className="small-block block-text">
              <div className="block-title top-left">
                UPCOMING EVENT
              </div>
              <div className="block-date top-right">
                <div className="month">
                  May
                </div>
                <div className="day">
                  15
                </div>
              </div>
              <div className="block-header bottom-left">
                2nd Anniversary Party &amp; Oscillation 4 Release &amp; BQExC Release
              </div>
            </div>
            <div className="big-block block-img">
              2
            </div>
          </div>
          <div className="flex flex-wrap flex-between flex-col-xs-100 flex-col-lg-50">  
            <div className="small-block flex-col-sm-100 flex-col-md-50">
              <div className="block-title top-left">
                ABOUT FINBACK
              </div>
              <div className="block-header bottom-left">
                More about who we are and what we do
              </div>
            </div>
            <div className="small-block flex-col-sm-100 flex-col-md-50">
              <div className="block-title top-left">
                SHOP
              </div>
              <div className="block-header lower-left">
                Get some swag!
              </div>
              <div className="block-sub-header bottom-left">
                Finback gear and glassware
              </div>
            </div>
            <div className="small-block block-img flex-col-xs-100">
              5
            </div>
            <div className="small-block flex-col-sm-100 flex-col-md-50">
              <div className="block-title top-left">
                PRE-SALE
              </div>
              <div className="block-header mid-lower-left">
                Grab our limited number pre-release
              </div>
              <div className="block-sub-header bottom-left">
                Community Supported Beer program
              </div>
            </div>
            <div className="small-block flex-col-sm-100 flex-col-md-50">
              7
            </div>
          </div>
          <div className="flex flex-col flex-col-xs-100 flex-col-lg-50">
            <div className="big-block block-img">
              <div className="block-title top-left">
                VIEW ALL BEER
              </div>
            </div>
          </div>
          <div className="flex flex-wrap flex-between flex-col-xs-100 flex-col-lg-50">  
            <div className="small-block flex-col-xs-100">
              <div className="block-title top-left">
                PRESS
              </div>
              <div className="block-header bottom-left">
                DRAFT Magazine's The best beers we tasted this week picks Echelon
              </div>
            </div>
            <div className="small-block flex-col-sm-100 flex-col-md-50">
              <div className="block-title top-left">
                JOIN US
              </div>
              <div className="block-header mid-lower-left">
                Become a champion of local beer
              </div>
              <div className="block-sub-header bottom-left">
                Community Beer Supported program
              </div>
            </div>
            <div className="small-block flex-col-sm-100 flex-col-md-50">
              11
            </div>
          </div>
        </div>
      </section>
		)
	}
}