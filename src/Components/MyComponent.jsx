import { useState } from 'react';
import styles from './MyComponent.module.css';
export const MyComponent = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');

	const isValueValid = value.length >= 3;

	const onInputButtonClick = () => {
		const promptValue = prompt('Введите значение');
		console.log(promptValue);
		setValue(promptValue);
		if (promptValue.length < 3) {
			setError('Введенное значение должно содержать минимум 3 символа');
		} else {
			setValue(promptValue);
			setError('');
		}
	};

	const onAddButtonClick = () => {
		if (isValueValid) {
			const updatedList = [...list, { id: Date.now(), value }];
			setList(updatedList);
			setValue('');
			setError('');
		}
	};

	return (
		<>
			<div className={styles.app}>
				<h1 className={styles.pageHeading}>Ввод значения</h1>
				<p className={styles.noMarginText}>
					Текущее значение <code>{value}</code>: "
					<output className={styles.currentValue}>{value}</output>"
				</p>
				<div className={styles.error}>{error}</div>
				<div className={styles.buttonsContainer}>
					<button
						className={styles.button}
						onClick={() => {
							onInputButtonClick();
						}}
					>
						Ввести новое
					</button>
					<button
						className={styles.button}
						disabled={!isValueValid}
						onClick={() => {
							onAddButtonClick();
						}}
					>
						Добавить в список
					</button>
				</div>
				<div className={styles.listContainer}>
					<h2 className={styles.listHeading}>Список:</h2>
					<p className={styles.noMarginText}>Нет добавленных элементов</p>
					<ul className={styles.list}>
						{' '}
						{list.map((item) => (
							<li className={styles.listItem} key={item.id}>
								{item.value}
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};
