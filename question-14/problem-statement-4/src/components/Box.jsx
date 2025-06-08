
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import NestedBox from './NestedBox';

function Box() {
  const { theme } = useContext(ThemeContext);

  const styles = {
    padding: '20px',
    marginTop: '20px',
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
  };

  return (
    <div style={styles}>
      <h2>This is box component</h2>
      <NestedBox />
    </div>
  );
}

export default Box;
