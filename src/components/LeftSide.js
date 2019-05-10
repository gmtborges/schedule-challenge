import React from 'react';
import { Box, Heading } from 'grommet';
import { Schedules } from 'grommet-icons';

const LeftSide = () => (
	<Box background="brand" width="50%" align="center">
		<Heading margin={{ top: '330px' }}>Agendamento</Heading>
		<Schedules size="xlarge" />
	</Box>
);

export default LeftSide;
