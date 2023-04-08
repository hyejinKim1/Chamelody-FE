import { Link } from "react-router-dom";

export default function Button({ link, alt, src, size = "17vmin"}){
  return (
    <Link to={link}>
      <img 
        src = {src} 
        id = {alt}
        alt={alt} 
        style = {{ width: size}}
      />
    </Link>
  )
}
