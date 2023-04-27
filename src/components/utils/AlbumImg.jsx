import { useState, useEffect } from "react";

export default function GetAlbumImg ({id, accessToken}) {
  const [url, setUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect( () =>{
    fetch(`https://api.spotify.com/v1/tracks/${id}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setUrl(data.album.images[2].url);
      setLoading(false);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]); 

  return (
    <>
    {!loading &&
      <img src={url}
      alt="img"
      width="70vw"
      style={{ borderRadius: "0.4vmin" }} />
    }
    </>    
  )
}