import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styles from './Sandbox.module.css';

const Travel = () => {
	const { backgroundColor } = useContext(ThemeContext);

	return (
		<div className={styles.container} style={{ backgroundColor }}>
			<h1 className={styles.title}>Hello world</h1>
		</div>
	);
};

export default Travel;
