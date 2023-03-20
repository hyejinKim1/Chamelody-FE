function Emoji({onClick, emotion, src, size = "10vmin"} ){

  console.log(onClick);
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
export default Emoji;