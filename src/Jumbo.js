import React from 'react';
import {
	Row,
	Col
} from 'reactstrap';

import './Jumbo.css';
import ProfileImg from './profile.jpg';

export default class Jumbo extends React.Component {
	render() {
		return (
			<Row className="Jumbo">
				<Col className="Jumbo__container" md={ 12 }>
					<div>
						<img className="Jumbo__profileImg" src={ ProfileImg } alt="profile" />
					</div>
					<div className="Jumbo__name">
						<span>Y.Y. Chang</span>
					</div>
					<div>
						<a className="Jumbo__socialLink" href="https://github.com/x3388638" rel="noopener noreferrer" target="_blank">
							<i className="fa fa-github-square"></i> GitHub
						</a>
						<a className="Jumbo__socialLink" href="https://www.linkedin.com/in/yuyingchang/" rel="noopener noreferrer" target="_blank">
							<i className="fa fa-linkedin-square"></i> LinkedIn
						</a>
						<a className="Jumbo__socialLink" href="mailto:z3388638@gmail.com">
							<i className="fa fa-envelope-open"></i> Email
						</a>
					</div>
				</Col>
			</Row>
		);
	}
}
