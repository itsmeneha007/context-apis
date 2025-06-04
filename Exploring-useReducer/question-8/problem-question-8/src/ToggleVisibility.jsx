
import React, { useReducer } from 'react';
import './ToggleVisibility.css';

const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY';
const initialState = {
  isVisible: false,
};

function visibilityReducer(state, action) {
  switch (action.type) {
    case TOGGLE_VISIBILITY:
      return { ...state, isVisible: !state.isVisible };
    default:
      return state;
  }
}

function ToggleVisibility() {
  const [state, dispatch] = useReducer(visibilityReducer, initialState);
  const { isVisible } = state;

  const handleToggle = () => {
    dispatch({ type: TOGGLE_VISIBILITY });
  };

  return (
    <div className="toggle-container">
      <h1>Toggle Message App</h1>
      <button
        onClick={handleToggle}
        className="toggle-btn"
        aria-expanded={isVisible}
      >
        {isVisible ? 'Hide Message' : 'Show Message'}
      </button>

      <div
        className={`message-wrapper ${isVisible ? 'visible' : 'hidden'}`}
        aria-hidden={!isVisible}
      >
        <p className="message-text">👋 Hello, World!</p>
      </div>
    </div>
  );
}

export default ToggleVisibility;
