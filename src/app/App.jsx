import { useState } from 'react';
import styles from './app.module.css';

export const App = () => {
	const [value, setValue] = useState('');

	return (
		<div className={styles.app}>
			<input
				type="text"
				value={value}
				onChange={({ target }) => setValue(target.value)}
			/>
		</div>
	);
};
