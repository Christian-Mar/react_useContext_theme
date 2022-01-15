import { useState, useEffect } from 'react';
import {
	collection,
	query,
	orderBy,
	onSnapshot,
	doc,
	deleteDoc,
	updateDoc,
} from 'firebase/firestore';
import { db } from '../firebase';
import Dogs from '../pages/Dogs';
import styles from './Favorites.module.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [index, setIndex] = useState(0);

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

  return (
    <div>
      <h4>Favorites</h4>
      <div className={styles.list}>
        {favorites.map(favorite => (
          <div className={styles.card} id={favorite.id} key={favorite.id} title={favorite.data.title}>
            
            <img className={styles.image} src={favorite.data.image} alt={favorite.data.title}/>
            <h6>{favorite.data.title}</h6>
          </div>
        ))}
      </div>
    </div>
  )}


export default Favorites
