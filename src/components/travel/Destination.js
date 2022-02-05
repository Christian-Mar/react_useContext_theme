import { useEffect, useState, useRef } from 'react';
import styles from './Destination.module.css';
import * as tt from '@tomtom-international/web-sdk-maps';
import * as ttapi from '@tomtom-international/web-sdk-services';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import FuzzySearch from './Location';

const Destination = () => {
	const mapElement = useRef();
	const [longitude, setLongitude] = useState(3.733333);
	const [latitude, setLatitude] = useState(51.049999);
	const [poi, setPoi] = useState();
	const [name, setName] = useState();
	const [street, setStreet] = useState();
	const [url, setUrl] = useState();
	const [category, setCategory] = useState();
	//const [photo, setPhoto] = useState();

	useEffect(() => {
		let map = tt.map({
			key: process.env.REACT_APP_TOMTOM_API_KEY,
			container: mapElement.current,
			stylesVisibility: {
				trafficIncidents: false,
				trafficFlow: true,
			},
			center: [longitude, latitude],
			zoom: 14,
			language: 'nl-NL',
		});

		map.on('click', function (event) {
			let touchingLayer = map.queryRenderedFeatures(event.point)[0];
			console.log(touchingLayer);
			if (touchingLayer.layer.id === 'POI') {
				displayPoi(touchingLayer.properties.id);
				//displayPhoto(touchingLayer.properties.id);
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
				});
		};
		console.log(poi);
		console.log(street);
		console.log(category);
		console.log(name);
		console.log(url);
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
	}, [category, url, poi, name, street, longitude, latitude]);

	return (
		<div className={styles.container}>
			<h1>Waar gaan we naartoe?</h1>
			<FuzzySearch setLongitude={setLongitude} setLatitude={setLatitude} />
			<div ref={mapElement} className={styles.map}>
				<div className={styles.poi}>
					<div className={styles.poi_name}>{name}</div>
					<div className={styles.poi_category}>{category}</div>
					<div className={styles.poi_address}>{street}</div>
					<div className={styles.poi_url}>
						<a href={url}>{url}</a>
					</div>
					<div className={styles.poi_url}></div>
					
				</div>
			</div>
		</div>
	);
};

export default Destination;
