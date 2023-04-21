import axiosClientPublic from "./axiosClientPublic";

const brandAPI = {
    getBrandList: async() => {
        const url = '/api/brand/list';
        const res = await axiosClientPublic(url);

        return res;
    }
}

export default brandAPI;