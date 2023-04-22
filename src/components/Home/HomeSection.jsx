import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Button from '../utils/Button';
import { ChamelodyImage } from '../utils/ImageLogo';
import Login from './Login';

export default function HomeSection() {

  const [ accessToken, setAccessToken ] = useState(null);

  useEffect(() => {
    const accessData = sessionStorage.getItem('accessToken');

    if( accessData !== null ){
      const loginData = JSON.parse(accessData);
      if( new Date().getTime() > loginData.expiration ){
        sessionStorage.removeItem('accessToken');
      }else{
        setAccessToken(loginData.token);
      }
    }
  },[]);

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
        {accessToken === null ? <Login /> : <Button link="/select" alt="start" src="img/button/start_button.svg" />}
      </HomeExplain>
    </HomeMain>
  )
}


const HomeMain = styled.div`
  min-height: 58vh;
  display: flex;
  flex-direction: column;
  color: white;
  padding-left:7vw;
  padding-right: 5%;
  position: relative;
`;

const HomeTitle = styled.h1`
  font-size: 2.9vw;
  z-index: 200;
`

const HomeExplain = styled.div`
  position: absolute;
  bottom: 9vh;
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 1.6;
  z-index: 100;
`

const HomeSubTitle = styled.p`
  font-size: 2vmin;
`

const BorderHighLight = styled.span`
  border-radius: 2.5vw;
  border: 0.4vmin solid white;
  padding-bottom: 0.5vw;
  padding-right: 1vw;
  padding-left: 1vw;
`
const BackHighLight = styled.div`
  display: inline-block;
  border-radius: 2.5vw;
  background-color: white;
  padding-bottom: 0.3vw;
  padding-right: 1.3vw;
  padding-left: 1.3vw;
  margin-top: 1.8vw;
  color: ${props => props.color || "#1ED760"};
`

const LogoImage = styled(ChamelodyImage)`
  margin-bottom: -2vw;
`

export {HomeMain , HomeTitle , HomeExplain ,HomeSubTitle , BorderHighLight ,BackHighLight}
