import { useEffect, useState, useRef } from 'react';
import styles from './Destination.module.css';
import * as tt from '@tomtom-international/web-sdk-maps';
//import * as ttapi from '@tomtom-international/web-sdk-services';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import FuzzySearch from './Location';
import PoiDetails from './PoiDetails';


const Destination = () => {
	const mapElement = useRef();
	const [longitude, setLongitude] = useState(3.733333);
	const [latitude, setLatitude] = useState(51.049999);
	const [poi, setPoi] = useState('')
	//const [detail, setDetail] = useState('')

	useEffect(() => {
		let map = tt.map({
			key: process.env.REACT_APP_TOMTOM_API_KEY,
			container: mapElement.current,
			stylesVisibility: {
				trafficIncidents: true,
				trafficFlow: true,
			},
			center: [longitude, latitude],
			zoom: 12,
			language: 'nl-NL',
		});
		console.log(map); // Toevallige functie, maar definieert wel map
		map.on('click', function (event) {
			let touchingLayer = map.queryRenderedFeatures(event.point)[0];
			console.log(touchingLayer);
			if (touchingLayer.layer.id === 'POI') {
				setPoi(touchingLayer.properties);
				//setPoi(touchingLayer.properties.id);
				console.log(poi);
			}
		});
		/*
		let detail = (id) => {
			let place = ttapi.services.poi({
				key: process.env.REACT_APP_TOMTOM_API_KEY,
				entityId: id,
			})
			.then(function(response){
				setDetail(response)
				//let firstResult = response.results[0]
			})
		}*/
		return () => map.remove();
	}, [poi,  longitude, latitude]);

	return (
		<div className={styles.container}>
			<h1>Waar gaan we naartoe?</h1>
			<FuzzySearch setLongitude={setLongitude} setLatitude={setLatitude} />
			<div ref={mapElement} className={styles.map}>
				<PoiDetails poi={poi} />
			</div>
		</div>
	);
};

export default Destination;
