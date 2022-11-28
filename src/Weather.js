import axios from "axios";
import React, { useState } from "react";
import "./App.css";

export default function Weather(props) {
  let [temp, setTemp] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [desciption, setDesciption] = useState(null);

  function showTemp(response) {
    setTemp(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setDesciption(response.data.weather[0].description);
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityWeather}&appid=3ef05a16171b60ea065a0ce29b7252a6&units=metric`;
  axios.get(url).then(showTemp);

  if (temp) {
    return (
      <div>
        <ul className="weaherList">
          <li>Temperature: {Math.round(temp)}°C</li>
          <li>Description: {desciption}</li>
          <li>Humidity: {Math.round(humidity)}</li>
          <li>Wind: {Math.round(wind)}</li>
        </ul>
      </div>
    );
  } else {
    return <h1> Loading...</h1>;
  }
}
