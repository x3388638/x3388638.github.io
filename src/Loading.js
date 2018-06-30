import React from 'react';
import { PulseLoader } from 'react-spinners';

import './Loading.css';

export default class Loading extends React.Component {
	render() {
		return (
			<div className="Loading">
				<PulseLoader
					loading
					color="#d3d3d3"
					size={ 12 }
					margin="5px"
				/>
			</div>
		)
	}
}
