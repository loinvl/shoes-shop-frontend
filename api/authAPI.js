import axiosClientPrivate from "./axiosClientPrivate";
import axiosClientPublic from "./axiosClientPublic";

const authAPI = {
    postLoginData: async (data) => {
        const url = '/api/auth/login';
        const res = await axiosClientPublic.post(url, data);

        return res;
    },

    logout: async () => {
        const url = '/api/auth/logout';
        const res = await axiosClientPrivate.get(url);

        return res;
    },

    getNewAccessToken: async (refreshToken) => {
        const url = '/api/auth/token/refresh';
        const data = {refreshToken};
        const res = await axiosClientPublic.post(url, data);

        return res;
    }
};

export default authAPI;