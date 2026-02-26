import React from "react";

export default function Forecast({ data }) {
  return (
    <div className="forecast">
      {data.map(day => (
        <div key={day.dt} className="card small">
          <p>{new Date(day.dt_txt).toDateString()}</p>
          <p>{day.weather[0].main}</p>
          <p>{Math.round(day.main.temp)}°C</p>
        </div>
      ))}
    </div>
  );
}