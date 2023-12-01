import React from "react";
import Hero from "./hero/Hero";
import Navbar from "./navbar/Navbar";
import CardComponents from "./cardComponents/CardComponents";
function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <CardComponents />
    </div>
  );
}

export default Home;
