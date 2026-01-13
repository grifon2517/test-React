import { useState } from 'react';
import styles from './app.module.css';

const initialState = {
	email: '',
	login: '',
	password: '',
};

const useStore = () => {
	const [state, setState] = useState(initialState);

	return {
		getState: () => state,
		updateState: (fieldName, newValue) => {
			setState({ ...state, [fieldName]: newValue });
		},
		resetState: () => {
			setState(initialState);
		},
	};
};

const sendData = (formData) => {
	console.log(formData);
};

export const App = () => {
	const { getState, updateState, resetState } = useStore();

	const onSubmit = () => {
		event.preventDefault();
		sendData(getState());
	};

	const onChange = ({ target }) => updateState(target.name, target.value);

	const { email, login, password } = getState();

	return (
		<div className={styles.app}>
			<form onSubmit={onSubmit}>
				<input
					type="email"
					name="email"
					value={email}
					placeholder="Почта"
					onChange={onChange}
				/>
				<input
					type="text"
					name="login"
					value={login}
					placeholder="Логин"
					onChange={onChange}
				/>
				<input
					type="password"
					name="password"
					value={password}
					placeholder="Пароль"
					onChange={onChange}
				/>
				<button type="submit">Отправить</button>
				<button type="button" onClick={resetState}>
					Сброс
				</button>
			</form>
		</div>
	);
};
