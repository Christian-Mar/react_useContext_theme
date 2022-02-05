import styles from './PoiDetails.module.css';

const PoiDetails = ({poi}) => {

  //console.log(poi);
  
  
  return (<div className={styles.poi}>
		<div className={styles.poi_name}>{poi.name}</div>
		<div className={styles.poi_categories}></div>
		<div className={styles.poi_address}>{}</div>
		<div className={styles.poi_url}></div>
	</div>);
}

export default PoiDetails;