import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styles from './Home.module.css';

const Home = () => {
	const { backgroundColor } = useContext(ThemeContext);

	return (
		<div className={styles.container} style={{ backgroundColor }}>
			<h1>Home</h1>
		</div>
	);
};

export default Home;
