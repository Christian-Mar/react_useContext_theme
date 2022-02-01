import { useEffect, useState, useRef } from 'react';
import styles from './Distance.module.css';
// package: npm i @tomtom-international/web-sdk-maps
import * as tt from '@tomtom-international/web-sdk-maps';



const Distance = () => {
  // ref for not always rerendering
  const mapElement = useRef();
  const [map, setMap] = useState({});
  const [longitude, setLongitude] = useState(3.733333);
  const [latitude, setLatitude] = useState(51.049999);

// Tom tom documentation
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
    })
    console.log(map)
    setMap(map)
  }, [])

  return (
    <div className={styles.container}>
    <div ref={mapElement} className={styles.map}></div>
    </div>
  )
}

export default Distance;