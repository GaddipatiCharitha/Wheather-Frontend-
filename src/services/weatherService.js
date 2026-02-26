const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE = "https://api.openweathermap.org/data/2.5";

export const getWeatherByCity = async (city) => {
  const res = await fetch(`${BASE}/weather?q=${city}&units=metric&appid=${API_KEY}`);
  if (!res.ok) throw new Error();
  return res.json();
};

export const getWeatherByCoords = async (lat, lon) => {
  const res = await fetch(`${BASE}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
  if (!res.ok) throw new Error();
  return res.json();
};

export const getFiveDayForecast = async (lat, lon) => {
  const res = await fetch(`${BASE}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
  const data = await res.json();
  return data.list.filter(item => item.dt_txt.includes("12:00:00"));
};