import React from 'react';
import { useTheme } from './ThemeContext.jsx'; 

const NestedComponent = () => {
  const { theme } = useTheme();

  return (
    <div className={`nested ${theme}`}>
      <p>This component changes style based on theme: <strong>{theme}</strong></p>
    </div>
  );
};

export default NestedComponent;
