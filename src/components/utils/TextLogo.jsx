import { Link } from "react-router-dom";

export default function TextLogo({ size = "42vmin" }){
  return (
    <Link to="/">
      <img 
      src="img/logo/chamelody_text.svg"
      className="App-logo-text" 
      alt="logo" 
      style = {{ width: size }}
      />
    </Link>
  )
}