import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext.jsx';
import NestedComponent from './NestedComponent.jsx';  
import './index.css';

const ThemeApp = () => {
  const { theme, toggleTheme } = useTheme(); 

  return (
    <div className={`app ${theme}`}>
      <h1>React Context API Theme</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      <NestedComponent />
    </div>
  );
};

const App = () => {
  return (  
    <ThemeProvider>
      <ThemeApp />
    </ThemeProvider>
  );
};

export default App;
