import React, { useState } from "react";
import Weather from "./Weather";

import "./styles.css";

export default function Search() {
  let [city, setCity] = useState(true);
  let [submitCity, setSubmitCity] = useState(true);

  function handleSubmit(event) {
    setSubmitCity(city);
    event.preventDefault();
    if (true) {
      <Weather />;
    } else {
      alert("Type city");
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <h1> Weather App </h1>
      <form>
        <br />
        <input type="text" placeholder="Type a city" onChange={updateCity} />
        <input type="submit" value="Search" onClick={handleSubmit} />
      </form>
      {<Weather cityWeather={submitCity} />}

      <small>
        <a href="https://github.com/MariiaAmbr/Project_Weather_app">
          open-source on GitHub
        </a>{" "}
        and{" "}
        <a class="net" href="https://app.netlify.com/teams/mariiaambr/overview">
          hosted on Netlify
        </a>
      </small>
    </div>
  );
}
