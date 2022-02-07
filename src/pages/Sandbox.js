import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import DragDrop from '../components/sandbox/DragDrop';
import styles from './Sandbox.module.css';

/* 
In App.js: 

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
*/



const Sandbox = () => {
	const { backgroundColor } = useContext(ThemeContext);

	return (
		<div className={styles.container} style={{ backgroundColor }}>
			<h1 className={styles.title}>Hello world</h1>
      <DragDrop/>
		</div>
	);
};

export default Sandbox;
