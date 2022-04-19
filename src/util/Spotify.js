let userToken;

let Spotify = {
    getAccessToken() {
        if(userToken) {
            return userToken;
        }
    }
}

export default Spotify;