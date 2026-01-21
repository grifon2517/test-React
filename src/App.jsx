import styles from './App.module.css';
import { Header, UserBlock } from './components';
import { AppContext } from './context';
import { useState, useEffect, useReducer } from 'react';
import { store } from './store';

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

export const App = () => {
	useEffect(() => {
		const userDataFromServer = getUserFromServer();

		store.dispacth({ type: 'SET_USER_DATA', payload: userDataFromServer });
	}, []);

	const onUserChange = () => {
		const anotherUserDataFromServer = getAnotherUserFromServer();

		store.dispacth({ type: 'SET_USER_DATA', payload: anotherUserDataFromServer });
	};

	return (
		<>
			<div className={styles.App}>
				<Header />
				<hr />
				<UserBlock />
				<button onClick={onUserChange}>Сменить пользователя</button>
			</div>
		</>
	);
};

export default App;
