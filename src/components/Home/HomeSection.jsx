import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Button from '../utils/Button';
import { ChamelodyImage } from '../utils/ImageLogo';
import Login from './Login';
import Grid from '@mui/material/Grid';

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
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} lg={9}>
        <HomeSubTitle>
          Chamelody brings you a new experience.<br />
          Click the emoji that matches your current mood and the mood you want to be. <br />
          If you listen to the playlist created by Chamelody, you can feel the mood you want.
        </HomeSubTitle>   
        </Grid>
        <Grid item xs={12} sm={12} lg={3}>
          <LoginButton>
          {accessToken === null ? <Login /> : <Button link="/select" alt="start" src="img/button/start_button.svg" />}
          </LoginButton>
        </Grid>
      </Grid>
      </HomeExplain>
    </HomeMain>
  )
}


const HomeMain = styled.div`
  min-height: 58vh;
  display: flex;
  flex-direction: column;
  color: white;
  padding-left: 7vw;
  padding-right: 5vw;
  position: relative;
`;

const HomeTitle = styled.h1`
  font-size: calc(2.5vh + 1.7vw);
  z-index: 200;
  white-space: nowrap;
`

const HomeExplain = styled.div`
  bottom: calc(6vh + 1vw);
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 1.5;
  z-index: 100;
  margin-top: 2vh;
`

const HomeSubTitle = styled.div`
  font-size: calc(1.5vh + 0.3vw);
  font-weight: 350;
`

const BorderHighLight = styled.span`
  border-radius: 6vh;
  border: 0.4vh solid white;
  padding-bottom: 1vh;
  padding-right: 2vh;
  padding-left: 2vh;
`
const BackHighLight = styled.div`
  display: inline-block;
  border-radius: 5vh;
  background-color: white;
  padding-bottom: 1vh;
  padding-right:2vh;
  padding-left: 2vh;
  margin-top: calc(1.2vh + 1.5vw);
  color: ${props => props.color || "#1ED760"};
`

const LogoImage = styled(ChamelodyImage)`
  margin-bottom: calc(-1vh - 1.5vw);
  margin-left: 0.4vh;
`

const LoginButton = styled.div`
  margin: 3vh 1vh 0 1vh;
  text-align: right;
`

export {HomeMain , HomeTitle , HomeExplain ,HomeSubTitle , BorderHighLight ,BackHighLight}
