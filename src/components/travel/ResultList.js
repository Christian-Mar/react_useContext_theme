const ResultBox = ({ result, setLongitude, setLatitude }) => (
	<div className='result' setlongitude={setLongitude(result.position.lng)} setlatitude={setLatitude(result.position.lat)}>
		<div className='result-name'>
			{result.address.freeformAddress} - {result.address.country}
		</div>
		

		{result.poi ? (
			<div className='result-name'>Location name: {result.poi.name}</div>
		) : null}
	</div>
);

export default ResultBox;
