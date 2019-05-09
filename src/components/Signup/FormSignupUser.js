import React from 'react';
import { Form, FormField, Box, Button } from 'grommet';
import { Link } from 'react-router-dom';

const FormSignupUser = props => (
	<Form
		onSubmit={props.handleSubmit}
		messages={{ required: 'Campo obrigatório.' }}
	>
		<FormField name="name" label="Nome" id="nome" htmlFor="nome" required />
		<FormField
			name="email"
			label="E-mail"
			id="email"
			htmlFor="email"
			required
			validate={{
				regexp: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
				message: 'E-mail inválido'
			}}
		/>
		<FormField
			type="password"
			name="password"
			id="password"
			htmlFor="password"
			label="Senha"
			required
		/>
		<Box direction="row" margin={{ top: '48px' }}>
			<Box width="180px">
				<Link to="/">
					<Button label="Cancelar" />
				</Link>
			</Box>
			<Box width="180px" margin={{ left: 'auto' }} alignSelf="end">
				<Button type="submit" label="Salvar" primary />
			</Box>
		</Box>
	</Form>
);

export default FormSignupUser;
