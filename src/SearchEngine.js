import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      city: response.city,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.url,
      description: response.data.condition.description,
      date: new Date(response.data.time * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "c945b1b3a38a7ed39dtf309fbc9oc934";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit} className="Weather">
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city..."
            onChange={updateCity}
            className="form-control"
          />
        </div>
        <div className="col-3">
          <button type="Submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div className="Weather">
        {form}
        <WeatherInfo />
        <ul>
          <li>
            <FormattedDate date={weather.date} />
          </li>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li className="text-capitalize">
            Description: {weather.description}
          </li>
          <li>Humidity: {weather.humidity} %</li>
          <li>Wind: {Math.round(weather.wind)} km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
