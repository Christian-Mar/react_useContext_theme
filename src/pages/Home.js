import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';
import construction from '../images/under-construction.png';

import styles from './Home.module.css';

const Home = () => {
	const { backgroundColor } = useContext(ThemeContext);

	return (
		<div className={styles.container} style={{ backgroundColor }}>
			<img src={construction} alt="Under construction" className={styles.construction}/>
			<h3>Takenlijst</h3>
			<AddTask />
			<TaskList />
			
		</div>
	);
};

export default Home;
