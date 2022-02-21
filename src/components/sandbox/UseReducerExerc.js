import { useReducer } from 'react';
import styles from './UseReducerExerc.module.css';

const initialState = { count: 0 };

function reducer(state, action) {
	switch (action.type) {
		case 'increment':
			return { count: state.count + 5 };
		case 'decrement':
			return { count: state.count - 5 };
		case 'divide':
			return { count: state.count / 2 };
		case 'multiply':
			return { count: state.count * 2 };
		case 'reset':
			return { count: 0 };
		default:
			throw new Error();
	}
}

export default function ReducerApp() {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<div className={styles.container}>
			<div className={styles.counter}>Count: {state.count}</div>
			<div>
				<button
					className={styles.button}
					onClick={() => dispatch({ type: 'decrement' })}
				>
					-5
				</button>
				<button
					className={styles.button}
					onClick={() => dispatch({ type: 'increment' })}
				>
					+5
				</button>
				<button
					className={styles.button}
					onClick={() => dispatch({ type: 'divide' })}
				>
					/2
				</button>
				<button
					className={styles.button}
					onClick={() => dispatch({ type: 'multiply' })}
				>
					x2
				</button>
				<button
					className={styles.button}
					onClick={() => dispatch({ type: 'reset' })}
				>
					reset
				</button>
			</div>
		</div>
	);
}
