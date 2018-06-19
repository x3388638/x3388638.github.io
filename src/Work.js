import React from 'react';
import {
	Container,
	Row,
	Col,
	Card,
	CardTitle,
	CardSubtitle
} from 'reactstrap';
import BlockTitle from './BlockTitle';

import './Work.css';

const ReactMarkdown = require('react-markdown');

export default class Work extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			works: null
		};
	}

	componentDidMount() {
		let works = [];
		fetch(`${ process.env.PUBLIC_URL }/content/works/list.json`).then(res => res.json()).then((list) => {
			list.reduce((p, _, i) => {
				return p.then(() => {
					return new Promise((resolve) => {
						const workData = list[i];
						fetch(`${process.env.PUBLIC_URL}/content/works/${workData.key}.md`).then(res => res.text()).then((desc) => {
							workData.desc = desc;
							works.push(workData);
							console.log(workData.key)
							resolve();
						});
					});
				});
			}, Promise.resolve()).then(() => {
				this.setState({
					works
				});
			});
		});
	}

	render() {
		return (
			<Container className="Work">
				<Row>
					<Col md={ 12 }>
						<BlockTitle
							icon="briefcase"
							title="工作經驗"
						/>
					</Col>
				</Row>
				<div className="Work__content">
					<Row>
						{ this.state.works && this.state.works.map((work) => {
							return (
								<Col key={ work.key } className="WorkItem" md={ 12 }>
									<Card className="WorkItem__card" body>
										<CardTitle className="WorkItem__title">{ work.title } <span className="WorkItem__at">{ work.at }</span></CardTitle>
										<CardSubtitle className="WorkItem__time">
											<i className="fa fa-clock-o" aria-hidden="true"></i> {`${ work.start } - ${ work.end }`}
										</CardSubtitle>
										<hr />
										<ReactMarkdown source={ work.desc } />
									</Card>
								</Col>
							)
						})}
					</Row>
				</div>
			</Container>
		)
	}
}
