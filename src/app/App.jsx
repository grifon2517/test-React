import { useState } from 'react';
import styles from './app.module.css';

export const App = () => {
	const [selectedProducts, setSelectedProducts] = useState('tv');
	const [selectedColors, setSelectedColors] = useState(['red', 'green']);

	const onSelectedProductChange = ({ target }) => setSelectedProducts(target.value);
	const onSelectedColors = ({ target }) => {
		const newSelectedColors = [...target.selectedOptions].map(
			(selectedTarget) => selectedTarget.value,
		);

		setSelectedColors(newSelectedColors);
	};
	return (
		<div className={styles.app}>
			<select value={selectedProducts} onChange={onSelectedProductChange}>
				<option value="TV">Телевизор</option>
				<option value="pad">Планшет</option>
				<option value="phone">Телефон</option>
			</select>
			<select multiple={true} value={selectedColors} onChange={onSelectedColors}>
				<option value="red">Красный</option>
				<option value="green">Зеленый</option>
				<option value="white">Белый</option>
			</select>
		</div>
	);
};
