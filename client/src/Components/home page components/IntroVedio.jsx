import React from "react";
import video from "../../assets/intro.mp4";

function IntroVedio() {
  return (
    <video autoPlay muted loop className="video">
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default IntroVedio;
