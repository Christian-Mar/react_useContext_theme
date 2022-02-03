import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Distance from '../components/travel/Distance';
import FuzzySearch from '../components/travel/Location';
import styles from './Travel.module.css';

const Travel = () => {
	const { backgroundColor } = useContext(ThemeContext);

	return (
		<div className={styles.container} style={{ backgroundColor }}>
			<h1>Hello holiday</h1>
      <p>Some text</p>
			<Distance />
			<FuzzySearch />
		</div>
	);
};

export default Travel;
