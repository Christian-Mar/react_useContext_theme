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
	}
};

const initialState = {
	color: 'black',
	person: 'aristoteles',
};

export default function UseReducer2() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div>
			<label>Kies een achtergrondkleur en een persoon</label>
			<br />
			<select
				value={state.color}
				onChange={event => {
					dispatch({ type: types.COLOR, value: event.target.value });
				}}
			>
				<option value='orange'>Oranje</option>
				<option value='pink'>Roze</option>
				<option value='blue'>Blauw</option>
			</select>
			<select
				value={state.person}
				onChange={event => {
					dispatch({ type: types.PERSON, value: event.target.value });
				}}
			>
				<option value='aristoteles'>Aristoteles</option>
				<option value='darwin'>Darwin</option>
				<option value='davinci'>Da Vinci</option>
				<option value='michelangelo'>Michelangelo</option>
				<option value='newton'>Newton</option>
				<option value='shakespeare'>Shakespeare</option>
			</select>
			<br />
			<br />
			
      <div className={styles.image} style={{ backgroundColor: `${state.color}` }}>
      <img src={`images/${state.person}.png`} alt='bekende figuur' height='300' background-color="blue"/> </div>
		</div>
	);
}
