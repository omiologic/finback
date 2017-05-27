import React, { Component } from 'react';

export default class MainGridComponent extends Component {
	render() {
		return (
			<section id="main-section">
        <div className="flex flex-wrap flex-between">
          <div className="flex flex-col flex-col-sm-100 flex-col-lg-50">
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
              <div className="block-header bottom-both">
                2nd Anniversary Party &amp; Oscillation 4 Release &amp; BQExC Release
              </div>
            </div>
            <div className="big-block block-img">
              2
            </div>
          </div>
          <div className="flex flex-wrap flex-between flex-col-sm-100 flex-col-lg-50">  
            <div className="small-block block-text flex-col-sm-100 flex-col-md-50">
              <div className="block-title top-left">
                ABOUT FINBACK
              </div>
              <div className="block-header bottom-both">
                More about who we are and what we do
              </div>
            </div>
            <div className="small-block block-text flex-col-sm-100 flex-col-md-50">
              <div className="block-title top-left">
                SHOP
              </div>
              <div className="bottom-left">
                <div className="block-header">
                  Get some swag!
                </div>
                <div className="block-sub-header">
                  Finback gear and glassware
                </div>
              </div>
            </div>
            <div className="small-block block-img flex-col-xs-100">
              5
            </div>
            <div className="small-block block-text flex-col-sm-100 flex-col-md-50">
              <div className="block-title top-left">
                PRE-SALE
              </div>
              <div className="bottom-both">
                <div className="block-header">
                  Grab our limited number pre-release
                </div>
                <div className="block-sub-header">
                  Community Supported Beer program
                </div>
              </div>
            </div>
            <div className="small-block block-img flex-col-sm-100 flex-col-md-50">
              7
            </div>
          </div>
          <div className="flex flex-col flex-col-sm-100 flex-col-lg-50">
            <div className="big-block block-img">
              <div className="block-title top-left">
                VIEW ALL BEER
              </div>
            </div>
          </div>
          <div className="flex flex-wrap flex-between flex-col-sm-100 flex-col-lg-50">  
            <div className="small-block block-text flex-col-xs-100">
              <div className="block-title top-left">
                PRESS
              </div>
              <div className="block-header bottom-both">
                DRAFT Magazine's The best beers we tasted this week picks Echelon
              </div>
            </div>
            <div className="small-block block-text flex-col-sm-100 flex-col-md-50">
              <div className="block-title top-left">
                JOIN US
              </div>
              <div className="bottom-both">
                <div className="block-header">
                  Become a champion of local beer
                </div>
                <div className="block-sub-header">
                  Community Beer Supported program
                </div>
              </div>
            </div>
            <div className="small-block block-img flex-col-sm-100 flex-col-md-50">
              11
            </div>
          </div>
        </div>
      </section>
		)
	}
}