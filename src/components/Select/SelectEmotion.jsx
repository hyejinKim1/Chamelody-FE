import React from 'react';
import Emoji from '../utils/Emoji'
import '../../css/style.css';
import $ from 'jquery';

function SelectEmotion({onClick}){
  const rightBtnClicked = () => {
    $(".select-parent").css("transform","translate(-100vw)");
  };

  const leftBtnClicked = () => {
    $(".select-parent").css("transform","translate(0)");
  };
  return(
    <div className="emotion-select">
      <div className="select-parent">
        <div className="row slide emotion-slide1">
          <div className="left-button-div">
            <img src = "img/button/disable_left_button.svg" className="slide-button" alt= "left" style = {{width: "6vmin", opacity: "0.4"}} />
          </div>
          <div className="select-element">
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
          <div className='right-button-div'>
            <img 
            src = "img/button/right_button.svg" 
            className="slide-button cursor" 
            alt= "right" 
            style = {{width: "6vmin"}}
            onClick = {rightBtnClicked}/>
          </div>
        </div>

        <div className="slide emotion-slide2">
          <div className="left-button-div">
            <img 
            src = "img/button/left_button.svg" 
            className="slide-button cursor" 
            alt= "left" 
            style = {{width: "6vmin"}}
            onClick = {leftBtnClicked}/>
          </div>
          <div className="select-element">
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
          <div className='right-button-div'>
            <img src = "img/button/disable_right_button.svg" className="slide-button" alt= "right" style = {{width: "6vmin", opacity: "0.4"}}/>
          </div>
        </div>        
      </div>
    </div>
  )
}

export default SelectEmotion;