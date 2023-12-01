import React from "react";
import hero from "../../assets/hero-img.png";
import "./Hero.css";
function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <img src={hero} alt="hero" />
      </div>
    </div>
  );
}

export default Hero;
