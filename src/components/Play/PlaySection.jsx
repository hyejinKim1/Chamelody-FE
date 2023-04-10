import React, { useState, useEffect } from 'react';
import Player from "./Player";
import Playlist from "./Playlist";
import SpotifyWebApi from 'spotify-web-api-js';
import styled from 'styled-components';

const spotifyApi = new SpotifyWebApi();

export default function PlaySection() {
  const current = sessionStorage.getItem('current');
  const purpose = sessionStorage.getItem('purpose');

  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    // URL 파라미터에서 access_token을 가져오기

    const params = new URLSearchParams(window.location.hash.substring(1));

    const token = params.get('access_token');

    // access_token이 있는 경우에만 설정하기

    if (token) {
      setAccessToken(token);
      spotifyApi.setAccessToken(token);
      window.location.hash = '';
    }
  }, []);

  const handleLogin = () => {
    const clientId = 'b0d11574667c403b82920e816c68ad54';
    const redirectUri = 'http://localhost:3000/play';
    const scopes = [
      'user-read-private',
      'user-read-email',
      'user-library-read',
      'user-library-modify',
      'user-read-playback-state',
      'user-modify-playback-state',
      'user-read-currently-playing',
      'streaming'
    ];

    // Spotify 로그인 URL 생성
    const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}`;

    // 사용자를 Spotify 로그인 페이지로 리다이렉트
    window.location.href = url;
  };

  return (
    <React.Fragment>
      <PlaySectionWrapper>
        <PlaySide>
          <h1>
            from <RoundText>  &nbsp; # {current} &nbsp;</RoundText>
            <br />
            to <RoundText>   &nbsp; # {purpose} &nbsp;</RoundText>
          </h1>
          {!accessToken && (
            <LoginBtn onClick={handleLogin}> &nbsp; Log in with Spotify &nbsp; </LoginBtn>
          )}
        </PlaySide>
        <PlaylistDiv>
          <Playlist data={MusicData}/>
        </PlaylistDiv>
      </PlaySectionWrapper>
      <PlayerDiv>
        {accessToken && (
          <Player token={accessToken} data={MusicData}/>
        )}
      </PlayerDiv>
    </React.Fragment>
  )
}


const MusicData = [
  {
    "id": "4Dr2hJ3EnVh2Aaot6fRwDO",
    "name": "Blueming",
    "artists": ["아이유"],
    "imageUrl": "https://i.scdn.co/image/ab67616d0000b273b658276cd9884ef6fae69033"
  },
  {
    "id": "1IdM9JrXYuMYiTdM983oH4",
    "name": "봄 사랑 벚꽃 말고",
    "artists": ["하이포", "아이유"],
    "imageUrl": "https://i.scdn.co/image/ab67616d0000b273762badbc5b89a2fa65d13f67"
  },
  {
    "id": "3r8RuvgbX9s7ammBn07D3W",
    "name": "Ditto",
    "artists": ["NewJeans"],
    "imageUrl": "https://i.scdn.co/image/ab67616d0000b273edf5b257be1d6593e81bb45f"
  },
  {
    "id": "4fsQ0K37TOXa3hEQfjEic1",
    "name": "ANTIFRAGILE",
    "artists": ["LE SSERAFIM"],
    "imageUrl": "https://i.scdn.co/image/ab67616d0000b273a991995542d50a691b9ae5be"
  },
  {
    "id": "0Ts1lnK3lYa2dwE2orDJc5",
    "name": "I Don’t Think That I Like Her",
    "artists": ["Charlie Puth"],
    "imageUrl": "https://i.scdn.co/image/ab67616d0000b273a3b39c1651a617bb09800fd8"
  },
  {
    "id": "6YOXdy9jShw66iOnBzQMKv",
    "name": "봄 인가 봐",
    "artists": ["웬디", "에릭남"],
    "imageUrl": "https://i.scdn.co/image/ab67616d0000b273c2220e622cd370a4237727f8"
  },
  {
    "id": "0pYacDCZuRhcrwGUA5nTBe",
    "name": "에잇(Prod.&Feat. SUGA of BTS)",
    "artists": ["아이유", "슈가"],
    "imageUrl": "https://i.scdn.co/image/ab67616d0000b273c63be04ae902b1da7a54d247"
  },
  {
    "id": "0KVClXxsZEKkyWRNXeRFrE",
    "name": "내 손을 잡아",
    "artists": ["아이유"],
    "imageUrl": "https://i.scdn.co/image/ab67616d0000b273f1efb467ac4c748630ffd22f"
  },
  {
    "id": "7HrE6HtYNBbGqp5GmHbFV0",
    "name": "Love poem",
    "artists": ["아이유"],
    "imageUrl": "https://i.scdn.co/image/ab67616d0000b273b658276cd9884ef6fae69033"
  },
  {
    "id": "2g0LdZQce9xlcHb1mBJyuz",
    "name": "strawberry moon",
    "artists": ["아이유"],
    "imageUrl": "https://i.scdn.co/image/ab67616d0000b273c4d4ade422fa74b8512fd85e"
  },
  {
    "id": "46wDG6evLn2iPoQ0F8CUWk",
    "name": "아이와 나의 바다",
    "artists": ["아이유"],
    "imageUrl": "https://i.scdn.co/image/ab67616d0000b2734ed058b71650a6ca2c04adff"
  },
  {
    "id": "21ApmVGIzIAIDSBdHu6SVt",
    "name": "No Celestial",
    "artists": ["LE SSERAFIM"],
    "imageUrl": "https://i.scdn.co/image/ab67616d0000b273a991995542d50a691b9ae5be"
  }
]

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
const LoginBtn = styled.button`
  border: none;
  border-radius: 10vmin;
  background-color:rgba(255, 255, 255, 0.7);
  padding: 1vmin;
  font-size: 1.3vw;
  font-weight:700;
  cursor:pointer;
`

const PlayerDiv = styled.div`
  height: 14vh;
`