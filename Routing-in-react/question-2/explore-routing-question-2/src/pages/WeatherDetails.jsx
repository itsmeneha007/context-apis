import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const WeatherDetails = () => {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const MAPS_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    const normalizedCity = city.trim().toLowerCase();

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${normalizedCity}&appid=${API_KEY}&units=metric`
    )
      .then((res) => {
        if (!res.ok) throw new Error("City not found");
        return res.json();
      })
      .then((data) => setWeather(data))
      .catch((err) => setError(err.message));
  }, [city]);

  if (error) return <p style={{ padding: '1rem' }}>{error}</p>;
  if (!weather) return <p style={{ padding: '1rem' }}>Loading...</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Weather in {weather.name}</h2>
      <p><strong>Temperature:</strong> {weather.main.temp} °C</p>
      <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
      <p><strong>Condition:</strong> {weather.weather[0].description}</p>

      <iframe
        title="map"
        width="100%"
        height="300"
        style={{ marginTop: '1rem' }}
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?key=${MAPS_KEY}&q=${weather.name}`}
      ></iframe>
    </div>
  );
};

export default WeatherDetails;


