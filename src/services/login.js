export const CLIENT_ID = '6875841a8a844907a2bb32b1f85dcd6f';
export const RESPONSE_TYPE = 'token';
export const REDIRECT_URI = window.location.host === 'localhost:3000'
  ? 'http://localhost:3000/playlists'
  : 'http://spotifood-luccas.surge.sh/playlists';
export const SPOTIFY_AUTHORIZE_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}`;
