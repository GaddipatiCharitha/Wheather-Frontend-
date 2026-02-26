import { useState } from "react";
import {
  getWeatherByCity,
  getWeatherByCoords,
  getFiveDayForecast,
} from "../services/weatherService";

export default function useWeather() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchByCity = async (city) => {
    try {
      setLoading(true);
      setError("");
      const current = await getWeatherByCity(city);
      const forecastData = await getFiveDayForecast(
        current.coord.lat,
        current.coord.lon
      );
      setWeather(current);
      setForecast(forecastData);
    } catch {
      setError("Location not found.");
    } finally {
      setLoading(false);
    }
  };

  const fetchByCoords = async (lat, lon) => {
    try {
      setLoading(true);
      setError("");
      const current = await getWeatherByCoords(lat, lon);
      const forecastData = await getFiveDayForecast(lat, lon);
      setWeather(current);
      setForecast(forecastData);
    } catch {
      setError("Unable to fetch location weather.");
    } finally {
      setLoading(false);
    }
  };

  return { weather, forecast, loading, error, fetchByCity, fetchByCoords };
}