import React from "react";
import "../StyleSheets/hostcities.css";
import nairobi from "../assets/Nairobi.mp4";
import kisumu from "../assets/Kisumu.mp4";
import mombasa from "../assets/Mombasa.mp4";
import dar from "../assets/Dar.mp4";

function HostCities() {
  return (
    <div className="host-container">
      <h1 className="countery-head">KENYA</h1>

      <div className="fxc">
        <div className="video-card">
          <h1 className="country-name">NAIROBI</h1>
          <video autoPlay muted loop className="card-video">
            <source src={nairobi} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video-card">
          <h1 className="country-name">KISUMU</h1>
          <video autoPlay muted loop className="card-video">
            <source src={kisumu} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video-card">
          <h1 className="country-name">MOMBASA</h1>
          <video autoPlay muted loop className="card-video">
            <source src={mombasa} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <h1 className="countery-head">TANZANIA</h1>
      <div className="fxc">
        <div className="video-card">
          <h1 className="country-name">DAR ES SALAM</h1>
          <video autoPlay muted loop className="card-video">
            <source src={dar} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <h1 className="countery-head">UGANDA</h1>
      <div className="fxc">
        <div className="video-card">
          <h1 className="country-name">DAR ES SALAM</h1>
          <video autoPlay muted loop className="card-video">
            <source src={dar} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default HostCities;
