import { Link } from "react-router-dom";

function TextLogo({ size = "42vmin" }){
  return (
    <Link to="/home">
      <img 
      src="img/logo/chamelody_text.svg"
      className="App-logo-text" 
      alt="logo" 
      style = {{ width: size }}
      />
    </Link>
  )
}

export default TextLogo;