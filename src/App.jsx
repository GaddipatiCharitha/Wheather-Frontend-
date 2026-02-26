import React from "react";
import useWeather from "./hooks/useWeather";
import SearchBar from "./components/weather/SearchBar";
import CurrentWeather from "./components/weather/CurrentWeather";
import Forecast from "./components/weather/Forecast";
import ErrorMessage from "./components/common/ErrorMessage";
import Loader from "./components/common/Loader";

export default function App() {
  const {
    weather,
    forecast,
    loading,
    error,
    fetchByCity,
    fetchByCoords,
  } = useWeather();

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => fetchByCoords(pos.coords.latitude, pos.coords.longitude),
      () => alert("Location permission denied")
    );
  };

  return (
    <div className="container">
      <h1>Advanced Weather App</h1>

      <SearchBar onSearch={fetchByCity} onLocation={handleLocation} />

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}

      {weather && <CurrentWeather data={weather} />}
      {forecast.length > 0 && <Forecast data={forecast} />}
    </div>
  );
}