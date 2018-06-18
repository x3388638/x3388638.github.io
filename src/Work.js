import React from 'react';
import {
	Container,
	Row,
	Col
} from 'reactstrap';
import BlockTitle from './BlockTitle';

import './Work.css';

export default class Work extends React.Component {
	render() {
		return (
			<Container className="Work">
				<Row>
					<Col>
						<BlockTitle
							icon="briefcase"
							title="工作經驗"
						/>
					</Col>
				</Row>
			</Container>
		)
	}
}
