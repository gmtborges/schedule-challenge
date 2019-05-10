import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Doctor from './pages/Doctor';
import User from './pages/User';
import UserSchedule from './pages/UserSchedule';
import { loggedIn } from './utils/auth';

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
		<PrivateRoute path="/doctor" component={Doctor} />
		<PrivateRoute path="/user" exact component={User} />
		<PrivateRoute path="/user/schedule" component={UserSchedule} />
	</HashRouter>
);

export default Routes;
