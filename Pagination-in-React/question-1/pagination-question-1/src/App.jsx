import React, { useEffect, useRef, useState } from 'react';
import CharacterList from './components/CharacterList';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const currentPage = useRef(1);

  const fetchCharacters = async (page = 1) => {
    setLoading(true);
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await res.json();
      setCharacters(data.results.slice(0, 10)); 
      setTotalPages(data.info.pages);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCharacters(currentPage.current);
  }, []);

  const handlePageChange = (pageNum) => {
    currentPage.current = pageNum;
    fetchCharacters(pageNum);
  };

  return (
    <div className="container">
      <h1>Rick and Morty Characters</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <CharacterList characters={characters} />
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => handlePageChange(num)}
                style={{
                  margin: '0 5px',
                  padding: '5px 10px',
                  backgroundColor: currentPage.current === num ? '#4CAF50' : '#eee',
                  color: currentPage.current === num ? '#fff' : '#000',
                  border: '1px solid #ccc',
                  cursor: 'pointer',
                }}
              >
                {num}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
