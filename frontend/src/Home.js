import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Container } from 'reactstrap';

export default class Home extends Component {
	state = {
		isLoading: true,
	};

	render() {
		return (
			<div>
				<AppNavbar/>
				<Container fluid>
					{"Dupa"}
				</Container>
			</div>
		);
	}
}