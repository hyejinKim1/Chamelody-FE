import '../../css/play.css';
import React from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';

export default function Player({ token, data}) {
  const [play, setPlay] = React.useState(false);

  React.useEffect(() => setPlay(true), []);

  return (
      <SpotifyPlayer
        token={token}
        showSaveIcon
        callback={state => {
          if (!state.isPlaying) setPlay(false);
        }}
        play={play}
        uris={data.map(track => "spotify:track:" + track.id)}
        styles={{
          height:"14vmin",
          activeColor: '#ff6c8e',
          bgColor: 'rgba(255, 255, 255, 0.6)',
          color: 'black',
          trackArtistColor: "black",
          trackNameColor: "black",
          loaderColor: '#ff6c8e',
          sliderColor: '#ff6c8e'
        }}
      />
  );
};

/* <ul>
{playlist.map((music) => (
  <li key={music.id}>
    <span><img src={music.imageUrl}
      alt="album img"
      width="65vw"
      style={{ borderRadius: "0.5vmin" }} />
    &nbsp;&nbsp; {music.name} - {music.artists.map((artist) => artist).join(", ")}&nbsp;</span>
    <span> <button disabled={currentTrack === "spotify:track:" + music.id} onClick={() => handlePlay(music)}><img src="img/button/MusicPlayBtn.svg" width="60vmin" alt="play"/></button></span>
  </li>
))}
</ul> */