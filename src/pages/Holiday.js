import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styles from './Holiday.module.css';

const Holiday = () => {
	const { backgroundColor } = useContext(ThemeContext);

	return (
		<div className={styles.container} style={{ backgroundColor }}>
			<h1>Hello holiday</h1>
      <p>Some text</p>
		</div>
	);
};

export default Holiday;
