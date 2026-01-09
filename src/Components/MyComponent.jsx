import { useState } from 'react';
import styles from './MyComponent.module.css';


export const MyComponent = () => {
	const [operand1, setOperand1] = useState(0);
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');

	const NUMS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

	const output = operand1 + operator + operand2;


	return (

	)
};