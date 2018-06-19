import React from 'react';
import {
	Row,
	Col
} from 'reactstrap';

import './Footer.css';

export default class Footer extends React.Component {
	render() {
		return (
			<Row className="Footer">
				<Col>
					2018 &copy; Y.Y. Chang
					<div>
						<a className="github-button" href="https://github.com/x3388638/x3388638.github.io" data-show-count="true" aria-label="Star x3388638/x3388638.github.io on GitHub">Star</a>{' '}
						<a className="github-button" href="https://github.com/x3388638/x3388638.github.io/fork" data-icon="octicon-repo-forked" data-show-count="true" aria-label="Fork x3388638/x3388638.github.io on GitHub">Fork</a>
					</div>
				</Col>
			</Row>
		)
	}
}
