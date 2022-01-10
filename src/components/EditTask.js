import { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import styles from './EditTask.module.css';

const EditTask = ({task, setEdit}) => {

  const [newTitle, setNewTitle]=useState('');
  const [newDescription, setNewDescription]=useState('');

  const handleEdit = async (task) => {
		await updateDoc(doc(db, "tasks", task.id), {
			title: newTitle,
      description: newDescription
		});
	};

  return (
		<div className={styles.edit}>
			<input
				type='text'
				placeholder='Taak'
				onChange={e => setNewTitle(e.target.value.toUpperCase())}
			/>
			<input
				type='text'
				placeholder='Beschrijving'
				onChange={e => setNewDescription(e.target.value)}
			/>
			<button
				className={styles.list_item_button}
				onClick={() => {
					handleEdit(task);
					setEdit(false);
				}}
			>
				Update
			</button>
		</div>
	);
}

export default EditTask;
