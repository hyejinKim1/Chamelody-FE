function Playlist({ data }) {
  return (
    <ul>
      {data.map((music) => (
        <li key={music.id}>
          <img src={music.imageUrl}
            alt="album img"
            width="70vw"
            style={{ borderRadius: "0.4vmin" }} />
          <div className="music-info-div">
            <div className="music-name">{music.name}</div>
            <div className="music-artists">{music.artists.map((artist) => artist).join(", ")}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Playlist;