import React, {useState, useEffect} from 'react';
import Player from "./Player";
import Playlist from "./Playlist";
import styled from 'styled-components';
import { ApiEmotion } from '../utils/ApiEmotion';

export default function PlaySection({current, purpose}) {
  const [accessToken, setAccessToken] = useState();
  const [MusicData, setMusicData] = useState([]);

  const from = ApiEmotion({emotion: current});
  const to = ApiEmotion({emotion: purpose});

  useEffect(() => {
    const accessData = sessionStorage.getItem('accessToken');
    if (!accessData) {
      window.location.href = "http://localhost:3000";
      alert("다시 로그인해주세요.");
    }
    else {
      const loginData = JSON.parse(accessData);
      if (new Date().getTime() > loginData.expiration) {
        sessionStorage.removeItem('accessToken');
        window.location.href = "http://localhost:3000";
        alert("다시 로그인해주세요.");
      } else {
        setAccessToken(loginData.token);
        const fetchData = async() => {
          const res = await fetch('http://175.106.92.75:8080/playlist',{
            method:'GET',
            headers:{
              fromEmotion: from,
              toEmotion: to
            }
          });
          const result = res.json();
          return result;
        }	
        
        fetchData().then(res => setMusicData(res));
      }
    }
  }, []);

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
          <Playlist data={MusicData} accessToken={accessToken}/>
        </PlaylistDiv>
      </PlaySectionWrapper>
      <PlayerDiv>
        <Player token={accessToken} data={MusicData} />
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