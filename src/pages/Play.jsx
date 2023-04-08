import React from "react";
import PlaySection from "../components/Play/PlaySection";
import styled, { keyframes } from "styled-components";

function Play() {
  const MoveGrad = keyframes`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`

  const PlayWrapper = styled.div`
    background: linear-gradient(140deg,  #ffe374, #ff9b4f,#ff6c8e,#fc527f );
    background-size: 145% 145%;
    animation: ${MoveGrad} 5s ease infinite;
  `


  return (
    <PlayWrapper>
      <div style={{ height: "8vh" }}></div>
      <PlaySection />
    </PlayWrapper>
  );
}

export default Play;