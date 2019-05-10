import React from 'react';
import Home from '../components/Home';
import { Box, Heading } from 'grommet';
import FormSchedule from '../components/UserSchedule/FormSchedule';
import { getUsers } from '../utils/auth';

const User = props => {
	const doctors = getUsers()
		.filter(it => it.hasOwnProperty('crm'))
		.map(it => `${it.name} / ${it.skill}`);

	return (
		<Home history={props.history}>
			<Box width="xlarge" margin={{ vertical: '60px' }}>
				<Box direction="column" align="center" justify="center">
					<Heading level="3">Marque sua consulta</Heading>
					<Box width="75%">
						<FormSchedule doctors={doctors} />
					</Box>
				</Box>
			</Box>
		</Home>
	);
};

export default User;
