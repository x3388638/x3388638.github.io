import React from 'react';
import {
	Row,
	Col
} from 'reactstrap';
import styled from 'styled-components';

import SETTINGS from './settings';

const FooterWrapper = styled(Row)`
	background: var(--dark);
	color: var(--light);
	text-align: center;
	font-size: 14px;
    font-weight: 300;
    padding-top: 50px;
	padding-bottom: 20px;
	margin-top: 20px;
`;

export default class Footer extends React.Component {
	render() {
		return (
			<FooterWrapper>
				<Col>
					{ (new Date()).getFullYear() } &copy; { SETTINGS.name }
					<div>
						<a className="github-button" href="https://github.com/x3388638/x3388638.github.io" data-show-count="true" aria-label="Star x3388638/x3388638.github.io on GitHub">Star</a>{' '}
						<a className="github-button" href="https://github.com/x3388638/x3388638.github.io/fork" data-icon="octicon-repo-forked" data-show-count="true" aria-label="Fork x3388638/x3388638.github.io on GitHub">Fork</a>
					</div>
				</Col>
			</FooterWrapper>
		)
	}
}
