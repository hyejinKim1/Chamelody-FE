import React from 'react';
import Button from './utils/Button'
import '../css/home.css';

function HomeSection(){
  return(
    <div className="Home-main">
      <div className="text-section">
        <h1>
          Change your <span className = "padding text-border-radius text-border"> &nbsp; mood &nbsp; </span> <br />

          with a - 
          {/* <ImageLogo size="12vmin"/> */}
          <img 
            src='img/logo/chamelody_logo.svg'
            className="logo-spin margin-bottom" 
            alt="logo" 
            style = {{ width: "6.5vw" }}
          />
          &nbsp;<br />
          <span className = "padding text-border-radius text-background">  &nbsp;#Chamelody &nbsp;</span> playlist
        </h1>
      </div>
      <div className = "home-section">
        <span>
          <p>
          Chamelody brings you a new experience.<br />
          Click the emoji that matches your current mood and the mood you want to be. <br />
          If you listen to the playlist created by Chamelody, you can feel the mood you want
          </p>
        </span>
        <span>
          <Button link = "/select" alt = "start" src="img/button/start_button.svg"/>
        </span>
      </div>
    </div>
  )
}

export default HomeSection;