export const getAlbumImg = async (id, accessToken) => {
  const PROXY_URL = 'https://your-proxy-server.com';
  const ALBUM_ENDPOINT = 'https://api.spotify.com/v1/albums';
  const market = 'KO';


  const albumResponse = await fetch(`${PROXY_URL}/${ALBUM_ENDPOINT}/${id}?market=${market}`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });

  const albumData = await albumResponse.json();
  return albumData.images[0].url;
}