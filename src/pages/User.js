import React, { Component } from 'react';
import Home from '../components/Home';
import {
	Box,
	Heading,
	Button,
	Table,
	TableHeader,
	TableRow,
	TableCell,
	Text
} from 'grommet';
import { Link } from 'react-router-dom';
import UserTableBody from '../components/User/UserTableBody';

export default class User extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}

	componentDidMount() {
		let schedules = localStorage.getItem('schedules')
			? JSON.parse(localStorage.getItem('schedules'))
			: [
					// {
					// 	id: 1,
					// 	doctor: 'Mayara Moreira de Deus / Otorrino',
					// 	time: '10/05/19 - 07:00h'
					// },
					// {
					// 	id: 2,
					// 	doctor: 'Mayara Moreira de Deus / Otorrino',
					// 	time: '10/05/19 - 07:00h'
					// }
			  ];
		this.setState({ data: schedules });
	}
	render() {
		return (
			<Home history={this.props.history}>
				<Box width="xlarge" margin={{ vertical: '60px' }}>
					<Box direction="row" align="center">
						<Heading level="3">Consultas</Heading>
						<Box width="180px" align="end" margin={{ left: 'auto' }}>
							<Link to="/user/schedule">
								<Button primary label="Agendar" />
							</Link>
						</Box>
					</Box>
					<Table margin={{ top: '48px' }}>
						<TableHeader>
							<TableRow>
								<TableCell scope="col">#</TableCell>
								<TableCell scope="col" align="center">
									Médico(a)
								</TableCell>
								<TableCell scope="col" align="end">
									<Text weight="bold">Data - Horário</Text>
								</TableCell>
							</TableRow>
						</TableHeader>
						<UserTableBody data={this.state.data} />
					</Table>
				</Box>
			</Home>
		);
	}
}
