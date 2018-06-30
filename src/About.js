import React from 'react';
import {
	Container,
	Row,
	Col
} from 'reactstrap';

import './About.css';

import BlockTitle from "./BlockTitle";
import Loading from './Loading';

const ReactMarkdown = require('react-markdown');

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
			<Container className="About">
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
						<div className="About__content">
							{ !this.state.content &&
								<Loading />
							}
							<ReactMarkdown source={this.state.content} />
						</div>
					</Col>
				</Row>
			</Container>
		)
	}
}
