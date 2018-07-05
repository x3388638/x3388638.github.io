import React from 'react';
import {
	Container,
	Row,
	Col
} from 'reactstrap';
import styled from 'styled-components';

import BlockTitle from './BlockTitle';
import Loading from './Loading';

const EducationWrapper = styled(Container)`
	padding-top: 20px;
	color: var(--dark);
`;

const EducationContenr = styled.div`
	margin-left: 40px;
	@media (max-width: 576px) {
		margin-left: 0;
	}
`;

const EducationItem = styled.div`
	padding-left: 10px;
	border-left: 4px solid #d3d3d3;
	margin-bottom: 10px;
`;

const EducationSchool = styled.h5`
	display: inline;
`;

const EducationTime = styled.span`
	margin-left: 10px;
	font-size: 14px;
`;

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
			<EducationWrapper>
				<Row>
					<Col md={ 12 }>
						<BlockTitle
							icon="graduation-cap"
							title="學歷"
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<EducationContenr>
							{ !this.state.education &&
								<Loading />
							}
							{ this.state.education && this.state.education.map((education, i) => (
								<EducationItem key={i}>
									<EducationSchool>{education.school}</EducationSchool>
									<EducationTime>
										<i className="fa fa-clock-o" aria-hidden="true"></i> {education.start} - {education.end}
									</EducationTime><br />
									{education.dept} {education.degree}
								</EducationItem>
							))}
						</EducationContenr>
					</Col>
				</Row>
			</EducationWrapper>
		)
	}
}
