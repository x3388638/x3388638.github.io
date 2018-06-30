import React from 'react';
import {
	Container,
	Col,
	Row,
	Card
} from 'reactstrap';
import BlockTitle from './BlockTitle';
import Loading from './Loading';

import './Skill.css';

class CardLabel extends React.Component {
	render() {
		return (
			<div className="CardLabel">
				<span className={`CardLabel__content ${ this.props.color }`}>{ this.props.text }</span>
			</div>
		)
	}
}

export default class Skill extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			skills: null
		};
	}

	componentDidMount() {
		fetch(`${ process.env.PUBLIC_URL }/content/skill.json`).then(res => res.json()).then((skills) => {
			this.setState({
				skills
			});
		});
	}

	render() {
		return (
			<Container className="Skill">
				<Row>
					<Col md={ 12 }>
						<BlockTitle
							icon="code"
							title="技能專長"
						/>
					</Col>
					<div className="Skill__content">
						<Col md={ 12 }>
							{ !this.state.skills &&
								<Loading />
							}
							{ !!this.state.skills &&
								<Row>
									<Col className="Skill__block" md={ 6 }>
										<Card body>
											<CardLabel color="success" text="熟悉" />
											{ this.state.skills &&
												<Row>
													{ this.state.skills[0].map((skill, i) => (
														<Col key={ i } className="Skill__item" xs={ 6 }>
															<a className="Skill__text" href={ skill.link } target="_blank" rel="noopener noreferrer">{ skill.text }</a>
														</Col>
													)) }
												</Row>
											}
										</Card>
									</Col>
									<Col className="Skill__block" md={ 6 }>
										<Card body>
											<CardLabel color="yellow" text="略懂" />
											{this.state.skills &&
												<Row>
													{ this.state.skills[1].map((skill, i) => (
														<Col key={ i } className="Skill__item" xs={ 6 }>
															<a className="Skill__text" href={ skill.link } target="_blank" rel="noopener noreferrer">{ skill.text }</a>
														</Col>
													)) }
												</Row>
											}
										</Card>
									</Col>
								</Row>
							}
						</Col>
					</div>
				</Row>
			</Container>
		)
	}
}
