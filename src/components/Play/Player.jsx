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