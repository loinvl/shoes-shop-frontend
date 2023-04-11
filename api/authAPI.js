import axiosClient from "./axiosClient";

const authAPI = {
    postLoginData: async (data) => {
        const url = '/api/auth/login';
        const res = await axiosClient.post(url, data);

        return res;
    }
};

export default authAPI;