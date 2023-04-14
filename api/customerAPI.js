import axiosClientPrivate from "./axiosClientPrivate";

const customerAPI = {
    getProifle: async () => {
        const url = '/api/customer/profile';
        const res = await axiosClientPrivate.get(url);

        return res;
    }
};

export default customerAPI;