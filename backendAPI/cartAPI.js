import axiosClientPrivate from "./axiosClientPrivate";

const cartAPI = {
    addShoesToCart: async (shoesID, quantity) => {
        const url = '/api/cartdetail/add';
        const data = {shoesID, quantity};
        const res = await axiosClientPrivate.post(url, data);

        return res;
    },

    getCart: async () => {
        const url = '/api/cartdetail/list';
        const res = await axiosClientPrivate.get(url);

        return res;
    },

    removeShoesInCart: async (shoesID) => {
        const url = `api/cartdetail/remove/${shoesID}`;
        const res = await axiosClientPrivate.delete(url);

        return res;
    },

    updateQuantity: async (shoesID, quantity) => {
        const url = '/api/cartdetail/update/quantity';
        const data = {shoesID, quantity};
        const res = await axiosClientPrivate.patch(url, data);

        return res;
    }
};

export default cartAPI;