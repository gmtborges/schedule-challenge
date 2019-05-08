import React from 'react';
import Login from './pages/Login/Login';
import { Grommet } from 'grommet';
import theme from './styles/theme';

function App() {
	return (
		<Grommet theme={theme}>
			<Login />
		</Grommet>
	);
}

export default App;
