import { useState } from 'react';
import styles from './AddTask.module.css';
import { db } from '../../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

function AddTask() {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false)

	/* functie om een taak toe te voegen in firebase.
  De collectie tasks wordt hierbij gedefinieerd vanuit de frontend, alsook de verschillende fields.
  Firebase genereert automatisch een id voor het document 
	Timestamp wordt hier toegevoegd om nadien te kunnen sorteren op de volgorde van ingave van de taken, maar heeft geen afzonderlijke state */
	const handleSubmit = async e => {
		e.preventDefault();
		try {
			await addDoc(collection(db, 'tasks'), {
				title: title,
				description: description,
				completed: completed,
				created: Timestamp.now(),
			});
      setTitle('');
      setDescription('');
      setCompleted(false)
		} catch (err) {
			alert(err);
		}
	};

	return (
		
			<form onSubmit={handleSubmit} className={styles.addTask} name='addTask'>
				<input
					type='text'
					name='title'
					onChange={e => setTitle(e.target.value)}
					value={title}
					placeholder='Nieuwe taak'
				/>
				<textarea
					onChange={e => setDescription(e.target.value)}
					placeholder='Beschrijving'
					value={description}
				></textarea>
				<button type='submit'>Registreer</button>
			</form>
		
	);
}

export default AddTask;
