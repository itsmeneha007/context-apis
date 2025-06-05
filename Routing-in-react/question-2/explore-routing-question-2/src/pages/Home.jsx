
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim() !== '') {
      navigate(`/weather/${city.trim()}`);
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Search Weather by City</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ padding: '0.5rem', marginRight: '1rem' }}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Home;






