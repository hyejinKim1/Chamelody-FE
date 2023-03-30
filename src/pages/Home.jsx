import React from "react";
import HomeSection from "../components/Home/HomeSection";
import ScrollEmotion from "../components/Home/ScrollEmotion";

function Home() {
  return (
    <div className="Home-wrapper">
      <div style={{ height: "8vh" }}></div>
      <HomeSection />
      <ScrollEmotion />
    </div>
  );
}

export default Home;
