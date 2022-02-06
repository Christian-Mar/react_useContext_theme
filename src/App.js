import { Routes, Route } from 'react-router-dom';
import Header from './components/general/Header';
import Home from './pages/Home';
import Dogs from './pages/Dogs';
import Travel from './pages/Travel';
import DogDetail from './pages/DogDetail';
import Sandbox from './pages/Sandbox';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  return (
		<ThemeProvider>
			<div className='App'>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/dogs' element={<Dogs />} />
					<Route path='/dogs/:id' element={<DogDetail />} />
					<Route path='/travel' element={<Travel />} />
					<Route path='/sandbox' element={<Sandbox />} />
				</Routes>
			</div>
		</ThemeProvider>
	);
}

export default App;
