import React from 'react';
import { Form, FormField, Box, Button } from 'grommet';
import { Link } from 'react-router-dom';

const FormLogin = props => {
	return (
		<Form
			onSubmit={props.handleSubmit}
			messages={{ required: 'Campo obrigatório.' }}
		>
			<FormField
				name="email"
				label="E-mail"
				placeholder="seu@email.com"
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
					<Link to="/signup">
						<Button label="Criar conta" />
					</Link>
				</Box>
				<Box width="180px" margin={{ left: 'auto' }} alignSelf="end">
					<Button type="submit" label="Entrar" primary />
				</Box>
			</Box>
		</Form>
	);
};

export default FormLogin;
