import { useState } from 'react';
import styles from './StarRating.module.css';
import { FaCat } from 'react-icons/fa';

const StarRating = props => {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);
	return (
		<div className={styles.starRating}>
			{[...Array(5)].map((star, index) => {
				index += 1;
				return (
					<button
						type='button'
						key={index}
						className={index <= (hover || rating) ? styles.on : styles.off}
						onClick={() => {
							props.changeScore(index);
							setRating(index);
						}}
						onMouseEnter={() => setHover(index)}
						onMouseLeave={() => setHover(rating)}
					>
						<span className='star'>
							<FaCat />
						</span>
					</button>
				);
			})}
		</div>
	);
};

export default StarRating;
