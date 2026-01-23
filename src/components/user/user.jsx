import { useSelector } from 'react-redux';
import { selectName } from '../../selectors/selectName';
import { selectAge } from '../../selectors/selectAge';

export const User = () => {
	const name = useSelector(selectName);
	const age = useSelector(selectAge);

	return (
		<div>
			<div>Пользователь:</div>
			<div>Имя: {name}</div>
			<div>Возраст: {age}</div>
		</div>
	);
};
