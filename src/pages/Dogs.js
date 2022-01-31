import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import Favorites from '../components/dogs/Favorites';
import styles from './Dogs.module.css';

const Dogs = () => {
	const { backgroundColor } = useContext(ThemeContext);

  let [dogImages, setDogImages] = useState([]);

  const fetchData = () => {
		const abortCont = new AbortController();
    fetch('https://api.thedogapi.com/v1/breeds/', { signal: abortCont.signal })
			.then(response => {
				return response.json();
			})
			.then(data => {
				setDogImages(data);
			})
			.catch(err => { if (err.name === 'AbortError') {console.log('fetch aborted') } else {console.log('error')}});

      return () => abortCont.abort();
  }

  useEffect(() => {
		
    fetchData()
  }, [])



  return (
		<div className={styles.container} style={{ backgroundColor }}>
			<Favorites />
			<h4>All the dogs</h4>
			<p> --- Click on a dog to get more details ---</p>
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
