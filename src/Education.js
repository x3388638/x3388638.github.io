import React from 'react';
import {
	Container,
	Row,
	Col
} from 'reactstrap';

import BlockTitle from './BlockTitle';

import './Education.css';

export default class Education extends React.Component {
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
						<div className="Education__item">
							<h5 className="Education__school">國立暨南國際大學</h5>
							<span className="Education__time">
								<i className="fa fa-clock-o" aria-hidden="true"></i> 2016-2018
							</span><br />
							資訊管理研究所 碩士
						</div>
						<div className="Education__item">
							<h5 className="Education__school">國立暨南國際大學</h5>
							<span className="Education__time">
								<i className="fa fa-clock-o" aria-hidden="true"></i> 2012-2016
							</span><br />
							資訊管理學系 學士
						</div>
					</div>
				</Row>
			</Container>
		)
	}
}
