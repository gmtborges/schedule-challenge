import React from 'react';
import { Box } from 'grommet';

const RightSide = props => (
	<Box
		direction="column"
		justify="center"
		align="center"
		background="white"
		width="50%"
	>
		{props.children}
	</Box>
);

export default RightSide;
