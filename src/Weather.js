import React from "react";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    date: "Sunday, August 16 2020",
    time: "7:00 PM",
    temperature: 28,
    description: "Mostly Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 20,
    wind: 30,
  };
  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>{weatherData.city}</h1>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>{weatherData.date}</li>
            <li>{weatherData.time}</li>
          </ul>
          <div className="todays-temperature">
            <strong>{weatherData.temperature}</strong>
            <span className="units">
              <a href="/" className="active">
                °C
              </a>{" "}
              | <a href="/">°F</a>
            </span>
          </div>
          <span className="description">{weatherData.description}</span>
        </div>
        <div className="col-6">
          <img
            src={weatherData.imgUrl}
            className="icon"
            alt={weatherData.description}
          />
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} Km/H</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
