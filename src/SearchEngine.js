import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  let [city, setCity] = useState(" ");
  let [submittedCity, setSubmittedCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedCity(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let [temperature, setTemperature] = useState(null);

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }

  let [humidity, setHumidity] = useState(null);

  function showHumidity(response) {
    setHumidity(response.data.main.humidity);
  }

  let [description, setDescription] = useState(null);

  function showDescription(response) {
    setDescription(response.data.weather[0].description);
  }

  let [wind, setWind] = useState(null);

  function showWind(response) {
    setWind(response.data.wind.speed);
  }

  let [iconID, setIconID] = useState(null);

  function showIconID(response) {
    setIconID(response.data.weather[0].icon);
  }

  let [icon, setIcon] = useState(null);

  function showIcon(response) {
    setIcon(`http://openweathermap.org/img/wn/${iconID}@2x.png`);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedCity(city);

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=597c40c39084687093b091cd48b366f8`
      )
      .then(showTemperature)
      .then(showHumidity)
      .then(showDescription)
      .then(showWind)
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      {submittedCity && (
        <ul>
          <li>
            The temperature in {submittedCity} is {Math.round(temperature)}°C
          </li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {Math.round(wind)} km/h</li>
          <li>
            <img src={icon} />{" "}
          </li>
        </ul>
      )}
    </div>
  );
}
