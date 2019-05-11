import React from 'react';
import { TableBody, TableRow, TableCell, Text } from 'grommet';

const Tablebody = props => {
	return (
		<TableBody>
			{props.data.length
				? props.data.map(row => (
						<TableRow key={row.id} data-testid={'table-body'}>
							{props.columns.map(col => (
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

export default Tablebody;
