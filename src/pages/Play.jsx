import React, { useState, useEffect } from "react";
import PlaySection from "../components/Play/PlaySection";
import styled, { keyframes } from "styled-components";
import { ApiEmotion } from '../components/utils/ApiEmotion';
import Loading from './Loading';

export default function Play() {
  const current = sessionStorage.getItem('current');
  const purpose = sessionStorage.getItem('purpose');

  const [MusicData, setMusicData] = useState();

  const [loading, setLoading] = useState(true);

  const from = ApiEmotion({ emotion: current });
  const to = ApiEmotion({ emotion: purpose })

  const [accessToken, setAccessToken] = useState();
  const RedirectUrl = "http://localhost:3000"


  useEffect(() => {
    const accessData = sessionStorage.getItem('accessToken');
    if (!accessData) {
      window.location.href = RedirectUrl;
      alert("다시 로그인해주세요.");
    }
    else {
      const loginData = JSON.parse(accessData);
      if (new Date().getTime() > loginData.expiration) {
        sessionStorage.removeItem('accessToken');
        window.location.href = RedirectUrl;
        alert("다시 로그인해주세요.");
      } else {
        setAccessToken(loginData.token);
        fetch( 'http://175.106.92.75/playlist', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "fromEmotion": from,
            "toEmotion": to,
          }),
        }).then((res) => res.json())
          .then((data) => {
            console.log(data);
            setMusicData(data);
            setLoading(false);
          })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <React.Fragment>
      {loading ? (
        <Loading />
      )
        :
        (
          <PlayWrapper>
            <div style={{ height: "8vh" }}></div>
            <PlaySection current={current} purpose={purpose} MusicData={MusicData} accessToken={accessToken}/>
          </PlayWrapper>

        )}
    </React.Fragment>
  );
}

const MoveGrad = keyframes`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`

const PlayWrapper = styled.div`
  background: linear-gradient(140deg,  #ffe374, #ff9b4f,#ff6c8e,#fc527f );
  background-size: 145% 145%;
  animation: ${MoveGrad} 5s ease infinite;
`
