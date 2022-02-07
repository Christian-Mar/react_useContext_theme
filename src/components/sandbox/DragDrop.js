import styles from './DragDrop.module.css';
import Picture from './Picture';

const PictureList = [
	{
		id: 1,
		url: 'https://cdn.pixabay.com/photo/2019/07/13/20/15/zap-4335609__340.png',
	},
	{
		id: 2,
		url: 'https://cdn.pixabay.com/photo/2019/07/13/20/15/zap-4335613__340.png',
	},
	{
		id: 3,
		url: 'https://cdn.pixabay.com/photo/2019/07/13/20/15/zap-4335611_960_720.png',
	},
	{
		id: 4,
		url: 'https://cdn.pixabay.com/photo/2019/07/13/18/51/zap-4335467_960_720.png',
	},
	{
		id: 5,
		url: 'https://cdn.pixabay.com/photo/2019/07/13/20/15/zap-4335612__340.png',
	},
	{
		id: 6,
		url: 'https://cdn.pixabay.com/photo/2019/07/13/18/51/zap-4335468__340.png',
	},
	{
		id: 7,
		url: 'https://cdn.pixabay.com/photo/2019/07/13/19/06/zap-4335491__340.png',
	},
];

function DragDrop() {
  return (
		<>
			<div className={styles.pictures}>{PictureList.map((picture) => {return <Picture url={picture.url} id={picture.id}/>})}</div>
			<div className={styles.board}></div>
		</>
	);
}

export default DragDrop;