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
    },

    getPurchaseList: async () => {
        const url = '/api/purchaseorder/list';
        const res = await axiosClientPrivate.get(url);

        return res;
    },

    getPurchaseByID: async (purchaseOrderID) => {
        const url = `/api/purchaseorder/list/${purchaseOrderID}`;
        const res = await axiosClientPrivate.get(url);

        return res;
    },

    canclePurchase: async (purchaseOrderID) => {
        const url = `/api/purchaseorder/list/${purchaseOrderID}/cancle`;
        const res = await axiosClientPrivate.patch(url);

        return res;
    }
};

export default purchaseAPI;