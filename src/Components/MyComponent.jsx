import { useState } from 'react';
import styles from './MyComponent.module.css';
import data from '../data.json';

export const MyComponent = () => {
	const [steps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	const onClickNext = () => {
		if (activeIndex >= 0) {
			setActiveIndex((prev) => prev + 1);
		}
	};
	const onClickBack = () => {
		setActiveIndex((prev) => prev - 1);
	};
	const onClickRestart = () => {
		setActiveIndex(0);
	};
	const firstStep = activeIndex === 0;
	const lastStep = activeIndex === steps.length - 1;
	// Можно задать 2 состояния — steps и activeIndex

	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала

	// И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex].content}
						Контент соответственный шагу. Сейчас активен шаг 3
					</div>
					<ul className={styles['steps-list']}>
						{steps.map(({ title, id }, index) => (
							<li
								key={id}
								className={
									styles['steps-item'] +
									(index === activeIndex ? ` ${styles.active}` : '') +
									(index < activeIndex ? ` ${styles.done}` : '')
								}
							>
								<button
									className={styles['steps-item-button']}
									onClick={() => setActiveIndex(index)}
								>
									{index + 1}
								</button>{' '}
								{title}
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							onClick={onClickBack}
							disabled={firstStep}
						>
							Назад
						</button>
						<button
							className={styles.button}
							onClick={() => (lastStep ? onClickRestart() : onClickNext())}
						>
							{lastStep ? 'Начать сначала' : 'Далее'}
							{/* Или заменять всю кнопку в зависимости от условия */}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
