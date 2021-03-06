import { useDrag } from 'react-dnd';


function Picture({ id, url }) {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: 'image',
    item: {id: id},
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		}),
	}));
	return (
		<img
			ref={drag}
			src={url}
      alt="comic style something"
			width='150px'
			style={{ border: isDragging ? '5px solid black' : '0px' }}
		/>
	);
}

export default Picture;
