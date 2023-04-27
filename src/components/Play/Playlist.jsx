import styled from 'styled-components'
import AlbumImg from '../utils/AlbumImg'

export default function Playlist({ data, accessToken }) {
  console.log(data);

  return (
    <PlaylistUl>
      {data.map((music) =>
      (
        <PlaylistLi key={music.id}>
          <AlbumImg id={music.id} accessToken={accessToken}/>
          <MusicInfoDiv>
            <MusicName>{music.name}</MusicName>
            {music.artists}
          </MusicInfoDiv>
        </PlaylistLi>
      ))}
    </PlaylistUl>
  );
};

const MusicInfoDiv = styled.div`
  margin-left: 2vmin;
`

const MusicName = styled.div`
  font-size:2vmin;
  font-weight:700;
  padding-bottom:0.8vmin;
`
const PlaylistUl = styled.ul`
  margin-left:5vmin;
  margin-right: 5vmin;
  padding: 0;
`

const PlaylistLi = styled.li`
  background-color:rgba(255, 255, 255, 0.8);
  border-radius: 5vmin;
  color:black;
  padding: 0.8vmin;
  padding-left:4vmin;
  padding-right: 5vmin;
  list-style: none;
  margin: 1vmin;
  display: flex;
  align-items: center;
`