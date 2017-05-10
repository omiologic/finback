import React from 'react';
import PropTypes from 'prop-types';

class CubeNav extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		const { rotate, close } = this.props;		
		if(close) {
			return (
				<div>
					<div className="smart-btn close-btn" style={{right:0}} onClick={()=>{rotate('front')}}>
		        <i className="fa fa-times"></i>
		      </div>   
		    </div>
			);	
		} else {
			return (
				<div>
					<div className="smart-btn menu-btn" onClick={()=>{rotate('menu')}}>
	          <i className="fa fa-bars"></i>
	        </div>
	        <div className="smart-btn rotate-right-btn" onClick={()=>{rotate('right')}}>
	          <i className="fa fa-angle-right"></i>
	        </div>
	        <div className="smart-btn rotate-left-btn" onClick={()=>{rotate('left')}}>
	          <i className="fa fa-angle-left"></i>
	        </div>
	      </div>
			);
		}
	}
}

CubeNav.propTypes = {
	close: PropTypes.bool
};
CubeNav.defaultProps = {
	close: false
};

export default CubeNav;