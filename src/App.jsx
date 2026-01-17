import { useEffect, useState } from 'react';
import styles from './App.module.css';

export const App = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isCreating, setIsCreating] = useState(false);
	const [isUpdating, setIsUpdating] = useState(false);
	const [isDeliting, setIsDeliting] = useState(false);
	const [refreshProductsFlag, setRefreshProductsFlag] = useState(false);

	const refreshProducts = () => setRefreshProductsFlag(!refreshProductsFlag);

	useEffect(() => {
		setIsLoading(true);

		fetch('http://localhost:3000/products')
			.then((loadedData) => loadedData.json())
			.then((loadedProducts) => {
				setProducts(loadedProducts);
			})
			.finally(() => setIsLoading(false));
	}, [refreshProductsFlag]);
	const requestVacumCleaner = () => {
		setIsCreating(true);
		fetch('http://localhost:3000/products', {
			method: 'POST',
			header: { 'Content-type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				name: 'Новый пылесос',
				price: 7600,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Пылесос добавлен', response);
				refreshProducts();
				isCreating(false);
			})
			.finally(() => setIsCreating(false));
	};

	const requestUpdateSmartphone = () => {
		setIsUpdating(true);
		fetch('http://localhost:3000/products/002', {
			method: 'PUT',
			header: { 'Content-type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				name: 'Смартфон',
				price: 15999,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Смфртфон обновлен', response);
				refreshProducts();
				isUpdating(false);
			})
			.finally(() => setIsUpdating(false));
	};

	const requestDeleteHairDryer = () => {
		setIsDeliting(true);
		fetch('http://localhost:3000/products/003', {
			method: 'DELETE',
			header: { 'Content-type': 'application/json;charset=utf-8' },
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Фен удален', response);
				refreshProducts();
				isDeliting(false);
			})
			.finally(() => setIsDeliting(false));
	};

	return (
		<>
			<div className={styles.App}>
				{isLoading ? (
					<div className={styles.loader}></div>
				) : (
					products.map(({ id, name, price }) => (
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
