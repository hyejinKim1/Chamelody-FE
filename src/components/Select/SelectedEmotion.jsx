import styled, { keyframes, css } from "styled-components";
import SearchMusic from './SearchMusic';

import { BackHighLight } from '../Home/HomeSection.jsx'

export default function SelectedEmotion({blink,emotion, visible, search, token, searchClick, xClick}){

  return(
    <BlinkingBack color="black" blink={blink} >
      # {emotion}
      <MusicBtn onClick={searchClick} visible={visible}/>
      <XBtn onClick={xClick} visible={visible}>×</XBtn>
      <SearchMusic visible={search} token={token}></SearchMusic>
    </BlinkingBack> 
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


const blinking = keyframes`
  0% {
    opacity:0.5;  
  }
  100% {
    opacity:1;
  }
`
  
const BlinkingBack = styled(BackHighLight)`
  margin-left: 0.5vw;
  margin-right: 0.5vw;
  ${props => props.blink ? css`animation: ${blinking} 1s ease-in-out infinite alternate;` : ''}
`