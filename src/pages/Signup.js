import React, { Component } from 'react';
import { Box, Tabs, Tab } from 'grommet';
import LeftSide from '../components/LeftSide';
import RightSide from '../components/RightSide';
import FormSignupUser from '../components/Signup/FormSignupUser';
import FormSignupDoctor from '../components/Signup/FormSignupDoctor';

export default class Signup extends Component {
	handleSubmit = event => {
		let users = localStorage.getItem('users')
			? JSON.parse(localStorage.getItem('users'))
			: [];
		users.push(event.value);
		localStorage.setItem('users', JSON.stringify(users));
		event.value = {};
		this.props.history.push('/');
	};

	render() {
		return (
			<Box direction="row" height="100vh">
				<LeftSide />
				<RightSide>
					<Tabs width="498px">
						<Tab title="Sou paciente">
							<FormSignupUser handleSubmit={this.handleSubmit} />
						</Tab>
						<Tab title="Sou médico">
							<FormSignupDoctor handleSubmit={this.handleSubmit} />
						</Tab>
					</Tabs>
				</RightSide>
			</Box>
		);
	}
}
