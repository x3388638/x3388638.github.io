import React from 'react';
import {
	Row,
	Col
} from 'reactstrap';
import styled from 'styled-components';

import ProfileImg from './profile.jpg';
import SETTINGS from './settings';

const JumboWrapper = styled(Row)`
	background: var(--dark);
	padding-top: 120px;
	padding-bottom: 30px;
`;

const JumboContainer = styled(Col)`
	text-align: center;
`;

const JumboProfileImg = styled.img`
	height: 180px;
	border-radius: 120px;
	box-shadow: 0 0 20px 5px;
`;

const JumboName = styled.div`
	margin-top: 15px;
	margin-bottom: 30px;
	color: var(--light);
	font-size:30px;
`;

const JumboSocialLink = styled.a`
	&,
	&:hover,
	&:visited {
		display: inline-block;
		color: var(--light);
		font-size: 14px;
		font-weight: 100;
		margin-left: 10px;
		margin-right: 10px;
		text-decoration: none;
	}
`;

export default class Jumbo extends React.Component {
	render() {
		return (
			<JumboWrapper>
				<JumboContainer md={ 12 }>
					<div>
						<JumboProfileImg src={ ProfileImg } alt="profile" />
					</div>
					{ SETTINGS.name &&
						<JumboName>
							<span>{ SETTINGS.name }</span>
						</JumboName>
					}
					<div>
						{ SETTINGS.githubAccount &&
							<JumboSocialLink href={ `https://github.com/${ SETTINGS.githubAccount }` } rel="noopener noreferrer" target="_blank">
								<i className="fa fa-github-square"></i> GitHub
							</JumboSocialLink>
						}
						{ SETTINGS.linkedinURL &&
							<JumboSocialLink href={ SETTINGS.linkedinURL } rel="noopener noreferrer" target="_blank">
								<i className="fa fa-linkedin-square"></i> LinkedIn
							</JumboSocialLink>
						}
						{ SETTINGS.email && 
							<JumboSocialLink href={ `mailto:${ SETTINGS.email }` }>
								<i className="fa fa-envelope-open"></i> Email
							</JumboSocialLink>
						}
					</div>
				</JumboContainer>
			</JumboWrapper>
		);
	}
}
