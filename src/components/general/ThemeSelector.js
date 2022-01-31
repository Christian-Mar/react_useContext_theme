import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import styles from './ThemeSelector.module.css';

const themeColors = [
	'#ffffff',
	'#fdffb6',
	'#caffbf',
	'#9bf6ff',
	'#bdb2ff',
	'#ffc6ff',
];

const ThemeSelector = () => {
  
  const { changeColor } = useContext(ThemeContext);

	return <div className={styles.theme_selector}>
    <div className={styles.theme_buttons}>
    {themeColors.map(color => (<div
      key={color}
      onClick={() => changeColor(color)}
      style={{ background: color }}
      />))}
    </div>
  </div>;
};

export default ThemeSelector;
