import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
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
		<DndProvider backend={HTML5Backend}>
			<div className={styles.container} style={{ backgroundColor }}>
				<h1 className={styles.title}>Drag & drop</h1>
				<DragDrop />
			</div>
		</DndProvider>
	);
};

export default Sandbox;
