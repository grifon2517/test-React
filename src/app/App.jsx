import { useState, useRef } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import styles from './app.module.css';

const fieldsScheme = yup.object().shape({
	login: yup
		.string()
		.matches(/^[\w_]*$/, 'Должны использоваться буквы, цифры и нижнее подчеркивание')
		.max(20, 'Должно быть более 20 символов')
		.min(3, 'Должно быть не менее 3 символов'),
});

export const App = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
		},
		resolver: yupResolver(fieldsScheme),
	});

	const loginError = errors.login?.message;
	const onSubmit = (formData) => {
		console.log(formData);
	};

	return (
		<div className={styles.app}>
			<form onSubmit={handleSubmit(onSubmit)}>
				{loginError && <div className={styles.errorLabel}>{loginError}</div>}
				<input name="login" type="text" {...register('login')} />
				<button type="submit" disabled={!!loginError}>
					Отправить
				</button>
			</form>
		</div>
	);
};
