import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';

export const useGetProducts = () => {
	const [products, setProducts] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const productsDBRef = ref(db, 'products');

		return onValue(productsDBRef, (snapshot) => {
			const loadedProducts = snapshot.val() || {};

			setProducts(loadedProducts);
			setIsLoading(false);
		});

		setIsLoading(true);
	}, []);

	return {
		products,
		isLoading,
	};
};
