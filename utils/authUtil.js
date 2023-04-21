import authAPI from "@/backendAPI/authAPI";
import Cookies from "js-cookie";
import jwt from 'jsonwebtoken';

const authUtil = {
    storeToken: (accessToken, refreshToken) => {
        Cookies.set('access_token', accessToken);
        Cookies.set('refresh_token', refreshToken);
    },

    getAccessToken: () => {
        const accessToken = Cookies.get('access_token');
        return accessToken;
    },

    getRefreshToken: () => {
        const refreshToken = Cookies.get('refresh_token');
        return refreshToken;
    },

    getValidAccessToken: async () => {
        // access token or refresh token does not exist in cookies
        const accessToken = Cookies.get('access_token');
        const refreshToken = Cookies.get('refresh_token');
        if(!accessToken || !refreshToken){
            authUtil.removeToken();
            return null;
        }

        const UTCTimestampNow = Math.floor(Date.now() / 1000);

        // refresh token expired
        const expRefreshToken = (jwt.decode(refreshToken)).exp;
        if(expRefreshToken <= UTCTimestampNow){
            authUtil.removeToken();
            return null;
        }

        //access token expired, get new token use refresh token
        const user = jwt.decode(accessToken);
        console.log(user);
        if(user && user.exp <= UTCTimestampNow){
            const res = await authAPI.getNewAccessToken(refreshToken);
            if(!res.success){
                authUtil.removeToken();
                return null;
            }

            const {newAccessToken, newRefreshToken} = res.data;
            authUtil.storeToken(newAccessToken, newRefreshToken);

            return newAccessToken;
        }

        return accessToken;
    },

    getUserPayload: (accessToken) => {
        const user = jwt.decode(accessToken);
        return user;
    },

    removeToken: () => {
        Cookies.remove('access_token');
        Cookies.remove('refresh_token');
    }
};

export default authUtil;