import React, { useReducer } from 'react';
import aristoteles from '../../images/aristoteles.png';
import darwin from '../../images/darwin.png';
import davinci from '../../images/davinci.png';

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
				<option value='black'>Black</option>
				<option value='pink'>Pink</option>
				<option value='blue'>Blue</option>
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
			You chose a {state.color} 
      <img src={`images/${state.person}.png`} alt='bekende figuur' height='300' background-color="blue"/> {state.person}
		</div>
	);
}
