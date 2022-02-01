import { useEffect, useState, useRef } from 'react';
import styles from './Distance.module.css';
// package: npm i @tomtom-international/web-sdk-maps
import * as tt from '@tomtom-international/web-sdk-maps';



const Distance = () => {
  // ref for not always rerendering
  const mapElement = useRef();
  const [map, setMap] = useState({});

// Tom tom documentation
  useEffect(() => {
    
    let map = tt.map({
      key: process.env.REACT_APP_TOMTOM_API_KEY,
      container: mapElement.current,
    })
    console.log(map)
    setMap(map)
  }, [])

  return (
    <div className={styles.container}>
    <div ref={mapElement}></div>
    </div>
  )
}

export default Distance;