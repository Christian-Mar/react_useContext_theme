import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Destination from '../components/travel/Destination';
import FuzzySearch from '../components/travel/Location';
import styles from './Travel.module.css';

const Travel = () => {
	const { backgroundColor } = useContext(ThemeContext);

	return (
		<div className={styles.container} style={{ backgroundColor }}>
			<h1>Hello holiday</h1>
      <p>Some text</p>
			<Destination />
			<FuzzySearch />
		</div>
	);
};

export default Travel;
