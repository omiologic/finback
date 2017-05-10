import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ParallaxSection extends React.Component {
  render() {    
    const { id, style, fullHeight, isCurrent, mouseX, mouseY } = this.props;

    let classes = classNames('parallax-section', { fullHeight: fullHeight });

    let children = React.Children.map(this.props.children, function(child){
      return React.cloneElement(child, { isCurrent, mouseX, mouseY });
    });

    return React.createElement(
      'div',
      { 
        id: id, 
        className: classes,
        style: style
      },
      [children]
    );
  }
}

ParallaxSection.propTypes = {  
  isCurrent: PropTypes.bool,
  mouseX: PropTypes.number,
  mouseY: PropTypes.number,
  fullHeight: PropTypes.bool,
  style: PropTypes.object
};
ParallaxSection.defaultProps = {  
  isCurrent: false,
  mouseX: 0,
  mouseY: 0,
  fullHeight: false,
  style: {}
};

export default ParallaxSection;