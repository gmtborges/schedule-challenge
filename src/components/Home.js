import React from 'react';
import { Box, Heading, Button } from 'grommet';
import { Schedules } from 'grommet-icons';

const Home = props => {
	const logout = () => {
		localStorage.removeItem('loggedIn');
		props.history.push('/');
	};

	return (
		<Box direction="column">
			<Box
				background="brand"
				direction="row"
				width="100%"
				height="80px"
				align="center"
				elevation="small"
			>
				<Heading level="3" margin={{ horizontal: '24px' }}>
					Agendamento
				</Heading>
				<Schedules size="medium" />
				<Box height="60" margin={{ left: 'auto', right: '24px' }}>
					<Button primary label="Sair" onClick={logout} />
				</Box>
			</Box>
			<Box width="100vw" height="100vh" align="center">
				{props.children}
			</Box>
		</Box>
	);
};

export default Home;
