import React, { Component } from 'react';
import {
	Container
} from 'reactstrap';

import Jumbo from './Jumbo';

import './App.css';

export default class App extends Component {
	render() {
		return (
			<Container fluid>
				<Jumbo />
			</Container>
		);
	}
}
