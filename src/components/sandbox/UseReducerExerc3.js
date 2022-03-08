import React, { useState, useReducer } from 'react';
import styles from './UseReducerExerc3.module.css';

const initialState = { 
  count: 0,
  number: 0
};

function reducer(state, action) {
	switch (action.type) {
		case 'increment':
      return { ...state, count: state.count + action.value};
		case 'decrement':
			return { ...state, count: state.count - action.value };
		case 'divide':
			return { ...state, count: state.count / action.value };
		case 'multiply':
			return { ...state, count: state.count * action.value };
		case 'reset':
			return { ...state, count: 0 };
		default:
			return state;
	}
}

export default function ReducerApp() {
  const [number, setNumber] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(typeof number);
  console.log(typeof state.count);
  console.log(number);
  console.log(state.count);
  
  
  
  return (
		<div className={styles.container}>
      <input type='number' className={styles.counter} onChange={(e) => setNumber(parseInt(e.target.value))} value={number}/>
      
			<div>
				<button
					className={styles.button}
          onClick={() => dispatch({ type: 'decrement', value: number })}
        
				>
					-
				</button>
				<button
					className={styles.button}
					onClick={() => dispatch({ type: 'increment', value: number })}
				>
					+
				</button>
				<button
					className={styles.button}
					onClick={() => dispatch({ type: 'divide', value: number })}
				>
					:
				</button>
				<button
					className={styles.button}
					onClick={() => dispatch({ type: 'multiply', value: number })}
				>
					x
				</button>
				<button
					className={styles.button}
					onClick={() => dispatch({ type: 'reset' })}
				>
					reset
        </button>
        <br/><br/><br/>
        {state.count}
			</div>
		</div>
	);
}