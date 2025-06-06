import React, {useRef, useState} from 'react';

const FocusInput = () => {
    const inputRef = useRef(null);
    const [focused, setFocused] = useState(false);

    const handleFocus = () => {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor='light green';
        setFocused(true);
    }

    return (
    <div className="focus-input">
      <input
        type="text"
        ref={inputRef}
        placeholder="Click the button to focus me"
      />
      <button onClick={handleFocus}>Focus Input</button>
      {focused && <p className="message">Focused!</p>}
    </div>
  );
}

export default FocusInput;