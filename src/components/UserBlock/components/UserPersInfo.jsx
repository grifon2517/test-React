import { store } from '../../../store';

export const UserPersInfo = () => {
	const { name, age } = store.getState();
	const onUserUpdate = () => {
		const { name, phone, email } = store.getState();
		const newUserData = { name, age: 33, email, phone };

		store.dispacth({ type: 'SET_USER_DATA', payload: newUserData });
	};
	const onUserAgeDicrease = () => {
		store.dispacth({ type: 'SET_USER_AGE', payload: 15 });
	};

	return (
		<div>
			<h3>Персональные данные:</h3>
			<div>Имя: {name}</div>
			<div>Возраст: {age}</div>
			<button onClick={onUserUpdate}>Обновить пользователя</button>
			<button onClick={onUserAgeDicrease}>Уменьшить возраст пользователя</button>
		</div>
	);
};
