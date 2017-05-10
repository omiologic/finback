import React from 'react';
import PropTypes from 'prop-types';

class ParallaxContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      zIndex: 0,
      mouseX: 0,
      mouseY: 0,
      lockScroll: false, // when it's set to true, prevents parallaxScroll to be invoke
      inTransition: false, // when it's set to true, prevents onMouseMove to be invoke
    };
  }

  onMouseMove(e) {
    if(!this.state.inTransition) {      
      this.setState({
        mouseX: e.pageX,
        mouseY: e.pageY,
      });
    }
  }

  render() {
    const { current, mouseX, mouseY, lockScoll } = this.state;

    let viewportHeight = document.documentElement.clientHeight,
        elementProps = Object.assign({
          className: "parallax-container",
          onMouseMove: this.onMouseMove.bind(this),
        });

    // if(!lockScoll) elementProps.onWheel = this.parallaxScroll.bind(this);

    // console.log(this.props.children)
    let children = this.props.children && this.props.children.length ? 
      React.Children.map(this.props.children, child => {
        
        let childProps = {};
        if(!child) return;
        if(child.type.name === 'ParallaxBackground'){
          childProps = {             
            current: current,
            mouseX: mouseX,
            mouseY: mouseY,
            initCurrent: this.initCurrent.bind(this)
          }        
        }
        return React.cloneElement(child, childProps);
      }) : null;

    // console.log(children)

    return React.createElement(
      'div',
      {...elementProps},
      [children]
    )    
  }
}
ParallaxContainer.propTypes = {
  sensitivity: PropTypes.number,
  slideDuration: PropTypes.number,
};
ParallaxContainer.defaultProps = {
  sensitivity: 50,
  slideDuration: 600
};

export default ParallaxContainer;