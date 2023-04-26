import { Link } from "react-router-dom";

export default function Button({ link, alt, src, size = "calc(12vh + 3vw)"}){
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
