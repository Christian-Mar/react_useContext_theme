import { useEffect, useState, useRef } from 'react';
import styles from './Destination.module.css';
// package: npm i @tomtom-international/web-sdk-maps
import * as tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
//import * as ttapi from '@tomtom-international/web-sdk-services';
//import { FaFlag } from 'react-icons/fa';
import FuzzySearch from './Location';

const Destination = () => {
	// ref for not always rerendering
	const mapElement = useRef();
	//const [map, setMap] = useState({});
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
		});
		
	//	setMap(map);

		return () => map.remove();
	}, [longitude, latitude]);

	return (
		<div className={styles.container}>
			<div ref={mapElement} className={styles.map}></div>
			<div className={styles.search}>
				<h1>Where to?</h1>
				<FuzzySearch setLongitude={setLongitude} setLatitude={setLatitude}/>
				<input
					type='text'
					id='longitude'
					className={styles.longitude}
					placeholder='Put in Longitude'
					onChange={e => {
						setLongitude(e.target.value);
					}}
				/>
				<input
					type='text'
					id='latitude'
					className={styles.latitude}
					placeholder='Put in Latitude'
					onChange={e => {
						setLatitude(e.target.value);
					}}
				/>
			</div>
		</div>
	);
};

export default Destination;
