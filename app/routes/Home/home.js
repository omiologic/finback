import React from 'react';
import { connect } from 'react-redux';
// import * as Component from 'APP/app/components';
import { Content, Parallax, Distortion, Footer } from '../../components';
require('./home.stylesheet.scss');
class Home extends React.Component {
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
  render(){
    const { mouseX, mouseY } = this.state;
    // console.log('HOME PROPS', this.props);
    const medium = [
      {
        id:1,
        url: './images/finback_01.png',
        type: 'image',
        sort: 1
      },{
        id:1,
        url: './images/finback_03.png',
        type: 'image',
        sort: 4
      }   
    ]
    return(
      <div className="smart-sections">
        <section id="splash" className="fullscreen">
          <div className="parallax-section full-height" onMouseMove={this.onMouseMove.bind(this)}>
            <Distortion.Container mouseX={mouseX} mouseY={mouseY} >
              <Distortion.Content layer={medium[0]} />
              <Distortion.Content layer={medium[1]} />            
            </Distortion.Container>
          </div>
        </section>
        <section className="main-section">
          <div className="smart-grid">
            <div className="row">
              <div className="column">
                <div className="smart-grid">
                  <div className="row">
                    <div className="column small-block full-width">
                      <div className="block block-text">
                        <div className="block-title block-top-left">
                          <div className="title">UPCOMING EVENT</div>
                        </div>
                        <div className="block-date block-top-right">
                          <div className="month">DECEMBER</div>
                          <div className="day">10</div>
                        </div>
                        <div className="block-content block-bottom-left">
                          <div className="content">
                            <h3>2nd Anniversary Party &amp; Oscillation 4 Release &amp; BQExC Release</h3>
                          </div>
                        </div> 
                      </div>
                    </div>
                    <div className="column big-block full-width">
                      <div className="block block-img" id="event">2</div>
                    </div>
                  </div>
                </div> 
              </div>
              <div className="column">
                <div className="smart-grid">
                  <div className="row">
                    <div className="column small-block pull-right">
                      <div className="block block-text">
                        <div className="block-title block-top-left">
                          <div className="title">SHOP</div>
                        </div>
                        <div className="block-content block-bottom-left">
                          <div className="content">
                            <h3>Get some swag!</h3>
                            <div>Finback gear and glassware</div>
                          </div>
                        </div> 
                      </div>
                    </div>
                    <div className="column small-block pull-right">
                      <div className="block block-text">
                        <div className="block-title block-top-left">
                          <div className="title">ABOUT FINBACK</div>
                        </div>
                        <div className="block-content block-bottom-left">
                          <div className="content">
                            <h3>More about who we are and what we do</h3>
                          </div>
                        </div> 
                      </div>
                    </div>
                    <div className="column small-block full-width pull-right">
                      <div className="block">5</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="column small-block">
                      <div className="block block-text">
                        <div className="block-title block-top-left">
                          <div className="title">PRE-SALE</div>
                        </div>
                        <div className="block-content block-bottom-left">
                          <div className="content">
                            <h3>Grab our limited number pre-release</h3>
                            <div>Community Supported Beer program</div>
                          </div>
                        </div> 
                      </div>
                    </div>
                    <div className="column small-block">
                      <div className="block">7</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="column">
                <div className="smart-grid">
                  <div className="row">     
                    <div className="column big-block full-width"> 
                      <div className="block block-text">
                        <div className="block-title block-top-left">
                          <div className="title">VIEW OUR BEERS</div>
                        </div>
                        <div className="block-content block-bottom-left">
                          <div className="content">
                            <h3>More about who we are and what we do</h3>
                          </div>
                        </div> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="smart-grid">
                  <div className="row">           
                    <div className="column small-block full-width">
                      <div className="block block-text">
                        <div className="block-title block-top-left">
                          <div className="title">PRESS</div>
                        </div>
                        <div className="block-content block-bottom-left">
                          <div className="content">
                            <h3>DRAFT Magazine's 
                            <br></br>
                            The best beers we tasted this week picks Echelon</h3>
                          </div>
                        </div> 
                      </div>
                    </div>
                    <div className="column small-block">
                      <div className="block block-text">
                        <div className="block-title block-top-left">
                          <div className="title">JOIN MEMBER</div>
                        </div>
                        <div className="block-content block-bottom-left">
                          <div className="content">
                            <h3>Become a champion of local beer</h3>
                            <div>Community Supported Beer program</div>
                          </div>
                        </div> 
                      </div>
                    </div>
                    <div className="column small-block">
                      <div className="block">11</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
    )
  }
}

const mapState = ({ posts }) => ({ posts });

export default connect(mapState)(Home);