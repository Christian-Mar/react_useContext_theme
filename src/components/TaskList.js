import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import styles from './TaskList.module.css';

function TaskList() {
	const [tasks, setTasks] = useState([]);

	/* function to get all tasks from firestore in realtime */
	useEffect(() => {
		const taskColRef = query(
			collection(db, 'tasks'),
			orderBy('created', 'desc')
		);
		onSnapshot(taskColRef, snapshot => {
			setTasks(
				snapshot.docs.map(doc => ({
					id: doc.id,
					data: doc.data(),
				}))
			);
		});
	}, []);

	const handleComplete = async (task) => {
		await updateDoc(doc(db, 'tasks', task.id), {completed: !task.data.completed});
	};

  const handleDelete = async (id) => {
    const taskDocRef = doc(db, 'tasks', id)
		try {
			await deleteDoc(taskDocRef);
		} catch (err) {
			alert(err);
		}
	};

	return (
		<div>
			<div>
				<div className={styles.list}>
					{tasks.map(task => (
						<div
							className={styles.list_item}
							id={task.id}
							key={task.id}
							completed={task.data.completed}
							title={task.data.title}
							description={task.data.description}
						>
							<h4
								className={styles.list_item_title}
								style={{
									textDecoration: task.data.completed && 'line-through',
									color: task.data.completed && 'darkgray'
								}}
							>
								{task.data.title}
							</h4>

							<p
								className={styles.list_item_description}
								style={{
									textDecoration: task.data.completed && 'line-through',
									color: task.data.completed && 'darkgray',
								}}
							>
								{task.data.description}
							</p>
							<button
								className={styles.list_item_button}
								onClick={() => handleComplete(task)}
							>
								Bezig/gedaan
							</button>
							<button
								className={styles.list_item_button}
								onClick={() => handleDelete(task.id)}
							>
								Verwijder
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default TaskList;
