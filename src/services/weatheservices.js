// src/services/weatherService.js

import axios from 'axios';

const API_KEY = '99728282e723f57cfad9828d43961d0c'; // Replace with your OpenWeatherMap API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchCurrentWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric', // You can choose 'imperial' for Fahrenheit
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchHistoricalWeather = async (lat, lon, start, end) => {
  try {
    const response = await axios.get(`${BASE_URL}/onecall/timemachine`, {
      params: {
        lat,
        lon,
        dt: start,
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
