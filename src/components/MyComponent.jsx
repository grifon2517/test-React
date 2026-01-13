import { useState } from 'react';
import styles from './MyComponent.module.css';

const AppLayout = ({ a, b, setA, setB, sum }) => {
	return (
		<div className={styles.app}>
			<div>A: {a}</div>
			<button onClick={() => setA(a + 1)}>ПРибавить 1 к A</button>
			<div>B: {b}</div>
			<button onClick={() => setB(b + 1)}>ПРибавить 1 к B</button>
			<div>Сумма A+B: {sum}</div>
		</div>
	);
};

export const MyComponent = () => {
	const [a, setA] = useState(0);
	const [b, setB] = useState(0);

	const sum = a + b;

	return <AppLayout a={a} b={b} setA={setA} setB={setB} sum={sum} />;
};
