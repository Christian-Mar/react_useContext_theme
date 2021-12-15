import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styles from './Cijfers.module.css';

const Cijfers = () => {
  const { backgroundColor } = useContext(ThemeContext)

  return <div className={styles.container} style={{ backgroundColor }}>123</div>;
}

export default Cijfers
