import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import { Router } from 'react-router-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import Login from './Login';
import FormLogin from '../components/Login/FormLogin';

afterEach(cleanup);

function renderWithRouter(
	ui,
	{
		route = '/',
		history = createMemoryHistory({ initialEntries: [route] })
	} = {}
) {
	return {
		...render(<Router history={history}>{ui}</Router>),
		// adding `history` to the returned utilities to allow us
		// to reference it in our tests (just try to avoid using
		// this to test implementation details).
		history
	};
}

test('should render Login page', () => {
	const { asFragment } = renderWithRouter(<Login />);

	expect(asFragment()).toMatchSnapshot();
});

test('login form must contain email and password fields', () => {
	const { getByLabelText } = renderWithRouter(<FormLogin />);
	const email = getByLabelText('E-mail');
	const password = getByLabelText('Senha');

	expect(email).toBeDefined();
	expect(password).toBeDefined();
});

test('onSubmit must be called with email and password filled', () => {
	const handleSubmit = jest.fn();
	const { getByLabelText, getByText } = renderWithRouter(
		<FormLogin handleSubmit={handleSubmit} />
	);
	const emailInput = getByLabelText('E-mail');
	const passwordInput = getByLabelText('Senha');
	fireEvent.change(emailInput, { target: { value: 'john@doe.com' } });
	fireEvent.change(passwordInput, { target: { value: '123' } });
	getByText(/entrar/i).click();

	expect(handleSubmit).toHaveBeenCalledTimes(1);
});

test('should go to signup page on "criar conta" button clicked', () => {
	const { getByText, history } = renderWithRouter(<FormLogin />);
	getByText(/criar conta/i).click();

	expect(history.location.pathname).toEqual('/signup');
});

test('should go to user page if login as a user', () => {
	const history = createBrowserHistory();
	const { getByLabelText, getByText } = renderWithRouter(
		<Login history={history} />
	);
	localStorage.setItem(
		'users',
		JSON.stringify([{ email: 'john@doe.com', password: '123' }])
	);

	const emailInput = getByLabelText('E-mail');
	const passwordInput = getByLabelText('Senha');
	fireEvent.change(emailInput, { target: { value: 'john@doe.com' } });
	fireEvent.change(passwordInput, { target: { value: '123' } });

	getByText(/entrar/i).click();

	expect(history.location.pathname).toEqual('/user');
});

test('should go to doctor page if login as a doctor', () => {
	const history = createBrowserHistory();
	const { getByLabelText, getByText } = renderWithRouter(
		<Login history={history} />
	);
	localStorage.setItem(
		'users',
		JSON.stringify([{ email: 'john@doctor.com', password: '123', crm: '123' }])
	);

	const emailInput = getByLabelText('E-mail');
	const passwordInput = getByLabelText('Senha');
	fireEvent.change(emailInput, { target: { value: 'john@doctor.com' } });
	fireEvent.change(passwordInput, { target: { value: '123' } });

	getByText(/entrar/i).click();

	expect(history.location.pathname).toEqual('/doctor');
});
