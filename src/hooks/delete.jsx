import { useState } from 'react';
import { db } from '../firebase';
import { ref, remove } from 'firebase/database';

export const useIsDeletingHairDryer = () => {
	const [isDeliting, setIsDeliting] = useState(false);

	const requestDeleteHairDryer = () => {
		setIsDeliting(true);

		const hairDryerDbRf = ref(db, 'products/003');
		remove(hairDryerDbRf)
			.then((response) => {
				console.log('Фен удален', response);

				isDeliting(false);
			})
			.finally(() => setIsDeliting(false));
	};

	return { isDeliting, requestDeleteHairDryer };
};
