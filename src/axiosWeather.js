import axios from "axios";

const API_URL =
  "https://api.openweathermap.org/data/2.5/onecall?lat=37.9795&lon=23.7162&units=metric&appid=";
const API_KEY = "0e9fe6c8eb5026d45112e979e0e69d0b";
const URL_FORECAST = `${API_URL}${API_KEY}`;

const instance = axios.create({
  baseURL: URL_FORECAST,
});

export default instance;
