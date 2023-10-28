import { useEffect, useState } from "react";
import "../StyleSheets/introLoader.css";
import cup from "../assets/afcon_cup.png";

function IntroLoader() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  return (
    <div
      className={isLoading ? "loading " : "loaded loading"}
      style={isLoading ? { pointerEvents: "all" } : { pointerEvents: "none" }}
    >
      <img
        src={cup}
        alt=""
        style={!isLoading ? { display: "none" } : { display: "true" }}
      />
      <div id="loader-wrapper">
        <div id="loader"></div>

        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>

      <div id="content"></div>
    </div>
  );
}

export default IntroLoader;
