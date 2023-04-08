import { Link } from "react-router-dom";


// import styled from "styled-components";

// const StyledLink = styled(Link)`

// `

export default function ImageLogo({ size = "48vmin" }){
  return (
    <Link to="/">
      <img 
      src="img/logo/chamelody_logo.svg"
      className="App-logo logo-spin" 
      alt="logo" 
      style = {{ width: size}}
      />
    </Link>
  )
}

