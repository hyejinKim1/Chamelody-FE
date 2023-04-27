import React from "react";
import styled from "styled-components";

export default function SelectedMusic({ track, deleteMusic }) {
  return (
    <Container>
      <Music>
        <ImgBox>
        <img src={track.album.images[2].url}
                alt="album img"
                width="70px"
                height = "70px"
                style={{ borderRadius: "0.4vmin", margin: 0}} />
        </ImgBox>
        <Name>{track.name} </Name>
        <Artist>{track.artists.map((artist) => artist.name).join(", ")}</Artist>
      </Music>
      <Delete>
        <XBtn onClick={deleteMusic}/>
      </Delete>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: center;
  height: 130px;
`

const Delete = styled.div`
  position: absolute;
  width: 100%;
  height: 130px;
`

const XBtn = styled.img.attrs({
  src: "img/button/xBtn.svg",
  alt: "x",
})`
  width: 1.5vw;
  padding-top: 45px;
  display: none;
  cursor: pointer;
  ${Container}:hover &{
    display: inline-block;
    transition: all 2s;
  }
`

const Music = styled.div`
  diaplay: inline-block;
  position: absolute;
  width: 100%;
  ${Container}:hover &{
    display: none;
    transition: all 2s;
  }
`

const ImgBox = styled.div`
  margin:0;
  margin-top: 0.7vh;
`

const Name = styled.div`
  font-size: 18px;
`

const Artist = styled.div`
  font-size: 12px;
  font-weight: 500;
`