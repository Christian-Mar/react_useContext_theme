import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
//import { FaEdit } from 'react-icons/fa';
import EditTask from './EditTask';
import styles from './TaskList.module.css';

function TaskList() {
	const [tasks, setTasks] = useState([]);	
	const [edit, setEdit] = useState(false);

	/* Data van Firestore binnenhalen met sortering (laatste komt bovenaan) */
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

	/* Update van de taak - wisselt true & false als 'completed' */
	const handleComplete = async (task) => {
		await updateDoc(doc(db, 'tasks', task.id), {completed: !task.data.completed});
	};

	/* Deleten van een taak op basis van id */	
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
							completed={task.data.completed.toString()} /* zonder toString() werkt het, maar met rode warning in de console */
							title={task.data.title}
							description={task.data.description}
						>
								<h4
									className={styles.list_item_title}
									style={{
										textDecoration: task.data.completed
											? 'line-through'
											: undefined,
										color: task.data.completed ? 'darkgray' : undefined,
									}}
								>
									{task.data.title}
								</h4>
								<p
									className={styles.list_item_description}
									style={{
										textDecoration: task.data.completed
											? 'line-through'
											: undefined,
										color: task.data.completed ? 'darkgray' : undefined,
									}}
								>
									{task.data.description}
								</p>
								<button
									className={styles.list_item_button}
									onClick={() => handleComplete(task)}
								>
									Bezig/Gedaan
								</button>
								<button
									className={styles.list_item_button}
									onClick={() => setEdit(true)}
								>
									Edit
								</button>
								<button
									className={styles.list_item_button}
									onClick={() => handleDelete(task.id)}
								>
									Verwijder
								</button>
								{(edit === true) && <EditTask task={task} setEdit={setEdit} />}
									
						</div>
						
					))}
				</div>
			</div>
		</div>
	);
}

export default TaskList;
