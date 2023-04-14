import axiosClientPrivate from "./axiosClientPrivate";

const purchaseAPI = {
    getOrder: async (shoesIDList) => {
        const query = shoesIDList.map(shoesID => `ShoesID=${shoesID}`).join('&');
        const url = `/api/purchaseorder/shoeses/incart?${query}`;
        const res = await axiosClientPrivate.get(url);

        return res;
    },

    checkout: async (purchase) => {
        const url = '/api/purchaseorder/checkout';
        const data = purchase;
        const res = axiosClientPrivate.post(url, data);

        return res;
    }
};

export default purchaseAPI;