import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

  const handleSearch = async (query) => {
    setLoading(true);
    setError('');
    setMovies([]);

    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
      const data = await res.json();

      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setError(data.Error);
      }
    } catch (err) {
      setError("Something went wrong while fetching movies.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
        {movies.map((movie) => (
          <div key={movie.imdbID} style={{ border: '1px solid #ccc', padding: '10px', width: '180px' }}>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'} alt={movie.Title} width="150" />
            <h4>{movie.Title}</h4>
            <p>{movie.Year}</p>
            <Link to={`/movie/${movie.imdbID}`}>Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
