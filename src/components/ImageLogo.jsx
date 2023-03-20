import imageLogo from './assets/image/chamelody_logo.svg'
import { Link } from "react-router-dom";
// import styled from "styled-components";

// const StyledLink = styled(Link)`

// `

function ImageLogo({ size = "48vmin" }){
  return (
    <Link to="/home">
      <img 
      src={imageLogo} 
      className="App-logo logo-spin" 
      alt="logo" 
      style = {{ width: size}}
      />
    </Link>
  )
}

export default ImageLogo;