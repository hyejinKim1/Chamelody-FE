import styled from "styled-components"

export default function SearchResult({ result }){
  const handleClick = () => {

  };

  return(
    <Ul>
    {result.map((track) => (
      <List key={track.id} onClick={() => handleClick(track.uri)}>
        <img src={track.album.images[2].url}
          alt="album img"
          width="70vw"
          style={{ borderRadius: "0.4vmin" }} />
        {track.name} - {track.artists[0].name}
      </List>
    ))}
  </Ul>
  )
}

const Ul = styled.ul`
  width: 20vw;
  overflow-x: scroll;
  display: flex;
  margin: 9px;
`

const List = styled.li`
  font-size: 12px;
  list-style: none;
  margin:2px;
`