import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';

const Routes = () => (
	<HashRouter>
		<Route path="/" exact component={Login} />
		<Route path="/signup" component={Signup} />
	</HashRouter>
);

export default Routes;
