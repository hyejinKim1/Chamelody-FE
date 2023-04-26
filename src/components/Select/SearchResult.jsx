import { useState } from "react";
import styled from "styled-components"
import SelectedMusic from "./SelectedMusic";

export default function SearchResult({ result, showSearchBar, hideSearchBar}) {
  const [selectedTrack, setSelectedTrack ] = useState();

  const handleClick = (track) => {
    setSelectedTrack(track);
    hideSearchBar();
  };

  const deleteMusic = () => {
    setSelectedTrack(null);
    showSearchBar();
  }

  return (
    <>
      {!selectedTrack &&
        <Ul>
          {result.map((track) => (
            <List key={track.id} onClick={() => handleClick(track)}>
              <img src={track.album.images[2].url}
                alt="album img"
                width="100px"
                height = "100px"
                style={{ borderRadius: "0.4vmin"}} />
              <br/>
              <Name>{track.name}</Name>
              <Artist>{track.artists.map((artist) => artist.name).join(", ")}</Artist>
            </List>
          ))}
        </Ul>
      }
      {selectedTrack && <SelectedMusic track={selectedTrack} deleteMusic={deleteMusic}/>}
    </>
  )
}

const Ul = styled.ul`
  max-width: 20vw;
  max-height: 30vh;
  overflow-y: hidden;
  overflow-x: scroll;
  display: flex;
  margin: 5px;
  padding-left: 10px;
  padding-right: 10px;
  &::-webkit-scrollbar-track {
    background: linear-gradient(to right, white 0%, lightgray 100%);
    border-radius: 10px;
    margin: 25px;
  }
  
  &::-webkit-scrollbar {
    height: 10px;
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 10px;
    height: 5px;
  }
`

const List = styled.li`
  font-size: 12px;
  list-style: none;
  border: 2px solid lightgray;
  margin: 21px 4px 24px 4px;
  padding: 8px;
  border-radius: 10px;
  cursor: pointer;
  max-height: 200px;
  &: hover{
    background-color: lightgray;
    transform: scale(1.2);
    z-index: 1000;
    transition: all 0.5s;
  }
`

const Name = styled.div`
  font-size: 15px;
  line-height: 1;
  margin-top: 8px;
  margin-bottom: 8px;
`

const Artist = styled.div`
  font-size: 9px;
  line-height:1;
`