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
import styled from 'styled-components';

import BlockTitle from './BlockTitle';
import Loading from './Loading';

import SETTINGS from './settings';

const ReactMarkdown = require('react-markdown');

const ProjectWrapper = styled(Container)`
	padding-top: 20px;
	color: var(--dark);
`;

const ProjectContent = styled.div`
	margin-left: 40px;
	@media (max-width: 576px) {
		margin-left: 0;
	}
`;

const ProjectItem = styled(Col)`
	margin-bottom: 10px;
`;

ProjectItem.Link = styled.a`
	font-size: 18px;
	margin-bottom: 10px !important;
	font-weight: 400;
	margin-left: 10px;
	&::after {
		content: '專案連結';
		opacity: 0.1;
		margin-left: 5px;
		transition: .3s all;
	}
`;

ProjectItem.Card = styled(Card)`
	border-radius: 0 !important;
	border: 0 !important;
	border-right: 5px solid #d3d3d3 !important;
	background: #fbfbfb !important;
	transition: .4s all;
	&:hover {
		box-shadow: 0 0 5px 0;
		background: #fff !important;
		${ ProjectItem.Link }::after {
			opacity: 1;
		}
	}
`;

ProjectItem.Time = styled(CardSubtitle)`
	ont-size: 16px;
	margin-bottom: 10px !important;
	font-weight: 300;
`;

ProjectItem.Tag = styled(Badge)`
	margin-right: 5px;
`;

const ProjectMore = styled(Col)`
	text-align: center;
`;

export default class Project extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: null
		};

		this.getRepo = this.getRepo.bind(this);
	}

	componentDidMount() {
		let projects = [];
		fetch(`${ process.env.PUBLIC_URL }/content/projects/list.json`).then(res => res.json()).then((list) => {
			list.reduce((p, projectData) => {
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
				// get github stars & forks
				this.getRepo(projects);
				this.setState({
					projects
				});
			});
		});
	}

	getRepo(oriProjects = this.state.projects) {
		const projects = [];
		oriProjects.reduce((p, projectData) => {
			return p.then(() => new Promise((resolve) => {
				const match = projectData.link.match(/^http(s)?:\/\/github.com\/([a-zA-Z0-9]*)\/([a-zA-Z0-9\-_.]*)(\/)?$/);
				if (match) {
					const [,, owner, repo] = match;
					fetch(`https://api.github.com/repos/${ owner }/${ repo }`).then(res => res.json()).then((repoData) => {
						projectData.stars = repoData.stargazers_count;
						projectData.forks = repoData.forks_count;
						projects.push(projectData);
						resolve();
					});

					return;
				}

				projects.push(projectData);
				resolve();
			}));
		}, Promise.resolve()).then(() => {
			console.log(projects);
		});
	}

	render() {
		return (
			<ProjectWrapper>
				<Row>
					<Col>
						<BlockTitle
							icon="folder-open"
							title="個人專案"
						/>
					</Col>
				</Row>
				<ProjectContent>
					<Row>
						{ !this.state.projects &&
							<Loading />
						}
						{ this.state.projects && this.state.projects.map((project) => (
							<ProjectItem key={ project.key } md={ 12 }>
								<ProjectItem.Card body>
									<CardTitle>
										{ project.title }
										{ project.link &&
											<ProjectItem.Link href={ project.link } rel="noopener noreferrer" target="_blank">
												<i className="fa fa-external-link" aria-hidden="true"></i>
											</ProjectItem.Link>
										}
									</CardTitle>
									<ProjectItem.Time>
										<i className="fa fa-clock-o" aria-hidden="true"></i> { project.time }
									</ProjectItem.Time>
									<div>
										<i className="fa fa-github" aria-hidden="true"></i>
										<small><i className="fa fa-star" aria-hidden="true"></i> 15</small>
										<small><i className="fa fa-code-fork" aria-hidden="true"></i> 15</small>
									</div>
									<div>
										{ project.tags.map((tag) => (
											<ProjectItem.Tag key={ tag } color="dark" pill>{ tag }</ProjectItem.Tag>
										)) }
									</div>
									<hr />
									<ReactMarkdown source={ project.desc } />
								</ProjectItem.Card>
							</ProjectItem>
						))}
					</Row>
					{ SETTINGS.githubAccount && 
						<Row>
							<ProjectMore className="Project__more">
								歡迎至 <a href={ `https://github.com/${ SETTINGS.githubAccount }` } rel="noopener noreferrer" target="_blank">GitHub</a> 或 <a href={ `https://gist.github.com/${ SETTINGS.githubAccount }` } rel="noopener noreferrer" target="_blank">Gist</a> 查詢更多專案
							</ProjectMore>
						</Row>
					}
				</ProjectContent>
			</ProjectWrapper>
		)
	}
}
