import { resumeToPipeableStream } from 'react-dom/server';
import styles from './App.module.css';

const withLogin = (Component) => {
	const NewComponent = (props) => {
		console.log(props.user);

		return <Component {...props} />;
	};

	return NewComponent;
};

const withLogingAndColor = (Component, color) => {
	const NewComponent = (props) => {
		console.log(props.user);

		return (
			<span style={{ color }}>
				<Component {...props} />
			</span>
		);
	};

	return NewComponent;
};

export const HelloMessgae = ({ user }) => {
	return <span>Привет, {user}</span>;
};

export const GoodBye = ({ user }) => {
	return <span>Пока, {user}</span>;
};

export const UserWidget = ({ Message }) => {
	const user = 'Гриха';

	return (
		<div>
			<div>Текущий пользователь: {user}</div>
			<div>Сообщение: </div>
			<HelloMessageWithLogin user={user} />
			<br></br>
			<HelloWithLogingAndColor user={user} />
			{/* {render(user)} */}
			{/* {children(user)} */}
			{/* <HelloMessgae user={user}/>
			<GoodBye user={user}/> */}
		</div>
	);
};

const HelloMessageWithLogin = withLogin(HelloMessgae);
const HelloWithLogingAndColor = withLogingAndColor(HelloMessgae, 'red');

export const App = () => {
	return (
		<div className={styles.App}>
			{/* <UserWidget> {(user) => <HelloMessgae user={user} />} </UserWidget> */}
			{/* <UserWidget render={(user) => <GoodBye user={user} />} /> */}
			<UserWidget />
			{/* <UserWidget Message={GoodBye} /> */}
		</div>
	);
};

export default App;
