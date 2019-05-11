import React, { Component } from 'react';
import {
	Form,
	Select,
	Box,
	Button,
	Calendar,
	Text,
	MaskedInput
} from 'grommet';
import { Link } from 'react-router-dom';

export default class FormSchedule extends Component {
	constructor(props) {
		super(props);
		this.state = {
			doctor: 'Selecione um médico(a)',
			date: new Date().toISOString(),
			hour: ''
		};
	}

	handleSubmit = () => {
		const { doctor, date, hour } = this.state;
		if (!doctor.id || !hour) return;

		const user = JSON.parse(localStorage.getItem('loggedUser'));
		const schedules = localStorage.getItem('schedules')
			? JSON.parse(localStorage.getItem('schedules'))
			: [];

		let dateFormat = new Date(date).toLocaleDateString('pt-BR');
		schedules.push({
			id: schedules.length + 1,
			user: user.name,
			doctorId: doctor.id,
			doctorLabel: doctor.label,
			date: `${dateFormat} - ${hour}`
		});
		localStorage.setItem('schedules', JSON.stringify(schedules));
		this.props.history.push('/user');
	};

	handleSelect = event => {
		this.setState({ doctor: event.value });
	};

	handleCalendar = date => {
		this.setState({ date });
	};

	handleHour = event => {
		this.setState({ hour: event.target.value });
	};

	render() {
		const { doctor, date, hour } = this.state;
		return (
			<Form
				onSubmit={this.handleSubmit}
				messages={{ required: 'Campo obrigatório.' }}
			>
				<Box
					direction="column"
					align="center"
					fill="horizontal"
					margin={{ vertical: '24px' }}
				>
					<Select
						options={this.props.doctors}
						labelKey="label"
						value={doctor}
						onChange={this.handleSelect}
						alignSelf="stretch"
						required
					/>
					<Box direction="row" width="100%">
						<Box direction="column" margin={{ top: '80px' }}>
							<Text weight="bold">Data</Text>
							<Calendar
								size="medium"
								date={date}
								locale="pt-BR"
								onSelect={this.handleCalendar}
								margin={{ top: '20px' }}
								alignSelf="start"
								bounds={[new Date().toISOString(), '2022-01-01']}
							/>
						</Box>
						<Box direction="column" margin={{ top: '80px', left: '90px' }}>
							<Text weight="bold">Horário (07:00 - 18:00)</Text>
							<Box margin={{ top: '20px' }}>
								<MaskedInput
									mask={[
										{
											length: 2,
											options: [
												'07',
												'08',
												'09',
												'10',
												'11',
												'12',
												'13',
												'14',
												'15',
												'16',
												'17',
												'18'
											],
											placeholder: 'hh'
										},
										{ fixed: ':' },
										{
											length: 2,
											options: ['00', '15', '30', '45'],
											placeholder: 'mm'
										}
									]}
									value={hour}
									onChange={this.handleHour}
									required
								/>
							</Box>
						</Box>
					</Box>
				</Box>
				<Box direction="row" margin={{ vertical: '48px' }} justify="end">
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
