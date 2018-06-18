import React from 'react';
import {
	Container,
	Row,
	Col
} from 'reactstrap';

import './About.css';
import BlockTitle from "./BlockTitle";

export default class About extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			content: ''
		};
	}

	componentDidMount() {
		fetch(`${ process.env.PUBLIC_URL }/content/about.txt`).then((res) => {
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
					<Col className="About__content" md={ 12 }>{ this.state.content }</Col>
				</Row>
			</Container>
		)
	}
}
