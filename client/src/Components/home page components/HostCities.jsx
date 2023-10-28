// import React from "react";
import "../../StyleSheets/cities.css";

function HostCities() {
  return (
    <div className="cities-container">
      <h1 className="cs-h">HOST CITIES</h1>
      <div className="city-cards">
        <div className="city-card">
          <h1>NAIROBI</h1>
        </div>
        <div className="city-card">
          <h1>MOMBASA</h1>{" "}
        </div>
        <div className="city-card">
          <h1>DODOMA</h1>
        </div>
        <div className="city-card">
          <h1>KAMPALA</h1>
        </div>
      </div>
    </div>
  );
}

export default HostCities;
