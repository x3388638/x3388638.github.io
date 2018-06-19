import React from 'react';
import {
	Row,
	Col
} from 'reactstrap';

import './Jumbo.css';
import ProfileImg from './profile.jpg';
import SETTINGS from './settings';

export default class Jumbo extends React.Component {
	render() {
		return (
			<Row className="Jumbo">
				<Col className="Jumbo__container" md={ 12 }>
					<div>
						<img className="Jumbo__profileImg" src={ ProfileImg } alt="profile" />
					</div>
					{ SETTINGS.name &&
						<div className="Jumbo__name">
							<span>{ SETTINGS.name }</span>
						</div>
					}
					<div>
						{ SETTINGS.githubAccount &&
							<a className="Jumbo__socialLink" href={ `https://github.com/${ SETTINGS.githubAccount }` } rel="noopener noreferrer" target="_blank">
								<i className="fa fa-github-square"></i> GitHub
							</a>
						}
						{ SETTINGS.linkedinURL &&
							<a className="Jumbo__socialLink" href={ SETTINGS.linkedinURL } rel="noopener noreferrer" target="_blank">
								<i className="fa fa-linkedin-square"></i> LinkedIn
							</a>
						}
						{ SETTINGS.email && 
							<a className="Jumbo__socialLink" href={ `mailto:${ SETTINGS.email }` }>
								<i className="fa fa-envelope-open"></i> Email
							</a>
						}
					</div>
				</Col>
			</Row>
		);
	}
}
