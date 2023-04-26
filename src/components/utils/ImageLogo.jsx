import { Link } from "react-router-dom";
import styled, { keyframes } from 'styled-components'

export default function ImageLogo({ size = "48vmin" }){
  return (
    <Link to="/">
      <ChamelodyImage size={size}/>
    </Link>
  )
}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const ChamelodyImage = styled.img.attrs({
  src: `img/logo/chamelody_logo.svg`,
  alt: "Chamelody",
})`
  width: ${props => props.size || "calc(3.7vh + 4.1vw)"};;
  cursor: pointer;
  animation: ${spin} infinite 20s linear;
  &:hover{  
    filter: drop-shadow(25px 25px 50px #a9ffc7) invert(7%); 
  }
` 
