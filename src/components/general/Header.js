import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { FaGithub } from 'react-icons/fa';
import ThemeSelector from './ThemeSelector';

const Header = () => {
	return (
		<>
			<nav className={styles.navigation}>
				<NavLink to='/' className={styles.link}>
					Home
				</NavLink>
				<NavLink to='/dogs' className={styles.link}>
					Dogs
				</NavLink>
				<NavLink to='/travel' className={styles.link}>
					Travel
				</NavLink>
				<NavLink to='/sandbox' className={styles.link}>
					Sandbox
				</NavLink>
				<a
					className={styles.link}
					href='https://github.com/Christian-Mar/react_useContext_theme'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FaGithub />
				</a>
			</nav>
			<ThemeSelector />
		</>
	);
};

export default Header;
