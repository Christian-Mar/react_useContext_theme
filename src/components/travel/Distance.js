import { useEffect, useState, useRef } from 'react';
import styles from './Distance.module.css';
// package: npm i @tomtom-international/web-sdk-maps
import * as tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import * as ttapi from '@tomtom-international/web-sdk-services';
//import { FaFlag } from 'react-icons/fa';

const Distance = () => {
	// ref for not always rerendering
	const mapElement = useRef();
	const [map, setMap] = useState({});
	const [longitude, setLongitude] = useState(3.733333);
	const [latitude, setLatitude] = useState(51.049999);

	const convertToPoints = lngLat => {
		return {
			point: {
				point: {
					latitude: lngLat.lat,
					logitude: lngLat.lng,
				},
			},
		};
	};
/*
	const addDestinationMarker = (lngLat, map) => {
		const element = document.createElement('div');
		element.style =
			'background-color:blue;width:15px;height:15px;border-radius:50%;';
		new tt.Marker({
			element: element,
		})
			.setLngLat(lngLat)
			.addTo(map);
	};
	
  const drawRoute = (geoJson, map) => {
    if(map.getLayer('route')) {
      map.removeLayer('route')
      map.removeSource('route')
    }
    map.addLayer({
      id: 'route',
      type: 'line',
      source: {
        type: 'geoJson',
        data: geoJson,
      },
      paint: {'line-color':'blue', 'line-width': 6}
    })
  }
*/
	useEffect(() => {
		const origin = {
			lng: longitude,
			lat: latitude,
		};

		const destinations = [];
		console.log(destinations);

		let map = tt.map({
			key: process.env.REACT_APP_TOMTOM_API_KEY,
			container: mapElement.current,
			stylesVisibility: {
				trafficIncidents: true,
				trafficFlow: true,
			},
			center: [longitude, latitude],
			zoom: 14,
		});
		console.log(map);
		setMap(map);
/*
		const sortDestinations = locations => {
			const pointsForDestinations = locations.map(destination => {
				return convertToPoints(destination);
			});
			const callParameters = {
				key: process.env.REACT_APP_TOM_TOM_KEY,
				destination: pointsForDestinations,
				origins: [convertToPoints(origin)],
			};

			return new Promise((resolve, reject) => {
				ttapi.services.matrixRouting(callParameters)
        .then(matrixAPIResults => {const results = matrixAPIResults.matrix[0];
        const resultsArray = results.map((result, index) => {
          return {
            location: locations[index], 
            drivingtime: result.response.routeSummary.travelTimeInSeconds,
          }
        })
      resultsArray.sort((a,b) => {
        return a.drivingtime - b.drivingtime
      })
      const sortedLocations = resultsArray.map((result) => {return result.location})
      resolve(sortedLocations)
      });
			});
		};
		
    
    const recalculateRoutes = () => {
      sortDestinations(destinations).then((sorted) => {sorted.unshift(origin)

      ttapi.services.calculateRoute({
				key: process.env.REACT_APP_TOM_TOM_KEY,
        locations: sorted,
			})
      .then((routeData) => {
       const geoJson = routeData.teGeoJson();
       drawRoute(geoJson, map);
      });
    })
  }
    

		map.on('click', e => {
			destinations.push(e.lngLat);
			addDestinationMarker(e.lngLat, map);
      recalculateRoutes()
		});
*/
		return () => map.remove();
	}, [longitude, latitude]);

	return (
		<div className={styles.container}>
			<div ref={mapElement} className={styles.map}></div>
			<div className={styles.search}>
				<h1>Where to?</h1>

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

export default Distance;
