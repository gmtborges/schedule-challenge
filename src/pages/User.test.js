import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import User from './User';
import UserTableBody from '../components/User/UserTableBody';
import { Table } from 'grommet';

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

test('should render User page', () => {
	const { asFragment } = renderWithRouter(<User />);

	expect(asFragment()).toMatchSnapshot();
});

test('should logout on "sair" button clicked', () => {
	const { getByText, history } = renderWithRouter(
		<User history={{ push: jest.fn() }} />
	);
	getByText(/sair/i).click();

	expect(history.location.pathname).toEqual('/');
});

test('should render a empty list if has not schedules', () => {
	const { queryAllByTestId } = render(
		<Table>
			<UserTableBody data={[]} />
		</Table>
	);
	const rows = queryAllByTestId('user-schedule');
	expect(rows.length).toBe(0);
});

test('should render a list with 2 schedules', () => {
	const { getAllByTestId } = render(
		<Table>
			<UserTableBody
				data={[
					{
						id: 1,
						doctor: 'Mayara Moreira de Deus / Otorrino',
						time: '10/05/19 - 07:00h'
					},
					{
						id: 2,
						doctor: 'Mayara Moreira de Deus / Otorrino',
						time: '15/05/19 - 07:00h'
					}
				]}
			/>
		</Table>
	);
	const rows = getAllByTestId('user-schedule');
	expect(rows.length).toBe(2);
});
