import styles from './App.module.css';
import { useState, useEffect, Component } from 'react';

export const App = ({ message }) => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	useEffect(() => {
		console.log(message);

		const updateScreenWidth = () => setScreenWidth(window.innerWidth);

		window.addEventListener('resize', updateScreenWidth);
		return () => window.removeEventListener('resize', updateScreenWidth);
	}, []);

	return (
		<>
			<div className={styles.App}>
				{message} : {screenWidth}
			</div>
		</>
	);
};

export class OldApp extends Component {
	// state = 0; как вариант объявить состояние здесь
	constructor(props) {
		super(props);

		this.state = {
			screenWidth: window.innerWidth,
		};
		// this.updateScreenWidth = this.updateScreenWidth.bind(this)
	}
	updateScreenWidth = () => {
		this.setState({ screenWidth: window.innerWidth });
	};
	componentDidMount() {
		console.log(this.props.message);

		window.addEventListener('resize', this.updateScreenWidth);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateScreenWidth);
	}

	render() {
		return (
			<div className={styles.App}>
				{this.props.message}
				{this.state.screenWidth}
			</div>
		);
	}
}

export default App;
