import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import styles from './DogDetail.module.css';

const DogDetail = () => {
  const { backgroundColor } = useContext(ThemeContext);
	const {id} = useParams();
  console.log(id);
	let [dogInfo, setDogInfo] = useState([]);
  let [dogPicture, setDogPicture] = useState([]);

	useEffect (() => {
		fetch(`https://api.thedogapi.com/v1/breeds/${id}`)
			.then(response => {
				return response.json();
			})
			.then(data => {
				setDogInfo(data);
			})
			.catch(err => console.log('error'));
	}, [id]) 

	console.log(dogInfo)

  useEffect(() => {
		fetch(`https://api.thedogapi.com/v1/images/${dogInfo.reference_image_id}`)
			.then(response => {
				return response.json();
			})
			.then(data => {
				setDogPicture(data);
        window.scrollTo(0, 0);
			})
			.catch(err => console.log('error'));
	}, [dogInfo.reference_image_id]); 

  const handleFavorite = async e => {
		e.preventDefault();
		try {
			await addDoc(collection(db, 'dogs'), {
				title: dogInfo.name,
				image: dogPicture.url,
				life_span: dogInfo.life_span,
				temperament: dogInfo.temperament,
			});
		} catch (err) {
			alert(err);
		}
	};

	return (
		<div className={styles.detailPage} style={{ backgroundColor }}>
			<div className={styles.identity}>
				<h4 className={styles.identity_title}>{dogInfo.name}</h4>
				<img
					src={dogPicture.url}
					alt={dogPicture.name}
					className={styles.identity_image}
				/>
				<span className={styles.identity_item}>Life span: {dogInfo.life_span} </span>
				<span className={styles.identity_item}>Temperament: {dogInfo.temperament}</span>
				<button className={styles.identity_button} onClick={handleFavorite}>
					Voeg toe aan favorieten 🧡
				</button>
			</div>
		</div>
	);
};

export default DogDetail;
