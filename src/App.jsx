import { Children, useEffect, useState } from 'react';
import styles from './App.module.css';
import {
	Routes,
	Route,
	NavLink,
	Outlet,
	useParams,
	useMatch,
	useNavigate,
	replace,
} from 'react-router-dom';

const database = {
	productList: [
		{ id: 1, name: 'Телевизор' },
		{ id: 2, name: 'Смартфон' },
		{ id: 3, name: 'Планшет' },
	],
	products: {
		1: { id: 1, name: 'Телевизор', price: 35900, amount: 43 },
		2: { id: 2, name: 'Смартфон', price: 22900, amount: 12 },
		3: { id: 3, name: 'Планшет', price: 30900, amount: 11 },
	},
};

const LOADING_TIMEOUT = 3000;

const fetchProductList = () => database.productList;
const fetchProduct = (id) =>
	new Promise((resolve) => {
		setTimeout(() => {
			resolve(database.products[id]);
		}, 2500);
	});

const MainPage = () => <div>Контент главной страницы</div>;
const Catalog = () => (
	<div>
		<h3>Контент каталога</h3>
		<ul>
			{fetchProductList().map(({ id, name }) => (
				<li key={id}>
					<NavLink to={`product/${id}`}>{name}</NavLink>
				</li>
			))}
		</ul>
		<Outlet />
	</div>
);
const ProductNotFound = () => <div>Такой товар не сущеуствует</div>;
const ProductLoadError = () => <div>Ошибка загрузки товара. Попробуйте позднее</div>;
const Product = () => {
	const [product, setProduct] = useState(null);
	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		let isLoadingTimeOut = false;
		let isProductLoaded = false;
		setTimeout(() => {
			isLoadingTimeOut = true;

			if (!isProductLoaded) {
				navigate('/product-load-error', { replace: true });
			}
		}, LOADING_TIMEOUT);

		fetchProduct(params.id).then((loadedProduct) => {
			isProductLoaded = true;

			if (!isLoadingTimeOut) {
				if (!loadedProduct) {
					navigate('/product-not-exsist');
					return;
				}
				setProduct(loadedProduct);
			}
		});
	}, [params.id, navigate]);
	if (!product) {
		return null;
	}
	const { name, price, amount } = product;

	return (
		<div>
			<h3>Товар - {name}</h3>
			<div>Цена: {price}</div>
			<div>На складе: {amount}</div>
		</div>
	);
};
const Contacts = () => <div>Контент контактов</div>;
const NotFound = () => <div>Такая страница не сущеуствует</div>;

const ExtendedLink = ({ to, children }) => (
	<NavLink to={to}>
		{({ isActive }) =>
			isActive ? (
				<>
					<span>{children}</span>
					<span>*</span>
				</>
			) : (
				children
			)
		}
	</NavLink>
);

export const App = () => {
	return (
		<>
			<div className={styles.App}>
				<div>
					<h3>Меню</h3>
					<ul>
						<li>
							<ExtendedLink to="/">Главная</ExtendedLink>
						</li>
						<li>
							<ExtendedLink to="/catalog">Каталог</ExtendedLink>
						</li>
						<li>
							<ExtendedLink to="/contacts">Контакты</ExtendedLink>
						</li>
					</ul>
				</div>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/catalog" element={<Catalog />}>
						<Route path="product/:id" element={<Product />} />
						<Route path="service/:id" element={<Product />} />
					</Route>
					<Route path="/contacts" element={<Contacts />} />
					<Route path="/product-load-error" element={<ProductLoadError />} />
					<Route path="/product-not-exsist" element={<ProductNotFound />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</>
	);
};

export default App;
