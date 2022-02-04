import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Destination from '../components/travel/Destination';
import styles from './Travel.module.css';

const Travel = () => {
	const { backgroundColor } = useContext(ThemeContext);

	return (
		<div className={styles.container} style={{ backgroundColor }}>
			<Destination />	
		</div>
	);
};

export default Travel;
