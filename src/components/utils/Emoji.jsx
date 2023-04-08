export default function Emoji({onClick, emotion, src, size = "10vmin"} ){
  return (
    <img 
      onClick = {onClick}
      src = {src} 
      className="emoji" 
      id = {emotion}
      alt={emotion} 
      style = {{ width: size }}
    />
  )
}