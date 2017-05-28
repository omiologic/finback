import React from 'react';
import { connect } from 'react-redux';
import { medium } from '../../assets/medium';
import { Splash } from '../../components';
import { verifyAge } from '../../reducers/age';

class Age extends React.Component {
	render() {
		return (
			<div className="smart-sections">
				<Splash images={medium.main} />
				<div style={{
					position: 'absolute',
					fontSize: '50px'
				}}>
					Are you over 21 old? <br />
					<span onClick={()=>{this.props.verifyAge()}}>YES</span> | <span>NO</span>
				</div>
			</div>
		);
	}
}

const mapState = null;
const mapDispatch = { verifyAge };

export default connect(mapState, mapDispatch)(Age);
