import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}°C`
    );
  }
  let apiKey = "3ef05a16171b60ea065a0ce29b7252a6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
   ${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return <Audio heigth="100" width="100" color="white" ariaLabel="loading" />;
}
