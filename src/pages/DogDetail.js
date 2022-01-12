import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DogDetail = () => {
	const params = useParams();

	let [dogInfo, setDogInfo] = useState([]);

	//https://docs.thedogapi.com/api-reference/breeds/breeds-list

	const fetchOneDog = () => {
		fetch(`https://api.thedogapi.com/v1/breeds?attach_breed=${params.id}, {
      method: "GET", 
      headers: {     
        'Content-Type': 'application/json',
        'x-api-key':
          'c3ecc448-bc6f-4a2e-a18d-25271b1d33a7',
      }, 
    }`)
			.then(response => {
				return response.json();
			})
			.then(data => {
				setDogInfo(data);
				console.log(data);
				console.log(params.id);
			});
	};

	useEffect(() => {
		fetchOneDog();
	}, [params.id]);

	return (
		<div>
			<div>Dog id: {dogInfo.id}</div>
		</div>
	);
};

export default DogDetail;
