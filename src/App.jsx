import styles from './App.module.css';
import { ControlPanel, User } from './components';

export const App = () => {
	return (
		<>
			<div className={styles.App}>
				<User />
				<ControlPanel />
			</div>
		</>
	);
};

export default App;
