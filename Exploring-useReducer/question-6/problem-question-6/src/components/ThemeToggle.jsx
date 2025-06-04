import React, { useReducer } from 'react';

const initialState = {
  theme: 'light',
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    default:
      return state;
  }
}

function ThemeToggle() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { theme } = state;

  return (
    <div className={`app-container ${theme}`}>
      <h1>Current Theme: {theme.toUpperCase()}</h1>
      <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle;
