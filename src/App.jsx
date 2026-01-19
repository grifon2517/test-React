import { useState } from 'react';
import {
	useGetProducts,
	useIsDeletingHairDryer,
	useRequestAddVacumCleaner,
	useUpdatingSmartphone,
} from './hooks';
import styles from './App.module.css';

export const App = () => {
	const [refreshProductsFlag, setRefreshProductsFlag] = useState(false);

	const refreshProducts = () => setRefreshProductsFlag(!refreshProductsFlag);

	const { products, isLoading } = useGetProducts();
	const { isCreating, requestVacumCleaner } =
		useRequestAddVacumCleaner(refreshProducts);
	const { isDeliting, requestDeleteHairDryer } =
		useIsDeletingHairDryer(refreshProducts);
	const { isUpdating, requestUpdateSmartphone } =
		useUpdatingSmartphone(refreshProducts);

	return (
		<>
			<div className={styles.App}>
				{isLoading ? (
					<div className={styles.loader}></div>
				) : (
					Object.entries(products).map(([id, { name, price }]) => (
						<div key={id}>
							{name} - {price}
						</div>
					))
				)}
				<button disabled={isCreating} onClick={requestVacumCleaner}>
					Добавить вылесос
				</button>
				<button disabled={isUpdating} onClick={requestUpdateSmartphone}>
					Обновить смартфон
				</button>
				<button disabled={isDeliting} onClick={requestDeleteHairDryer}>
					Удалить фен
				</button>
			</div>
		</>
	);
};
export default App;
