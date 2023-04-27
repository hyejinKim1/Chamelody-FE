export const getAlbumImg = async (id, accessToken) => {
  const ALBUM_ENDPOINT = 'https://api.spotify.com/v1/albums';
  const market = 'KO';


  const albumResponse = await fetch(`${ALBUM_ENDPOINT}/${id}?market=${market}`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });

  const albumData = await albumResponse.json();
  return albumData.images[0].url;
}