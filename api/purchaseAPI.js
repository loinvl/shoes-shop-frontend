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

    // get purchase list of customer
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

    cancelPurchase: async (purchaseOrderID) => {
        const url = `/api/purchaseorder/list/${purchaseOrderID}/cancel`;
        const res = await axiosClientPrivate.patch(url);

        return res;
    },

    getPurchaseListAdmin: async () => {
        const url = '/api/admin/purchase/list';
        const res = await axiosClientPrivate.get(url);

        return res;
    },

    updatePurchaseStatus: async (purchaseOrderID, orderStatus) => {
        const url = `/api/admin/purchase/${purchaseOrderID}/status/update/${orderStatus}`;
        const res = await axiosClientPrivate.patch(url);

        return res;
    }
};

export default purchaseAPI;