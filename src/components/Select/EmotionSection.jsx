import React from 'react';
import Emoji from '../utils/Emoji'
import styled from "styled-components";

export default function SelectEmotion({onClick}){

  const [slide, setSlide] = React.useState('1');

  const rightBtnClicked = () => {
    setSlide('2');
  };

  const leftBtnClicked = () => {
    setSlide('1');
  };

  return(
    <SelectWrapper>
      <SlideWrapper slide={slide}>
        <Slide>
          <LeftDisableBtn/>
          <div>
            <Emoji onClick = {onClick} emotion = "Anger" src = "img/emoji/Anger.svg" size = "10%"/>
            <Emoji onClick = {onClick} emotion = "Fear" src = "img/emoji/Fear.svg" size = "7%"/>
            <Emoji onClick = {onClick} emotion = "Lonely" src = "img/emoji/LonelyText.svg" size = "10%" />
            <Emoji onClick = {onClick} emotion = "Happiness" src = "img/emoji/Happiness.svg" size = "7%"/>
            <Emoji onClick = {onClick} emotion = "Tired" src = "img/emoji/TiredText.svg" size = "8%"/>
            <Emoji onClick = {onClick} emotion = "Love" src = "img/emoji/Love.svg" size = "10%"/>
            <Emoji onClick = {onClick} emotion = "Normal" src = "img/emoji/Normal.svg" size = "7%"/>
            <Emoji onClick = {onClick} emotion = "FeelTouch" src = "img/emoji/FeelTouchText.svg" size = "10%" />
            
            <Emoji onClick = {onClick} emotion = "Shame" src = "img/emoji/Shame.svg" size = "9%"/>
            <Emoji onClick = {onClick} emotion = "Nervous" src = "img/emoji/NervousText.svg" size = "10%" />
          </div>
          <RightBtn onClick = {rightBtnClicked}/>
        </Slide>
        <Slide>
          <LeftBtn onClick = {leftBtnClicked}/>
          <div>
            <Emoji onClick = {onClick} emotion = "Lonely" src = "img/emoji/Lonely.svg" size = "10%" />
            <Emoji onClick = {onClick} emotion = "Relaxation" src = "img/emoji/Relaxation.svg" size = "7%"/>
            <Emoji onClick = {onClick} emotion = "Pride" src = "img/emoji/PrideText.svg" size = "10%"/>
            <Emoji onClick = {onClick} emotion = "Sadness" src = "img/emoji/Sadness.svg" size = "10%"/>
            <Emoji onClick = {onClick} emotion = "Fear" src = "img/emoji/FearText.svg" size = "7%"/>
            
            <Emoji onClick = {onClick} emotion = "Surprise" src = "img/emoji/Surprise.svg" size = "7%" />
            <Emoji onClick = {onClick} emotion = "Tired" src = "img/emoji/Tired.svg" size = "9%"/>
            <Emoji onClick = {onClick} emotion = "LongFor" src = "img/emoji/LongForText.svg" size = "10%"/>
            <Emoji onClick = {onClick} emotion = "Nervous" src = "img/emoji/Nervous.svg" size = "10%" />
            <Emoji onClick = {onClick} emotion = "Shame" src = "img/emoji/ShameText.svg" size = "10%" />
          </div>
          <RightDisableBtn/>
        </Slide>        
      </SlideWrapper>
    </SelectWrapper>
  )
}


const SelectWrapper = styled.div`
  opacity: 0.9;
  background-color: rgba(70, 70, 70, 0.2);
  width: 100vw;
  overflow: hidden;
  height: 34vh;
`

const SlideWrapper = styled.div`
  width:200vw;
  height:100%;
  transition: transform 0.9s;
  transform: ${({slide}) => {
    if (slide === '2') {
      return "translate(-100vw)";
    }
    return "translate(0)";
  }};
`

const Slide = styled.div`
  width:100vw;
  height:100%;
  float:left;
  text-align: center;
  display:flex;
  align-items: center;
`

const LeftDisableBtn = styled.img.attrs({
  src: `img/button/disable_left_button.svg`,
  alt: "left",
})`
  width: 6vmin;
  opacity: 0.4;
`

const LeftBtn = styled.img.attrs({
  src: `img/button/left_button.svg`,
  alt: "left",
})`
  width: 6vmin;
  cursor: pointer;
`

const RightDisableBtn = styled.img.attrs({
  src: `img/button/disable_right_button.svg`,
  alt: "right",
})`
  width: 6vmin;
  opacity: 0.4;
`

const RightBtn = styled.img.attrs({
  src: `img/button/right_button.svg`,
  alt: "right",
})`
  width: 6vmin;
  cursor: pointer;
`
