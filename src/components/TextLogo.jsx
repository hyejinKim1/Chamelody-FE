import textLogo from './assets/image/chamelody_text.svg'
import { Link } from "react-router-dom";

function TextLogo({ size = "42vmin" }){
  return (
    <Link to="/home">
      <img 
      src={textLogo} 
      className="App-logo-text" 
      alt="logo" 
      style = {{ width: size }}
      />
    </Link>
  )
}

export default TextLogo;