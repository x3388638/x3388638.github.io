import React from 'react';
import {
	Container,
	Row,
	Col
} from 'reactstrap';
import styled from 'styled-components';

import BlockTitle from "./BlockTitle";
import Loading from './Loading';
import SoldierTimer from './SoldierTimer';

const ReactMarkdown = require('react-markdown');

const AboutWarpper = styled(Container)`
	padding-top: 20px;
	color: var(--dark);
`;

const AboutContent = styled.div`
	white-space: pre-line;
	margin-left: 40px;
	@media (max-width: 576px) {
		margin-left: 0;
	}
`;

export default class About extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			content: ''
		};
	}

	componentDidMount() {
		fetch(`${ process.env.PUBLIC_URL }/content/about.md`).then((res) => {
			return res.text();
		}).then((content) => {
			this.setState({
				content
			});
		});
	}

	render() {
		return (
			<AboutWarpper>
				<Row>
					<Col md={ 12 }>
						<BlockTitle
							icon="info"
							title="關於我"
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<AboutContent>
							{ !this.state.content &&
								<Loading />
							}
							<SoldierTimer start="2018-08-22" end="2018-12-17" />
							<ReactMarkdown source={this.state.content} />
						</AboutContent>
					</Col>
				</Row>
			</AboutWarpper>
		)
	}
}
