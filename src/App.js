import React, { Component } from 'react';
import {
	Container
} from 'reactstrap';

import Jumbo from './Jumbo';
import About from './About';
import Education from './Education';

import './App.css';

export default class App extends Component {
	render() {
		return (
			<Container className="Main" fluid>
				<Jumbo />
				<About />
				<Education />
			</Container>
		);
	}
}
