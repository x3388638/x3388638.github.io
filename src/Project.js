import React from 'react';
import {
	Container,
	Row,
	Col
} from 'reactstrap';
import BlockTitle from './BlockTitle';

import './Project.css';

export default class Project extends React.Component {
	render() {
		return (
			<Container className="Project">
				<Row>
					<Col>
						<BlockTitle
							icon="folder-open"
							title="個人專案"
						/>
					</Col>
				</Row>
			</Container>
		)
	}
}
