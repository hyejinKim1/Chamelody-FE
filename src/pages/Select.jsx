import React from "react";
import SelectSection from "../components/Select/SelectSection";
import styled, { keyframes } from "styled-components";

function Select() {
  const MoveGrad = keyframes`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`

  const SelectWrapper = styled.div`
  background: linear-gradient(50deg, #4e86ee, #1ED760, #bc67ff);
	background-size: 200% 200%;
	animation: ${MoveGrad} 5s ease infinite;
  `

  return (
    <SelectWrapper>
      <div style={{ height: "8vh" }}></div>
      <SelectSection />
    </SelectWrapper>
  );
}

export default Select;
