import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { FaGithub } from 'react-icons/fa';
import ThemeSelector from '../components/ThemeSelector';

const Header = () => {
  return (
		<>
		<nav className={styles.navigation}>
			<NavLink to='/'>Home</NavLink>
			<NavLink to='/letters'>Letters</NavLink>
			<NavLink to='/cijfers'>Cijfers</NavLink>
			<a
				href='https://github.com/Christian-Mar/react_useContext_theme'
				target='_blank'
				rel='noopener noreferrer'
			>
				<FaGithub />
			</a>
		</nav>
		<ThemeSelector /></>
	);
}

export default Header
