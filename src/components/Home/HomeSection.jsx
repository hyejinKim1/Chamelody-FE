import React from 'react';
import styled from "styled-components";
import Button from '../utils/Button';
import { ChamelodyImage } from '../utils/ImageLogo';

export default function HomeSection() {
  return (
    <HomeMain>
      <HomeTitle>
        Change your <BorderHighLight>mood</BorderHighLight> <br />
        with a -
        <LogoImage />
        <br />
        <BackHighLight>#Chamelody</BackHighLight> playlist
      </HomeTitle>
      <HomeExplain>
        <HomeSubTitle>
          Chamelody brings you a new experience.<br />
          Click the emoji that matches your current mood and the mood you want to be. <br />
          If you listen to the playlist created by Chamelody, you can feel the mood you want
        </HomeSubTitle>
        <Button link="/select" alt="start" src="img/button/start_button.svg" />
      </HomeExplain>
    </HomeMain>
  )
}


export const HomeMain = styled.div`
  min-height: 58vh;
  display: flex;
  flex-direction: column;
  color: white;
  padding-left:7vw;
  padding-right: 5%;
  position: relative;
`;

export const HomeTitle = styled.h1`
  font-size: 2.9vw;
`

export const HomeExplain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 1.6;
`

export const HomeSubTitle = styled.p`
  font-size: 2vmin;
`

export const BorderHighLight = styled.span`
  border-radius: 2.5vw;
  border: 0.4vmin solid white;
  padding-bottom: 0.5vw;
  padding-right: 1vw;
  padding-left: 1vw;
`

export const BackHighLight = styled.div`
  display: inline-block;
  border-radius: 2.5vw;
  background-color: white;
  padding-bottom: 0.3vw;
  padding-right: 1.3vw;
  padding-left: 1.3vw;
  margin-top: 1.7vw;
  color: ${props => props.color || "#1ED760"};
`

const LogoImage = styled(ChamelodyImage)`
  margin-bottom: -2vw;
`
