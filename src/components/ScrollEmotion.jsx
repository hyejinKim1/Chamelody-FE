import React from 'react';
import Emoji from './utils/Emoji'
import '../css/style.css';

function ScrollEmotion(){
  return(
    <div className="emotion-scroll">
      <div className="scroll-parent">
        <div className="scroll-element primary">
          <Emoji emotion = "Anger" src = "img/emoji/Anger.svg" size = "10%"/>
          <Emoji emotion = "Fear" src = "img/emoji/Fear.svg" size = "7%"/>
          <Emoji emotion = "Lonely" src = "img/emoji/LonelyText.svg" size = "10%" />
          <Emoji emotion = "Happiness" src = "img/emoji/Happiness.svg" size = "7%"/>
          <Emoji emotion = "Love" src = "img/emoji/Love.svg" size = "10%"/>
          <Emoji emotion = "Normal" src = "img/emoji/Normal.svg" size = "5%"/>
          <Emoji emotion = "FeelTouch" src = "img/emoji/FeelTouchText.svg" size = "10%" />
          <Emoji emotion = "Sadness" src = "img/emoji/Sadness.svg" size = "8%"/>
          <Emoji emotion = "Relaxation" src = "img/emoji/Relaxation.svg" size = "6%"/>
          <Emoji emotion = "Nervous" src = "img/emoji/NervousText.svg" size = "10%" />
        </div>
        <div className = "scroll-element secondary">
        <Emoji emotion = "Anger" src = "img/emoji/Anger.svg" size = "10%"/>
          <Emoji emotion = "Fear" src = "img/emoji/Fear.svg" size = "7%"/>
          <Emoji emotion = "Lonely" src = "img/emoji/LonelyText.svg" size = "10%" />
          <Emoji emotion = "Happiness" src = "img/emoji/Happiness.svg" size = "7%"/>
          <Emoji emotion = "Love" src = "img/emoji/Love.svg" size = "10%"/>
          <Emoji emotion = "Normal" src = "img/emoji/Normal.svg" size = "5%"/>
          <Emoji emotion = "FeelTouch" src = "img/emoji/FeelTouchText.svg" size = "10%" />
          <Emoji emotion = "Sadness" src = "img/emoji/Sadness.svg" size = "8%"/>
          <Emoji emotion = "Relaxation" src = "img/emoji/Relaxation.svg" size = "6%"/>
          <Emoji emotion = "Nervous" src = "img/emoji/NervousText.svg" size = "10%" />
        </div>
      </div>
      
    </div>
  )
}

export default ScrollEmotion;