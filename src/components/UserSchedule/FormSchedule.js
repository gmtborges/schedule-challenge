import React, { Component } from 'react';
import { Form, Select, Box, Button } from 'grommet';
import { Link } from 'react-router-dom';

export default class FormSchedule extends Component {
	constructor(props) {
		super(props);
		this.state = {
			doctor: 'Selecione um médico(a)',
			time: null,
			hour: ''
		};
	}

	render() {
		return (
			<Form
				onSubmit={this.handleSubmit}
				messages={{ required: 'Campo obrigatório.' }}
			>
				<Box align="center" fill="horizontal" margin={{ vertical: '32px' }}>
					<Select
						options={this.props.doctors}
						value={this.state.doctor}
						alignSelf="stretch"
					/>
				</Box>
				<Box direction="row" margin={{ top: '48px' }} justify="end">
					<Box width="180px">
						<Link to="/user">
							<Button label="Cancelar" />
						</Link>
					</Box>
					<Box width="180px">
						<Button type="submit" label="Agendar" primary />
					</Box>
				</Box>
			</Form>
		);
	}
}
