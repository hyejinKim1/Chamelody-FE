import ImageLogo from '../components/ImageLogo'
import TextLogo from '../components/TextLogo'
import './style.css';

function Logo(){
  return(
    <div 
    className="logoBox">
      <span className="logoBox-item ">
        <ImageLogo size="6vmin"/>
      </span>
      <span className="logoBox-item ">
        <TextLogo size="22vmin"/>   
      </span>
    </div>
  )
}

export default Logo;