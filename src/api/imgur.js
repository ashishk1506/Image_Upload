import qs from 'qs'

const login = () => {

    const queryString = {
        client_id: import.meta.env.VITE_CLIENTID,
        response_type: "token",
        state: "APPLICATION_STAT"
    }

    window.location = `https://api.imgur.com/oauth2/authorize?${qs.stringify(queryString)}`

}

export default login
// http://localhost:5173/oauth2/callback?
// state=APPLICATION_STAT#
// access_token=972932bdc44a473fa614f28f1d3b3f215d99bdd3
// &expires_in=315360000
// &token_type=bearer
// &refresh_token=84912f1a565d23f52d4ae112dbbb6ddc9fbb3d9e
// &account_username=AshishImgu188r
// &account_id=183192497