import React from 'react';
import {
	Row,
	Col,
	Card,
	CardTitle,
	CardSubtitle
} from 'reactstrap';
import styled from 'styled-components';

import WorkWrapper from './SectionContainer';
import BlockTitle from './BlockTitle';
import Loading from './Loading';

const ReactMarkdown = require('react-markdown');

const WorkContent = styled.div`
	margin-left: 40px;
	@media (max-width: 576px) {
		margin-left: 0
	}
`;

const WorkItem = styled(Col)`
	margin-bottom: 10px;
`;

WorkItem.Card = styled(Card)`
	border-radius: 0 !important;
	border: 0 !important;
	border-left: 5px solid #d3d3d3 !important;
	background: #fbfbfb !important;
	transition: .4s all;
	&:hover {
		box-shadow: 0 0 5px 0;
		background: #fff !important;
	}
`;

WorkItem.At = styled.span`
	font-size: 18px;
	margin-bottom: 10px !important;
	font-weight: 400;
`;

WorkItem.Time = styled(CardSubtitle)`
	font-size: 16px;
	margin-bottom: 10px !important;
	font-weight: 300;
`;

export default class Work extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			works: null
		};
	}

	componentDidMount() {
		fetch(`${ process.env.PUBLIC_URL }/content/works/list.json`).then((res) => res.json()).then((list) => {
			Promise.all(list.map((workData) => 
				fetch(`${ process.env.PUBLIC_URL }/content/works/${ workData.key }.md`)
					.then((res) => res.text())
					.then((desc) => Object.assign({}, workData, { desc }))
			)).then((works) => {
				this.setState({
					works
				});
			});
		});
	}

	render() {
		return (
			<WorkWrapper>
				<Row>
					<Col md={ 12 }>
						<BlockTitle
							icon="briefcase"
							title="工作經驗"
						/>
					</Col>
				</Row>
				<WorkContent>
					<Row>
						{ !this.state.works &&
							<Loading />
						}
						{ this.state.works && this.state.works.map((work) => {
							return (
								<WorkItem key={ work.key } md={ 12 }>
									<WorkItem.Card body>
										<CardTitle>{ work.title } <WorkItem.At>{ work.at }</WorkItem.At></CardTitle>
										<WorkItem.Time>
											<i className="fa fa-clock-o" aria-hidden="true"></i> {`${ work.start } - ${ work.end }`}
										</WorkItem.Time>
										<hr />
										<ReactMarkdown source={ work.desc } />
									</WorkItem.Card>
								</WorkItem>
							)
						})}
					</Row>
				</WorkContent>
			</WorkWrapper>
		)
	}
}
