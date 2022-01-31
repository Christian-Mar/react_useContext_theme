import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import styles from "./EditTask.module.css";

const EditTask = ({ task, setTaskToEdit }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleEdit = async (task) => {
    await updateDoc(doc(db, "tasks", task.id), {
      title: newTitle,
      description: newDescription,
    });
  };
  if (!task) return null;
  return (
		<div className={styles.edit}>
			<input
				type='text'
				placeholder='Titel'
				onChange={e => setNewTitle(e.target.value)}
			/>
			<input
				type='text'
				placeholder='Beschrijving'
				onChange={e => {setNewDescription(e.target.value)}}
			/>
			<button
				className={styles.list_item_button}
				onClick={() => {
					handleEdit(task);
					setTaskToEdit(null);
				}}
			>
				Update
			</button>
		</div>
	);
};

export default EditTask;
