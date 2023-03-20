import React, { useState } from 'react';
import './style.css';

function PlaySection() {

  const current = sessionStorage.getItem('current');
  const purpose = sessionStorage.getItem('purpose');
  
  return (
    <div className="play-wrapper">
      <div className="Play-main">
        <div className="play-section">
          <h1>
            from <span className="padding text-border-radius text-background">  &nbsp; # {current} &nbsp;</span> <br/>
            to <span className="padding text-border-radius text-background">   &nbsp; # {purpose} &nbsp;</span>
          </h1>
        </div>
      </div>
      <div className="playlist">

      </div>
    </div>
  )
}

export default PlaySection;