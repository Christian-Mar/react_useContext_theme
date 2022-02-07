import { useEffect, useState, useRef } from 'react';
import styles from './Destination.module.css';
import * as tt from '@tomtom-international/web-sdk-maps';
import * as ttapi from '@tomtom-international/web-sdk-services';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import FuzzySearch from './Location';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';

const Destination = () => {
	const mapElement = useRef();
	const [longitude, setLongitude] = useState(3.733333);
	const [latitude, setLatitude] = useState(51.049999);
	const [poi, setPoi] = useState(null);
	const [name, setName] = useState();
	const [street, setStreet] = useState();
	const [url, setUrl] = useState();
	const [category, setCategory] = useState();
	const [phone, setPhone] = useState();
	//const [place, setPlace] =useState('');
 console.log(poi)
	useEffect(() => {
		let map = tt.map({
			key: process.env.REACT_APP_TOMTOM_API_KEY,
			container: mapElement.current,
			stylesVisibility: {
				trafficIncidents: false,
				trafficFlow: true,
			},
			center: [longitude, latitude],
			zoom: 18,
			language: 'nl-NL',
		});

		map.on('click', function (event) {
			let touchingLayer = map.queryRenderedFeatures(event.point)[0];
			console.log(touchingLayer);
			if (touchingLayer.layer.id === 'POI') {
				displayPoi(touchingLayer.properties.id);
			}
		});

		let displayPoi = id => {
			ttapi.services
				.placeById({
					key: process.env.REACT_APP_TOMTOM_API_KEY,
					entityId: id,
					language: 'nl-NL',
				})
				.then(function (response) {
					setPoi(response.results[0]);
					setName(response.results[0].poi.name);
					setCategory(response.results[0].poi.categories[0]);
					setStreet(response.results[0].address.freeformAddress);
					setUrl(response.results[0].poi.url);
					setPhone(response.results[0].poi.phone);
				});
		};
		console.log(poi);
		/*
		let displayPhoto = id => {
			ttapi.services
				.poiPhotos({
					key: process.env.REACT_APP_TOMTOM_API_KEY,
					id: id,
					width: 200,
					height: 100,
				})
				.then(function(response) {
					setPhoto(response.result.photos[0]);
				});
		};
		console.log(photo)
*/
		return () => map.remove();
	}, [phone, category, url, poi, name, street, longitude, latitude]);

	const handleFavorite = async e => {
		e.preventDefault();
		try {
			await addDoc(collection(db, 'destinations'), {
				poi: poi,
				name: name,
				category: category,
				street: street,
				url: url || null,
				phone: phone || null,
			});
		} catch (err) {
			alert(err);
		}
	};

	return (
		<div className={styles.container}>
			<h1>Waar gaan we naartoe?</h1>
			<FuzzySearch setLongitude={setLongitude} setLatitude={setLatitude} />
			<div className={styles.containerMap}>
				<div ref={mapElement} className={styles.map}>

				{ poi ? <div className={styles.poi}>
						<div className={styles.poi_name}>{name}</div>
						<div className={styles.poi_category}>{category}</div>
						<div className={styles.poi_address}>{street}</div>
						<div className={styles.poi_phone}>{phone}</div>
						<div
							className={styles.poi_url}
							onClick={() => {
								window.open(`https://${url}`);
							}}
						>
							{url}
						</div>
						<div className={styles.poi_url}></div>
						<button className={styles.identity_button} onClick={handleFavorite}>
							Voeg toe aan favorieten
						</button>
					</div> : null}
					
				
					</div>
				<div className={styles.list}>
					<h5>We gaan naar </h5>
				</div>
			</div>
		</div>
	);
};

export default Destination;
