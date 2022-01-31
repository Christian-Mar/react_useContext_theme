import { Routes, Route } from 'react-router-dom';
import Header from './components/general/Header';
import Home from './pages/Home';
import Dogs from './pages/Dogs';
import DogDetail from './pages/DogDetail';
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
				</Routes>
			</div>
		</ThemeProvider>
	);
}

export default App;
