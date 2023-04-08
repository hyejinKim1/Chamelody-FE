export default function Emoji({onClick, emotion, src, size = "10vmin", emojiClass="emoji"} ){
  return (
    <img 
      onClick = {onClick}
      src = {src} 
      className={emojiClass} 
      id = {emotion}
      alt={emotion} 
      style = {{ width: size}}
    />
  )
}