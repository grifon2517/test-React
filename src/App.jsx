import styles from './App.module.css';
import { useCallback, useState, memo, useMemo } from 'react';

export const Field = memo(({ name, value, onChange, label }) => {
	console.log(name);
	return (
		<label>
			<span>{label}: </span>
			<input type="number" name={name} value={value} onChange={onChange} />
		</label>
	);
});

export const App = () => {
	console.log('------APP-----');
	const [num, setNum] = useState(0);
	const [degree, setDegree] = useState(0);

	const onNumChange = useCallback(({ target }) => {
		setNum(Number(target.value));
	}, []);

	const onDegreeChange = useCallback(({ target }) => {
		setDegree(Number(target.value));
	}, []);

	const hardCalculatedNum = useMemo(
		() => new Array(50000000).fill(0).reduce((res, el) => res + el, num),
		[num],
	);

	const result = Math.pow(hardCalculatedNum, degree);

	return (
		<>
			<div className={styles.App}>
				<div>
					{num} в степени {degree} = {result}
				</div>
				<Field name="num" label="Число" value={num} onChange={onNumChange} />
				<Field
					name="degree"
					label="Степень"
					value={degree}
					onChange={onDegreeChange}
				/>
			</div>
		</>
	);
};

export default App;
