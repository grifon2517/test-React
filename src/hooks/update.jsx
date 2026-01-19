import { useState } from 'react';
import { ref, set } from 'firebase/database';
import { db } from '../firebase';

export const useUpdatingSmartphone = () => {
	const [isUpdating, setIsUpdating] = useState(false);

	const requestUpdateSmartphone = () => {
		const smartphoneDBRef = ref(db, 'products/002');

		set(smartphoneDBRef, {
			name: 'Смартфон',
			price: 18500,
		})
			.then((response) => {
				console.log('Смфртфон обновлен', response);

				isUpdating(false);
			})
			.finally(() => setIsUpdating(false));
	};
	return { isUpdating, requestUpdateSmartphone };
};
