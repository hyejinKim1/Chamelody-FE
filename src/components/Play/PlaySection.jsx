import React from 'react';
import Player from "./Player";
import Playlist from "./Playlist";
import styled from 'styled-components';

export default function PlaySection({ current, purpose, MusicData, accessToken }) {
  return (
    <React.Fragment>
      <PlaySectionWrapper>
        <PlaySide>
          <h1>
            from <RoundText>  &nbsp; # {current} &nbsp;</RoundText>
            <br />
            to <RoundText>   &nbsp; # {purpose} &nbsp;</RoundText>
          </h1>
        </PlaySide>
        <PlaylistDiv>
          <Playlist data={MusicData.musicList} accessToken={accessToken} />
        </PlaylistDiv>
      </PlaySectionWrapper>
      <PlayerDiv>
        <Player token={accessToken} data={MusicData.musicList} />
      </PlayerDiv>
    </React.Fragment>
  )
}

const PlaySectionWrapper = styled.div`
  display:flex;
  width:100vw;
  height: 78vh;
  color: white;
`

const PlaySide = styled.div`
  font-size: 2vw;
  line-height: 2.2;
  width: 38%;
  margin-left: 10vmin;
  margin-top: 10vh;
`

const RoundText = styled.span`
  color: black;
  border-radius: 10vmin;
  background-color: white;
  padding-bottom:1vw;
`

const PlaylistDiv = styled.div`
  background-color:rgba(255, 255, 255, 0.4);
  width:47%;
  height: 85%;
  border-radius: 5vmin;
  margin: 5vmin;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

const PlayerDiv = styled.div`
  height: 14vh;
`