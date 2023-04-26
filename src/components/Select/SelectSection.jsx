import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import EmotionSection from './EmotionSection'
import styled from "styled-components";
import SelectedEmotion from './SelectedEmotion';

import { HomeMain, HomeTitle, HomeExplain, HomeSubTitle, BorderHighLight} from '../Home/HomeSection.jsx'

export default function SelectSection() {
  const [current, setCurrent] = useState('your current mood');
  const [purpose, setPurpose] = useState('the mood you want to be');
  const [explain, setExplain] = useState('1. Select your current mood from the emoji below.');

  const [currentXVisible, setCurrentXVisible] = useState(false);
  const [purposeXVisible, setPurposeXVisible] = useState(false);

  const [currentBlink, setCurrentBlink] = useState(true);
  const [purposeBlink, setPurposeBlink] = useState(false);

  const [showBtn, setShowBtn] = useState(false);

  const [currentSearch, setCurrentSearch] = useState("0");
  const [purposeSearch, setPurposeSearch] = useState("0");

  const [currentX, setCurrentX] = useState(false);
  const [purposeX, setPurposeX] = useState(false);

  const [accessToken, setAccessToken] = useState();

  useEffect(() => {
    // URL 파라미터에서 access_token을 가져오기
    const params = new URLSearchParams(window.location.hash.substring(1));

    const token = params.get('access_token');

    // access_token이 있는 경우에만 설정하기

    if (token) {
      const expirationDate = new Date().getTime() + (60*60*1000)
      sessionStorage.setItem('accessToken',JSON.stringify({token:token, expiration: expirationDate }));
      window.location.hash = '';
      setAccessToken(token);
    }else{
      const accessData = sessionStorage.getItem('accessToken');
      if(!accessData){
        window.location.href = "http://localhost:3000";
        alert("다시 로그인해주세요.");
      }
      else{
        const loginData = JSON.parse(accessData);
        if( new Date().getTime() > loginData.expiration ){
        sessionStorage.removeItem('accessToken');
        window.location.href = "http://localhost:3000";
        alert("다시 로그인해주세요.");
        }else{
          setAccessToken(loginData.token);
        }
      }
    }

  },[]);

  const EmojiClick = (e) => {
    e.preventDefault();
    if(current === 'your current mood'){
      setCurrent(e.target.id);
      setCurrentXVisible(true);
      sessionStorage.setItem('current',e.target.id);
      setCurrentBlink(false);
      setCurrentX(false);

      if(purpose === 'the mood you want to be'){
        setPurposeBlink(true);
      }
    }else{
      setPurpose(e.target.id);
      setPurposeXVisible(true);
      sessionStorage.setItem('purpose',e.target.id);
      setPurposeBlink(false);
      setPurposeX(false);
    } 
  };

  const CurrentxClick = (e) => {
    e.preventDefault();
    setCurrent('your current mood');
    setCurrentXVisible(false);
    setCurrentSearch("0");
    setCurrentX(true);
    sessionStorage.removeItem('current');

    setCurrentBlink(true);
    if(purposeBlink === true){
      setPurposeBlink(false);
    }
  };

  const PurposexClick = (e) => {
    e.preventDefault();
    setPurpose('the mood you want to be');
    setPurposeXVisible(false);
    setPurposeSearch("0");
    setPurposeX(true);
    sessionStorage.removeItem('purpose');

    if(currentBlink === false){
      setPurposeBlink(true);
    }
  };

  const currentSearchClick = () => {
    if(currentSearch === "0"){
      setCurrentSearch("29vh");
    }else{
      setCurrentSearch("0");
    }
  }

  const purposeSearchClick = () => {
    if(purposeSearch === "0"){
      setPurposeSearch("29vh");
    }else{
      setPurposeSearch("0");
    }
  }

  useEffect(() => {
    if(currentBlink === true){
      setExplain('1. Select your current mood from the emoji below.');
      setShowBtn(false);
    }else if(purposeBlink === true){
      setExplain('2. Select the mood you want to be on the emoji below.');
      setShowBtn(false);
    }else{
      setExplain('3. Press the play button');
      setShowBtn(true);
    }
  },[currentBlink, purposeBlink]);

  return (
    <React.Fragment>
      <HomeMain>
        <HomeTitle>
            I want to <BorderHighLight>Chamelody</BorderHighLight><br />
            <Vertical>
            from 
            </Vertical>
            <Vertical>
            <SelectedEmotion blink={currentBlink} emotion = {current} visible={currentXVisible} search={currentSearch} token={accessToken} searchClick={currentSearchClick} xClick={CurrentxClick} xDelete={currentX}></SelectedEmotion>
            </Vertical>
            <Vertical>
            to 
            </Vertical>
            <Vertical>
            <SelectedEmotion blink={purposeBlink} emotion = {purpose} visible={purposeXVisible} search={purposeSearch} token={accessToken} searchClick={purposeSearchClick} xClick={PurposexClick} xDelete={purposeX}></SelectedEmotion>
            </Vertical>
        </HomeTitle>
        <HomeExplain>
          <HomeSubTitle>
              Chamelody guides you by drawing an emotion map.<br />
              Shall we follow the playlist created by finding a path between the two emotions of your choice? <br />
              If you press the <PlayImage/> ,  you can find the playlist.
          </HomeSubTitle>
          <Link to="/play">
            <PlayBtn visible={showBtn}/>
          </Link>
        </HomeExplain>
        <InstructionDiv>
          <Instruction>{explain}</Instruction>
        </InstructionDiv>
      </HomeMain>
      <EmotionSection onClick={EmojiClick}></EmotionSection>
    </React.Fragment>
  )
}

const Vertical = styled.div`
  display: inline-block; 
  vertical-align: top;
  margin-top: 30px;
`

const PlayImage = styled.img.attrs({
  src: `img/button/PlayButton.svg`,
  alt: "play",
})`
  width: 7vmin;
  margin-bottom: -0.9vmin;
`

const Instruction = styled.p`
  font-size: 2.5vmin;
`

const InstructionDiv = styled.div`
  position: absolute;
  bottom:1vh;
`
const PlayBtn = styled.img.attrs({
  src: `img/button/PlayButton.svg`,
  alt: "play",
})`
  width: 17vmin;
  cursor: pointer;
  display: ${({visible}) => {
    if (visible) {
      return "flex";
    }
    return "none";
  }};
`