import React from 'react';

const CharacterList = ({ characters }) => {
  return (
    <div className="character-grid">
      {characters.map((char) => (
        <div key={char.id} className="character-card">
          <img src={char.image} alt={char.name} />
          <h3>{char.name}</h3>
          <p>Status: {char.status}</p>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
