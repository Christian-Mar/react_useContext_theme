import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
	const [backgroundColor, setBackgroundColor] = useState('#ffffff');

	const changeColor = (color) => setBackgroundColor(color);
	return (
		<ThemeContext.Provider value={{ backgroundColor, changeColor }}>
			{children}
		</ThemeContext.Provider>
	);
}
