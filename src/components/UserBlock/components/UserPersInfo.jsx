import { use } from 'react';
import { AppContext } from '../../../context';

export const UserPersInfo = () => {
	const { userData, dispatch } = use(AppContext);
	const { name, age, phone, email } = userData;

	const onUserUpdate = () => {
		const newUserData = { name, age: 33, email, phone };
		// setUserData({ name, age: 33, email, phone });
		dispatch({ type: 'SET_USER_DATA', payload: newUserData });
	};
	const onUserAgeDicrease = () => {
		dispatch({ type: 'SET_USER_AGE', payload: 15 });
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
