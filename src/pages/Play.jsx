import React,{ UseEffect } from 'react';
import Header from '../components/utils/Header'
import PlaySection from '../components/Play/PlaySection'
import $ from 'jquery';
import '../App.css';

function Play(){
  $('.App-wrapper').css('background', 'linear-gradient(140deg,  #ffe374, #ff9b4f,#ff6c8e,#fc527f )');
  $('.App-wrapper').css('background-size', '145% 145%');
  $('.App-wrapper').css('animation', 'MoveGrad 5s ease infinite');

  return(
    <PlaySection />
  )
}

export default Play;

    // <div className="playBackground">
    //   <Header />
    // </div>