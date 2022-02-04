import * as ttapi from '@tomtom-international/web-sdk-services';
import { useState } from 'react';
import ResultBox from './ResultList';
import styles from './Location.module.css';

export default function FuzzySearch(props) {
	const [name, setName] = useState('');
	const [result, setResult] = useState([]);
  
 
 

	const fuzzySearch = name => {
		ttapi.services
			.fuzzySearch({
				key: process.env.REACT_APP_TOMTOM_API_KEY,
				query: name,
			})
			//.go()
			.then(res => {
				const amendRes = res.results;
				setResult(amendRes);
				
			})
			.catch(err => {
				console.log(err);
			});
	};
  
  

	const resultList =
		result.length > 0 ? (
			result.map(resultItem => (
				<div className={styles.resultItem} key={resultItem.id}>
					<div className='box'>
						<ResultBox
							result={resultItem}
							setLongitude={props.setLongitude}
							setLatitude={props.setLatitude}
						/>
					</div>
				</div>
			))[0]
		) : (
			<h4>Nog geen locatie opgegeven</h4>
		);

	return (
		<div className='App'>
     
			<input
				className='input'
				type='text'
				placeholder='Search Location'
				value={name}
				onChange={e => {
					setName(e.target.value);
				}}
				onKeyPress={e => {
					if (e.key === 'Enter') {
						fuzzySearch(name);	
					}
				}}
				required
			/>
			{resultList}

		</div>
	);
}
