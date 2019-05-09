import React from 'react';
import Routes from './Routes';
import { Grommet } from 'grommet';
import theme from './styles/theme';

function App() {
	return (
		<Grommet theme={theme}>
			<Routes />
		</Grommet>
	);
}

export default App;
