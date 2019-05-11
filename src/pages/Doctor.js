import React, { Component } from 'react';
import Home from '../components/Home';
import {
	Box,
	Heading,
	Table,
	TableHeader,
	TableRow,
	TableCell,
	Text
} from 'grommet';
import TableBody from '../components/TableBody';

export default class Doctor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			columns: [
				{ label: 'id', weight: 'normal', align: 'start' },
				{ label: 'user', weight: 'normal', align: 'center' },
				{ label: 'date', weight: 'bold', align: 'end' }
			]
		};
	}

	componentDidMount() {
		const schedules = localStorage.getItem('schedules')
			? JSON.parse(localStorage.getItem('schedules'))
			: [];
		const user = JSON.parse(localStorage.getItem('loggedUser'));
		const mySchedule = schedules.filter(it => it.doctorId === user.email);
		this.setState({ data: mySchedule });
	}
	render() {
		const { data, columns } = this.state;
		return (
			<Home history={this.props.history}>
				<Box width="xlarge" margin={{ vertical: '60px' }}>
					<Box direction="row" align="center">
						<Heading level="3">Pacientes</Heading>
					</Box>
					<Table margin={{ top: '48px' }}>
						<TableHeader>
							<TableRow>
								<TableCell scope="col">#</TableCell>
								<TableCell scope="col" align="center">
									Nome
								</TableCell>
								<TableCell scope="col" align="end">
									<Text weight="bold">Data - Horário</Text>
								</TableCell>
							</TableRow>
						</TableHeader>
						<TableBody data={data} columns={columns} />
					</Table>
				</Box>
			</Home>
		);
	}
}
