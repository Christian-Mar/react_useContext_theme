import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import ReducerApp from '../components/sandbox/UseReducerExerc';
import UseReducer2 from '../components/sandbox/UseReducerExerc2';
import UseReducer3 from '../components/sandbox/UseReducerExerc3';

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
				<div className={styles.sandboxplay}>
					<h2 className={styles.title}>useReducer</h2>
					<ReducerApp />
					<UseReducer2 />
					<UseReducer3 />
				</div>
			
			</div>
		</DndProvider>
	);
};

export default Sandbox;
