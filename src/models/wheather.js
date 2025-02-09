// src/Weather.js

import React, { useState } from 'react';
import { fetchCurrentWeather, fetchHistoricalWeather } from '../services/weatheservices';
import { Line } from 'react-chartjs-2';

const Weather = () => {
  const [city, setCity] = useState('');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [historicalData, setHistoricalData] = useState([]);

  const handleSearch = async () => {
    try {
      const weatherData = await fetchCurrentWeather(city);
      setCurrentWeather(weatherData);

      // For historical data, obtain the latitude and longitude
      const { lat, lon } = weatherData.coord;

      // Fetch historical weather data for the past week (example)
      const end = Math.floor(Date.now() / 1000);
      const start = end - 7 * 24 * 60 * 60; // 7 days ago

      const historicalWeather = await fetchHistoricalWeather(lat, lon, start, end);
      const temperatures = historicalWeather.hourly.map(hour => hour.temp); // Example of getting temperatures
      const labels = historicalWeather.hourly.map((_, index) => new Date(end - index * 3600 * 1000).toLocaleString());

      // Prepare data for the chart
      setHistoricalData({
        labels,
        datasets: [
          {
            label: 'Temperature (°C)',
            data: temperatures,
            borderColor: 'blue',
            borderWidth: 2,
            fill: false,
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {currentWeather && (
        <div>
          <h2>Current Weather in {currentWeather.name}</h2>
          <p>Temperature: {currentWeather.main.temp} °C</p>
          <p>Weather: {currentWeather.weather[0].description}</p>
        </div>
      )}

      {historicalData.length > 0 && (
        <div>
          <h2>Historical Weather Data</h2>
          <Line data={historicalData} />
        </div>
      )}
    </div>
  );
};

export default Weather;
