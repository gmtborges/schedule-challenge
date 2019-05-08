import React from 'react';
import { Form, FormField, Box, Button } from 'grommet';

const FormLogin = props => (
	<Form
		onSubmit={props.handleSubmit}
		messages={{ required: 'Campo obrigatório.' }}
	>
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
				<Button type="submit" label="Criar conta" />
			</Box>
			<Box width="180px" margin={{ left: 'auto' }} alignSelf="end">
				<Button type="submit" label="Entrar" primary />
			</Box>
		</Box>
	</Form>
);

export default FormLogin;
