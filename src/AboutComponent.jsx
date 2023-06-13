import React from "react";
import aboutImage from "./assets/batmanLogo.png";
import "./AboutComponent.css";

const AboutPage = () => {
  return (
    <div className="container">
      <h1>About Me!</h1>
      <h2>The Batman!</h2>
      <img className="profile-image" src={aboutImage} alt="About Us" />
      <p className="resume">
        "Criminals are a superstitious cowardly lot. So my disguise must be able
        to strike terror into their hearts. I must be a creature of the night,
        black, terrible... a . a... a bat! That's it! It's an omen. I shall
        become a bat!" ― Bruce Wayne
      </p>
    </div>
  );
};

export default AboutPage;
