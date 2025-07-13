import React from "react";

export default function WeatherIcon(props) {
  return (
    <div>
      <img src={props.iconUrl} alt="Weather icon"></img>
    </div>
  );
}
