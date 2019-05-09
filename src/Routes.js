import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';

const Routes = () => (
	<BrowserRouter>
		<Route path="/" exact component={Login} />
		<Route path="/signup" component={Signup} />
	</BrowserRouter>
);

export default Routes;
