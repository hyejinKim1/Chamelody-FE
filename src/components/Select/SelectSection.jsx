import React, { useState } from 'react';
import Button from '../utils/Button'
import SelectEmotion from './SelectEmotion'
import '../../css/select.css';
import '../../css/home.css';
import $ from 'jquery';

function SelectSection() {
  const [current, setCurrent] = useState('your current mood');
  const [purpose, setPurpose] = useState('the mood you want to be');
  const [explain, setExplain] = useState('1. Select your current mood from the emoji below.');

  const EmojiClick = (e) => {
    e.preventDefault();
    if(current === 'your current mood'){
      setCurrent(e.target.id);
      $("#current-x").css("display","inline");
      sessionStorage.setItem('current',e.target.id);
      
      $("#current-back").removeClass('blinking');
      if(purpose !== 'the mood you want to be'){
        $("#play").css("display","flex");
      }else{
        $("#purpose-back").addClass('blinking');
      }
      ChangeExplain();

    }else if(current !== 'your current mood'){
      setPurpose(e.target.id);
      $("#purpose-x").css("display","inline");
      sessionStorage.setItem('purpose',e.target.id);
      
      $("#play").css("display","flex");
      $("#purpose-back").removeClass('blinking');
      ChangeExplain();
    } 
  };

  const CurrentxClick = (e) => {
    e.preventDefault();
    setCurrent('your current mood');
    $("#current-x").css("display","none");
    sessionStorage.removeItem('current');
    
    $("#play").css("display","none");
    $("#current-back").addClass('blinking');
    if($("#purpose-back").hasClass("blinking")){
      $("#purpose-back").removeClass('blinking');
    }
    ChangeExplain();
  };

  const PurposexClick = (e) => {
    e.preventDefault();
    setPurpose('the mood you want to be');
    $("#purpose-x").css("display","none");
    sessionStorage.removeItem('purpose');
    
    $("#play").css("display","none");
    if($("#current-back").hasClass("blinking") === false){
      $("#purpose-back").addClass('blinking');
    }

    ChangeExplain();
  };

  // const ChangeBlinking = (e) => {
  //   if(current === 'your current mood'){
  //     $("#current-back").addClass('blinking');
  //     $("#purpose-back").removeClass('blinking');
  //   }else if(purpose === 'the mood you want to be'){
  //     $("#purpose-back").addClass('blinking');
  //     $("#current-back").removeClass('blinking');
  //   }else{
  //     $("#current-back").removeClass('blinking');
  //     $("#purpose-back").removeClass('blinking');
  //     $("#play").css("display","flex");
  //   }
  // }

  const ChangeExplain = (e) => {
    if($("#current-back").hasClass("blinking")){
      setExplain('1. Select your current mood from the emoji below.');
    }else if($("#purpose-back").hasClass("blinking")){
      setExplain('2. Select the mood you want to be on the emoji below.');
    }else{
      setExplain('3. Press the play button');
    }
  }

  return (
    <React.Fragment>
      <div className="Home-main">
        <div className="text-section">
          <h1>
            I want to <span className="padding text-border-radius text-border"> &nbsp; Chamelody &nbsp; </span> <br />
            from <span className="blinking padding text-border-radius text-background black" id="current-back"> &nbsp; # {current} &nbsp;<span className = "x-button" id="current-x" onClick={CurrentxClick}>×</span> &nbsp;</span>
            &nbsp;to <span className="padding text-border-radius text-background black" id="purpose-back">   &nbsp; # {purpose} &nbsp;<span className = "x-button" id="purpose-x" onClick={PurposexClick}>×</span> &nbsp;</span>
          </h1>
        </div>
        <div className="home-section">
          <span>
            <p>
              Chamelody guides you by drawing an emotion map.<br />
              Shall we follow the playlist created by finding a path between the two emotions of your choice? <br />
              If you press the <img src = "img/button/PlayButton.svg" alt = "play" style = { { width: "7vmin" }} className="play-margin-bottom"/> ,  you can find the playlist.
            </p>
          </span>
          <span>
            <Button link="/play" alt="play" src="img/button/PlayButton.svg" />
          </span>
        </div>
        <div className="explain-section" >
          <p>{explain}</p>
        </div>
      </div>

      <SelectEmotion onClick={EmojiClick}></SelectEmotion>
    </React.Fragment>
  )
}

export default SelectSection;