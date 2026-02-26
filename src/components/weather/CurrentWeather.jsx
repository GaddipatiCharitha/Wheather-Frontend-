import React from "react";

export default function CurrentWeather({ data }) {
  return (
    <div className="card">
      <h2>{data.name}</h2>
      <h3>{Math.round(data.main.temp)}°C</h3>
      <p>{data.weather[0].description}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind: {data.wind.speed} m/s</p>
    </div>
  );
}