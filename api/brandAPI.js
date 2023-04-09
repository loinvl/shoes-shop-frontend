import axiosClient from "./axiosClient";

const brandAPI = {
    getBrandList: async() => {
        const url = '/api/brand/list';
        const res = await axiosClient(url);

        return res;
    }
}

export default brandAPI;