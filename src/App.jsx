import styles from './App.module.css';
import { Header, UserBlock } from './components';
import { AppContext } from './context';
import { useState, useEffect, useReducer } from 'react';

const getUserFromServer = () => ({
	id: '001',
	name: 'Griha',
	age: 32,
	email: 'griha@ury.com',
	phone: '+7-987-87-32',
});

const getAnotherUserFromServer = () => ({
	id: '002',
	name: 'John',
	age: 42,
	email: 'johna@ury.com',
	phone: '+1-323-85-55',
});

const reducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'SET_USER_DATA': {
			return payload;
		}
		case 'SET_USER_AGE': {
			return {
				...state,
				age: payload,
			};
		}
		default:
			return state;
	}
};

export const App = () => {
	const [userData, dispatch] = useReducer(reducer, {});

	useEffect(() => {
		const userDataFromServer = getUserFromServer();

		dispatch({ type: 'SET_USER_DATA', payload: userDataFromServer });
	}, []);

	const onUserChange = () => {
		const anotherUserDataFromServer = getAnotherUserFromServer();

		dispatch({ type: 'SET_USER_DATA', payload: anotherUserDataFromServer });
	};

	return (
		<>
			<AppContext value={{ userData, dispatch }}>
				<div className={styles.App}>
					<Header />
					<hr />
					<UserBlock />
					<button onClick={onUserChange}>Сменить пользователя</button>
				</div>
			</AppContext>
		</>
	);
};

export default App;
