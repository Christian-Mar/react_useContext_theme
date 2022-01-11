import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DogDetail = () => {
	const params = useParams();

	let [dogInfo, setDogInfo] = useState([]);

	const fetchData = () => {
		fetch(`https://api.thedogapi.com/v1/breeds?attach_breed=${params.id}`)
			.then(response => {
				return response.json();
			})
			.then(data => {
				setDogInfo(data);
			});
	};

	/*
 await fetch(`https://rest.yahoofinanceapi.com/v6/finance/quote?symbols=${ticker}`, {
      method: "GET", 
      headers: {     
        'Content-Type': 'application/json',
        'x-api-key':
          'q96hk7SjVqImEeqqegxZZJlUetGPUx2zm1GNb0e0',
      }, 
    })
  */

	useEffect(() => {
		fetchData();
	}, [params.id]);

	return (
		<div>
			<div>Dog name: {dogInfo.name}</div>
		</div>
	);
};

export default DogDetail;
