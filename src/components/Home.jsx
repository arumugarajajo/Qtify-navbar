import React from "react";
import Hero from "./hero/Hero";
import Navbar from "./navbar/Navbar";
import Card from "./Card/Card";
function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}

export default Home;
