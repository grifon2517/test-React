import { useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '../firebase';

export const useRequestAddVacumCleaner = () => {
	const [isCreating, setIsCreating] = useState(false);

	const requestVacumCleaner = () => {
		setIsCreating(true);

		const productsDBRef = ref(db, 'products');

		push(productsDBRef, {
			name: 'Новый пылесос',
			price: 6400,
		})
			.then((response) => {
				console.log('Пылесос добавлен', response);

				isCreating(false);
			})
			.finally(() => setIsCreating(false));
	};
	return { isCreating, requestVacumCleaner };
};
