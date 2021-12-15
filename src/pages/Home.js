import ThemeSelector from '../components/ThemeSelector';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styles from './Home.module.css'

const Home = () => {

    const { backgroundColor } = useContext(ThemeContext);

  return (
    <div className={styles.container} style={{backgroundColor}}>
      <h1>Dit is de homepage</h1>
      <p>Hier gaan we bepalen welke achtergrondkleur er gebruikt wordt op deze website. Kies een kleur: </p>
      <ThemeSelector />

    </div>
  )
}

export default Home
