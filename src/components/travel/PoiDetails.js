import styles from './PoiDetails.module.css';

const PoiDetails = ({info}) => {
  
  console.log(info.poi.name, info.poi.phone);
  
  return (
		<div className={styles.poi}>
			<div className={styles.poi_name}>{}</div>
			<div className={styles.poi_phone}>{}</div>
			<div className={styles.poi_address}></div>
			<div className={styles.poi_url}></div>
		</div>
	);
}

export default PoiDetails