import React, { Component } from 'react';
import { Box } from 'grommet';
import LeftSide from '../components/LeftSide';
import RightSide from '../components/RightSide';
import FormLogin from '../components/Login/FormLogin';

export default class Login extends Component {
	handleSubmit = event => {
		if (!localStorage.getItem('users')) return;

		const users = JSON.parse(localStorage.getItem('users'));
		const user = users.filter(
			it =>
				it.email === event.value.email && it.password === event.value.password
		)[0];
		if (user) {
			localStorage.setItem('loggedIn', 'true');
			this.props.history.push(this.isDoctor(user) ? '/doctor' : '/user');
		}
	};

	isDoctor(user) {
		return user.hasOwnProperty('crm');
	}

	render() {
		return (
			<Box direction="row" height="100vh">
				<LeftSide />
				<RightSide>
					<Box width="498px">
						<FormLogin handleSubmit={this.handleSubmit} />
					</Box>
				</RightSide>
			</Box>
		);
	}
}
