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
        <section id="main" >
          <div style={{
            height: '100vh',
            backgroundColor: 'gray'
          }}>
            this is place holder for the main section
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