import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import HomeDoctor from './pages/HomeDoctor';
import HomeUser from './pages/HomeUser';
import loggedIn from './utils/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			loggedIn() ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{
						pathname: '/',
						state: { from: props.location }
					}}
				/>
			)
		}
	/>
);

const Routes = () => (
	<HashRouter>
		<Route path="/" exact component={Login} />
		<Route path="/signup" component={Signup} />
		<PrivateRoute path="/home/doctor" component={HomeDoctor} />
		<PrivateRoute path="/home/user" component={HomeUser} />
	</HashRouter>
);

export default Routes;
