import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import styles from './Dogs.module.css';

const Dogs = () => {
	const { backgroundColor } = useContext(ThemeContext);

  let [dogImages, setDogImages] = useState([]);

  const fetchData = () => {
    fetch('https://api.thedogapi.com/v1/breeds/')
			.then(response => {
				return response.json();
			})
			.then(data => {
				setDogImages(data);
			});
  }

  useEffect(() => {
    fetchData()
  }, [])



  return (
		<div className={styles.container} style={{ backgroundColor }}>
			<div>
				{dogImages.length > 0 && (
					<ul>
						{dogImages.map(dog => (
							<li key={dog.id}><Link to={`/dogs/${dog.id}`}>
								<img
									src={dog.image.url}
									alt={dog.name}
									className={styles.dog_image}
								/></Link>
								<span>{dog.name}</span>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}


  

export default Dogs;
