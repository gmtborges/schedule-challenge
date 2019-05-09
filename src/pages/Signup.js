import React, { Component } from 'react';
import { Box, Tabs, Tab } from 'grommet';
import LeftSide from '../components/LeftSide';
import RightSide from '../components/RightSide';
import FormSignupUser from '../components/Signup/FormSignupUser';
import FormSignupDoctor from '../components/Signup/FormSignupDoctor';

export default class Signup extends Component {
	handleSubmitUser = event => {
		console.log(event.value);
		event.value = {};
	};

	handleSubmitDoctor = event => {
		console.log(event.value);
		event.value = {};
	};

	render() {
		return (
			<Box direction="row" height="100vh">
				<LeftSide />
				<RightSide>
					<Tabs width="498px">
						<Tab title="Sou paciente">
							<FormSignupUser handleSubmit={this.handleSubmitUser} />
						</Tab>
						<Tab title="Sou médico">
							<FormSignupDoctor handleSubmit={this.handleSubmitDoctor} />
						</Tab>
					</Tabs>
				</RightSide>
			</Box>
		);
	}
}
