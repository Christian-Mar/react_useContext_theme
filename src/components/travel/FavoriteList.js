import { useState, useEffect } from 'react';
import {
	collection,
	query,
	onSnapshot,
	doc,
	deleteDoc,
} from 'firebase/firestore';
import { db } from '../../firebase';
import styles from './FavoriteList.module.css';

const FavoriteList = () => {
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		const PoiColRef = query(collection(db, 'destinations'));
		onSnapshot(PoiColRef, snapshot => {
			setFavorites(
				snapshot.docs.map(doc => ({
					id: doc.id,
					data: doc.data(),
				}))
			);
		});
	}, []);

	const handleDelete = async id => {
		const destDocRef = doc(db, 'destinations', id);
		try {
			await deleteDoc(destDocRef);
		} catch (err) {
			alert(err);
		}
	};

	return (
		<div>
			<div className={styles.list}>
				{favorites.map(favorite => (
					<div
						className={styles.card}
						id={favorite.id}
						key={favorite.id}
						title={favorite.data.name}
					>
						<h6 className={styles.title}>{favorite.data.name}</h6>
            <p>{favorite.data.category}</p>
            <p>{favorite.data.street}</p>
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
	);
};

export default FavoriteList;