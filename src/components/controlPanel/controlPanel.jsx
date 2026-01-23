import { useDispatch } from 'react-redux';
import { increaseAge, RESET_AGE, changeUserAsync } from '../../action';

export const ControlPanel = () => {
	const dispatch = useDispatch();

	const onAgeIncrease = () => {
		dispatch(increaseAge(3));
	};
	const onAgeReset = () => {
		dispatch(RESET_AGE);
	};

	const onUserChange = () => {
		dispatch(changeUserAsync);
	};

	return (
		<div>
			<button onClick={onAgeIncrease}>Изменить возраст</button>
			<button onClick={onAgeReset}>Сбросить возраст</button>
			<button onClick={onUserChange}>Сменить пользователя</button>
		</div>
	);
};
