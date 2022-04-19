const clientId = '788bac81f5964bdaa3147c3e1a5e7af1'
const redirectUri = "http://localhost:3000/"

let accessToken;

let Spotify = {
    getAccessToken() {
        if(userToken) {
            return userToken;
        }

        const userTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/) 

        if (userTokenMatch && expiresInMatch) {
            accessToken = userTokenMatch[1]
            const expiresIn = Number(expiresInMatch[1])
            window.setTimeout(() => accessToken = '', expiresIn * 1000)
            window.history.pushState('Access Token', null, '/')
            return accessToken;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&
            response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`
            window.location = accessUrl
        }
    }

}

export default Spotify;