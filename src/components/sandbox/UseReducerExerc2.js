import React, { useReducer } from 'react';
import styles from './UseReducerExerc2.module.css';

const types = {
	PERSON: 'PERSON',
	COLOR: 'COLOR',
};

const reducer = (state, action) => {
	switch (action.type) {
		case types.PERSON:
			return { ...state, person: action.value };
		case types.COLOR:
			return { ...state, color: action.value };
		default:
			throw new Error();
	}
};

const initialState = {
	color: 'lime',
	person: 'aristoteles',
};

export default function UseReducer2() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div className={styles.container}>
			<p className={styles.text}>Kies een achtergrondkleur en een persoon</p>
			<br />
			<select
				className={styles.select}
				value={state.color}
				onChange={event => {
					dispatch({ type: types.COLOR, value: event.target.value });
				}}
			>
				<option value='lime'>Groen</option>
				<option value='yellow'>Geel</option>
				<option value='orangered'>Rood</option>
				<option value='deeppink'>Roze</option>
			</select>
			<select
				className={styles.select}
				value={state.person}
				onChange={event => {
					dispatch({ type: types.PERSON, value: event.target.value });
				}}
			>
				<option value='aristoteles'>Aristoteles</option>
				<option value='darwin'>Charles Darwin</option>
				<option value='davinci'>Leonardo Da Vinci</option>
				<option value='grimm'>Gebroeders Grimm</option>
				<option value='newton'>Isaac Newton</option>
				<option value='seneca'>Lucius Seneca</option>
				<option value='goethe'>Johann Wolfgang von Goethe</option>
			</select>
			<br />
			<br />

			<div
				className={styles.image}
				style={{ backgroundColor: `${state.color}` }}
			>
				<img
					src={`images/${state.person}.png`}
					alt='bekende figuur'
					height='300'
					background-color='blue'
				/>{' '}
			</div>
		</div>
	);
}
