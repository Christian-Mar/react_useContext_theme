import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Cijfers from './pages/Cijfers';
import Letters from './pages/Letters';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  return (
		<ThemeProvider>
			<div className='App'>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/letters' element={<Letters />} />
					<Route path='/cijfers' element={<Cijfers />} />
				</Routes>
			</div>
		</ThemeProvider>
	);
}

export default App;
