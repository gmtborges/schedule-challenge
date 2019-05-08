import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Login from './Login';
import FormLogin from './components/FormLogin';

afterEach(cleanup);

test('should render Login page', () => {
	const { asFragment } = render(<Login />);

	expect(asFragment()).toMatchSnapshot();
});

test('should form contains email and password fields', () => {
	const { getByLabelText } = render(<Login />);
	const email = getByLabelText('E-mail');
	const password = getByLabelText('Senha');

	expect(email).toBeDefined();
	expect(password).toBeDefined();
});

test('should calls onSubmit with email and password filled', () => {
	const handleSubmit = jest.fn();
	const { getByLabelText, getByText } = render(
		<FormLogin handleSubmit={handleSubmit} />
	);
	const emailInput = getByLabelText('E-mail');
	const passwordInput = getByLabelText('Senha');
	fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
	fireEvent.change(passwordInput, { target: { value: '123' } });
	getByText(/entrar/i).click();

	expect(handleSubmit).toHaveBeenCalledTimes(1);
});
