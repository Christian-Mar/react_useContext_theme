import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragDrop from '../components/sandbox/DragDrop';
import ReducerApp from '../components/sandbox/UseReducerExerc';

import styles from './Sandbox.module.css';

/* 
In App.js: 

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
*/

const Sandbox = () => {
	const { backgroundColor } = useContext(ThemeContext);

	return (
		<DndProvider backend={HTML5Backend}>
			<div className={styles.container} style={{ backgroundColor }}>
				<h2 className={styles.title}>useReducer</h2>
				<ReducerApp />
				
				<h2 className={styles.title}>Drag & drop</h2>
				<DragDrop />
			</div>
		</DndProvider>
	);
};

export default Sandbox;
