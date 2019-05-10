import React from 'react';
import { TableBody, TableRow, TableCell, Text } from 'grommet';

const UserTableBody = props => {
	const columns = [
		{ label: 'id', weight: 'normal', align: 'start' },
		{ label: 'doctorLabel', weight: 'normal', align: 'center' },
		{ label: 'date', weight: 'bold', align: 'end' }
	];
	return (
		<TableBody>
			{props.data.length
				? props.data.map(row => (
						<TableRow key={row.id} data-testid="user-schedule">
							{columns.map(col => (
								<TableCell key={col.label} scope="row" align={col.align}>
									<Text weight={col.weight}>{row[col.label]}</Text>
								</TableCell>
							))}
						</TableRow>
				  ))
				: null}
		</TableBody>
	);
};

export default UserTableBody;
