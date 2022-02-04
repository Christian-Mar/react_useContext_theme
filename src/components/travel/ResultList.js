import { useEffect } from 'react';
import styles from './ResultList.module.css';

const ResultBox = ({ result, setLongitude, setLatitude }) => {
  useEffect(()=> {setLatitude(result.position.lat); setLongitude(result.position.lng)},[result, setLongitude, setLatitude])
return (
	<div className='result'  >
		<div className={styles.resultName} >
			{result.address.freeformAddress} - {result.address.country}
		</div>
	</div>
)
}

;

export default ResultBox;
