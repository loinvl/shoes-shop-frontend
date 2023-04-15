import axiosClientPrivate from "./axiosClientPrivate";

const customerAPI = {
    getProifle: async () => {
        const url = '/api/customer/profile';
        const res = await axiosClientPrivate.get(url);

        return res;
    },

    updateProfile: async (data) => {
        const url = '/api/customer/profile/update';
        const res = await axiosClientPrivate.patch(url, data);

        return res;
    }
};

export default customerAPI;