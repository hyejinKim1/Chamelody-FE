import React from 'react';
import styled from "styled-components";
import Button from '../utils/Button';
import { ChamelodyImage } from '../utils/ImageLogo';

export default function HomeSection() {
  return (
    <HomeMain>
      <HomeTitle>
        Change your <BorderHighLight>&nbsp;&nbsp;mood&nbsp;&nbsp;</BorderHighLight> <br />
        with a -
        <LogoImage />
        &nbsp;<br />
        <BackHighLight>&nbsp;&nbsp;#Chamelody&nbsp;&nbsp;</BackHighLight> playlist
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
  line-height: 2;
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
  border-radius: 5vmin;
  border: 0.4vmin solid white;
  padding-bottom: 1vmin;
`

export const BackHighLight = styled.span`
  border-radius: 5vmin;
  background-color: white;
  padding-bottom: 1vmin;
  color: ${props => props.color || "#1ED760"};
`

const LogoImage = styled(ChamelodyImage)`
  margin-bottom: -2vw;
`
