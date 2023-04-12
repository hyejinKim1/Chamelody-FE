import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import SelectEmotion from './SelectEmotion'
import SearchMusic from './SearchMusic';
import styled, { keyframes, css } from "styled-components";

import { HomeMain } from '../Home/HomeSection.jsx'
import { HomeTitle } from '../Home/HomeSection.jsx';
import { HomeExplain } from '../Home/HomeSection.jsx';
import { HomeSubTitle } from '../Home/HomeSection.jsx';
import { BorderHighLight } from '../Home/HomeSection.jsx';
import { BackHighLight } from '../Home/HomeSection.jsx';

export default function SelectSection() {
  const [current, setCurrent] = useState('your current mood');
  const [purpose, setPurpose] = useState('the mood you want to be');
  const [explain, setExplain] = useState('1. Select your current mood from the emoji below.');

  const [currentXVisible, setCurrentXVisible] = useState(false);
  const [purposeXVisible, setPurposeXVisible] = useState(false);

  const [currentBlink, setCurrentBlink] = useState(true);
  const [purposeBlink, setPurposeBlink] = useState(false);

  const [showBtn, setShowBtn] = useState(false);

  const [currentSearch, setCurrentSearch] = useState(false);
  const [purposeSearch, setPurposeSearch] = useState(false);

  const EmojiClick = (e) => {
    e.preventDefault();
    if(current === 'your current mood'){
      setCurrent(e.target.id);
      setCurrentXVisible(true);
      sessionStorage.setItem('current',e.target.id);
      setCurrentBlink(false);

      if(purpose === 'the mood you want to be'){
        setPurposeBlink(true);
      }
    }else{
      setPurpose(e.target.id);
      setPurposeXVisible(true);
      sessionStorage.setItem('purpose',e.target.id);
      setPurposeBlink(false);
    } 
  };

  const CurrentxClick = (e) => {
    e.preventDefault();
    setCurrent('your current mood');
    setCurrentXVisible(false);
    setCurrentSearch(false);
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
    setPurposeSearch(false);
    sessionStorage.removeItem('purpose');

    if(currentBlink === false){
      setPurposeBlink(true);
    }
  };

  const currentSearchClick = () => {
    if(currentSearch === false){
      setCurrentSearch(true);
    }else{
      setCurrentSearch(false);
    }
  }

  const purposeSearchClick = () => {
    if(purposeSearch === false){
      setPurposeSearch(true);
    }else{
      setPurposeSearch(false);
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
            from 
            <BlinkingBack color="black" blink={currentBlink} >
              # {current}
              <MusicBtn onClick={currentSearchClick} visible={currentXVisible}/>
              <XBtn onClick={CurrentxClick} visible={currentXVisible}>×</XBtn>
              <br/>
              <SearchMusic visible={currentSearch}></SearchMusic>
            </BlinkingBack> 
            to 
            <BlinkingBack color="black" blink={purposeBlink}>
              # {purpose}
              <MusicBtn onClick={purposeSearchClick} visible={purposeXVisible} />
              <XBtn onClick={PurposexClick} visible={purposeXVisible}>×</XBtn>
              <br/>
              <SearchMusic visible={purposeSearch}></SearchMusic>
            </BlinkingBack>
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
      <SelectEmotion onClick={EmojiClick}></SelectEmotion>
    </React.Fragment>
  )
}

const XBtn = styled.span`
  color: rgb(122, 122, 122);
  font-size:2.5vw;
  font-weight:lighter;
  line-height:100px;
  cursor: pointer;
  display: ${({visible}) => {
    if (visible) {
      return "inline";
    }
    return "none";
  }};
`

const MusicBtn = styled.img.attrs({
  src: `img/button/Music.svg`,
  alt: "search",
})`
  width: 1.5vw;
  cursor: pointer;
  margin-left: 1.5vw;
  margin-right: 0.4vw;
  display: ${({visible}) => {
    if (visible) {
      return "inline";
    }
    return "none";
  }};
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
  bottom:0;
`

const blinking = keyframes`
  0% {
    opacity:0.5;  
  }
  100% {
    opacity:1;
  }
`
  
const BlinkingBack = styled(BackHighLight)`
  margin-left: 1vw;
  margin-right: 1vw;
  ${props => props.blink ? css`animation: ${blinking} 1s ease-in-out infinite alternate;` : ''}
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