import { store } from '../../../store';

export const CurrentUser = () => {
	const { name } = store.getState();

	return (
		<div>
			<div>Текущий Пользователь: {name}</div>
		</div>
	);
};
