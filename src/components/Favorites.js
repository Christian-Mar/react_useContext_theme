import { useState, useEffect } from 'react';
import {
	collection,
	query,
	onSnapshot,
	doc,
	deleteDoc,
} from 'firebase/firestore';
import { db } from '../firebase';
import { Link } from 'react-router-dom';
import styles from './Favorites.module.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
		const dogColRef = query(
			collection(db, 'dogs')
		);
		onSnapshot(dogColRef, snapshot => {
			setFavorites(
				snapshot.docs.map(doc => ({
					id: doc.id,
					data: doc.data(),
				}))
			);
		});
	}, []);

  const handleDelete = async id => {
		const taskDocRef = doc(db, 'dogs', id);
		try {
			await deleteDoc(taskDocRef);
		} catch (err) {
			alert(err);
		}
	};

  return (
		<div>
			<h4>Favorites</h4>
			<div className={styles.list}>
				{favorites.map(favorite => (
					<div
						className={styles.card}
						id={favorite.id}
						key={favorite.id}
						title={favorite.data.title}
					>
						<Link className={styles.link} to={`/dogs/${favorite.data.api_id}`}>
							
							<img
								className={styles.image}
								src={favorite.data.image}
								alt={favorite.data.title}
							></img>
							<h6 className={styles.title}>{favorite.data.title}</h6>
						</Link>
						<button
							className={styles.button}
							onClick={() => handleDelete(favorite.id)}
						>
							Verwijder uit favorieten
						</button>
					</div>
				))}
			</div>
		</div>
	);}


export default Favorites
