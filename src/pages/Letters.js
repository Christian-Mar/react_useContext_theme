import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styles from './Letters.module.css';

const Letter = () => {

  const { backgroundColor } = useContext(ThemeContext);

	return <div className={styles.container} style={{ backgroundColor }}>ABC</div>;
};

export default Letter;
