import React from 'react';
import {
	Container,
	Row,
	Col
} from 'reactstrap';

import BlockTitle from './BlockTitle';

export default class Education extends React.Component {
	render() {
		return (
			<Container>
				<Row>
					<Col>
						<BlockTitle
							icon="graduation-cap"
							title="學歷"
						/>
					</Col>
				</Row>
			</Container>
		)
	}
}
