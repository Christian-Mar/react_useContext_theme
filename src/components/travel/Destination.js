import { useEffect, useState, useRef } from 'react';
import styles from './Destination.module.css';
import * as tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import FuzzySearch from './Location';

const Destination = () => {
	const mapElement = useRef();
	const [longitude, setLongitude] = useState(3.733333);
	const [latitude, setLatitude] = useState(51.049999);

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

			//setMap(map);

		return () => map.remove();
	}, [longitude, latitude]);

	return (
		<div className={styles.container}>
			<h1>Waar gaan we naartoe?</h1>
			<FuzzySearch setLongitude={setLongitude} setLatitude={setLatitude} />
			<div ref={mapElement} className={styles.map}></div>
		</div>
	);
};

export default Destination;
