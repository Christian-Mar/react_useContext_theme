import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import AddTask from '../components/todo/AddTask';
import TaskList from '../components/todo/TaskList';

import styles from './Home.module.css';

const Home = () => {
	const { backgroundColor } = useContext(ThemeContext);

	return (
		<div className={styles.container} style={{ backgroundColor }}>
			<h3>Takenlijst</h3>
			<AddTask />
			<TaskList />
			
		</div>
	);
};

export default Home;
