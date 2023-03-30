import { Link } from "react-router-dom";

function Button({ link, alt, src, size = "17vmin" }){
  return (
    <Link to={link}>
      <img 
        src = {src} 
        className="button" 
        id = {alt}
        alt={alt} 
        style = {{ width: size }}
      />
    </Link>
  )
}
export default Button;