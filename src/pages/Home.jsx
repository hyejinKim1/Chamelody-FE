import React from "react";
import HomeSection from "../components/Home/HomeSection";
import ScrollEmotion from "../components/Home/ScrollEmotion";
import styled, { keyframes } from "styled-components";

const MoveGrad = keyframes`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`

const HomeWrapper = styled.div`
  background: linear-gradient(50deg, #4e86ee, #1ED760, #bc67ff);
  background-size: 200% 200%;
  animation: ${MoveGrad} 5s ease infinite;
`

function Home() {
  return (
    <HomeWrapper>
      <div style={{ height: "8vh" }}></div>
      <HomeSection />
      <ScrollEmotion />
    </HomeWrapper>
  );
}

export default Home;
