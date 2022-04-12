import SearchBar from "../Components/SearchBar/SearchBar";

let accessToken;
const clientId = "00f134b73f7743e6a4ed4b2656690786";
const redirectUri = "http://localhost:3000/";

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    } else {
      const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
      const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

      if (accessTokenMatch && expiresInMatch) {
        accessToken = accessTokenMatch[1];
        const expiresIn = Number(expiresInMatch[1]);
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
      } else {
        window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      }
    }
  },

  search(query) {
    accessToken = this.getAccessToken();
    fetch(`https://api.spotify.com/v1/search?type=track&q=${query}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`}
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Request failed');
      }, networkError => {
        console.log(networkError.message);
      })
      .then(jsonResponse => {
        console.log(jsonResponse);
        if (!jsonResponse.tracks) {
          return [];
        } else {
          return [];
        }
      })
  }
}

export default Spotify;
