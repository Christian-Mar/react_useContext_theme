const ResultBox = ({ result, setLongitude, setLatitude }) => (
	<div className='result'>
		<div className='result-name'>
			Location Address: {result.address.freeformAddress}
		</div>
		<div className='result-name'>Longitude: {result.position.lng}</div>
		<div className='result-name'>Latitude: {result.position.lat}</div>
		<div className='result-name'>
			Location country: {result.address.country}
		</div>

		{result.poi ? (
			<div className='result-name'>Location name: {result.poi.name}</div>
		) : null}
		<button onClick={() => {setLongitude(result.position.lng); setLatitude(result.position.lat)}}>Go!</button>
	</div>
);

export default ResultBox;
