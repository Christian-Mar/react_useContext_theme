import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'

const Header = () => {
  return (
		<nav className={styles.navigation}>
			<NavLink to='/'>
				Home
			</NavLink>
			<NavLink to='/letters'>
				Letters
			</NavLink>
			<NavLink to='/cijfers'>
				Cijfers
			</NavLink>
		</nav>
	);
}

export default Header
