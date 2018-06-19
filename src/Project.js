import React from 'react';
import {
	Container,
	Row,
	Col,
	Card,
	CardTitle,
	CardSubtitle,
	Badge
} from 'reactstrap';
import BlockTitle from './BlockTitle';

import './Project.css';
import SETTINGS from './settings';

const ReactMarkdown = require('react-markdown');

export default class Project extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: null
		};
	}

	componentDidMount() {
		let projects = [];
		fetch(`${ process.env.PUBLIC_URL }/content/projects/list.json`).then(res => res.json()).then((list) => {
			list.reduce((p, projectData, i) => {
				return p.then(() => {
					return new Promise((resolve) => {
						fetch(`${ process.env.PUBLIC_URL }/content/projects/${ projectData.key }.md`).then(res => res.text()).then((desc) => {
							projectData.desc = desc;
							projects.push(projectData);
							resolve();
						});
					});
				});
			}, Promise.resolve()).then(() => {
				this.setState({
					projects
				});
			});
		});
	}

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
				<div className="Project__content">
					<Row>
						{ this.state.projects && this.state.projects.map((project) => (
							<Col key={ project.key } className="ProjectItem" md={ 12 }>
								<Card className="ProjectItem__card" body>
									<CardTitle className="ProjectItem__title">
										{ project.title }
										{ project.link &&
											<a className="ProjectItem__link" href={ project.link } rel="noopener noreferrer" target="_blank">
												<i className="fa fa-external-link" aria-hidden="true"></i>
											</a>
										}
									</CardTitle>
									<CardSubtitle className="ProjectItem__time">
										<i className="fa fa-clock-o" aria-hidden="true"></i> { project.time }
								</CardSubtitle>
									<div className="ProjectItem__tagContainer">
										{ project.tags.map((tag) => (
											<Badge key={ tag } className="ProjectItem__tag" color="dark" pill>{ tag }</Badge>
										)) }
									</div>
									<hr />
									<ReactMarkdown source={ project.desc } />
								</Card>
							</Col>
						))}
					</Row>
					{ SETTINGS.githubAccount && 
						<Row>
							<Col className="Project__more">
								歡迎至 <a href={ `https://github.com/${ SETTINGS.githubAccount }` } rel="noopener noreferrer" target="_blank">GitHub</a> 或 <a href={ `https://gist.github.com/${ SETTINGS.githubAccount }` } rel="noopener noreferrer" target="_blank">Gist</a> 查詢更多專案
							</Col>
						</Row>
					}
				</div>
			</Container>
		)
	}
}
