import React from 'react';
import {
	Container,
	Row,
	Col
} from 'reactstrap';

import BlockTitle from './BlockTitle';
import Loading from './Loading';

import './Education.css';

export default class Education extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			education: null
		};
	}

	componentDidMount() {
		fetch(`${ process.env.PUBLIC_URL }/content/education.json`).then(res => res.json()).then((education) => {
			this.setState({
				education
			});
		});
	}

	render() {
		return (
			<Container className="Education">
				<Row>
					<Col md={ 12 }>
						<BlockTitle
							icon="graduation-cap"
							title="學歷"
						/>
					</Col>
					<div className="Education__content">
						{ !this.state.education &&
							<Loading />
						}
						{ this.state.education && this.state.education.map((education, i) => (
							<div key={ i } className="Education__item">
								<h5 className="Education__school">{ education.school }</h5>
								<span className="Education__time">
										<i className="fa fa-clock-o" aria-hidden="true"></i> { education.start } - { education.end }
								</span><br />
								{ education.dept } { education.degree }
							</div>
						)) }
					</div>
				</Row>
			</Container>
		)
	}
}
