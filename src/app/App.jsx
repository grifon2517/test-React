import { useState, useActionState } from 'react';

import styles from './app.module.css';

const sendData = async (_, formData) => {
	const data = {
		email: formData.get('email'),
		login: formData.get('login'),
		password: formData.get('password'),
	};
	await new Promise((resolve) => setTimeout(resolve, 2000));

	return { message: 'Данные отправлены', data };
};

export const App = () => {
	const [message, submitAction, isPending] = useActionState(sendData, null);

	return (
		<div className={styles.app}>
			<form action={submitAction}>
				<input type="email" name="email" placeholder="Почта" />
				<input type="login" name="login" placeholder="Логин" />
				<input type="password" name="password" placeholder="Пароль" />
				<button type="reset" disabled={isPending}>
					Сброс
				</button>
				<button type="submit" disabled={isPending}>
					Отправить
				</button>
			</form>
			<div>{message && message.message}</div>
		</div>
	);
};
