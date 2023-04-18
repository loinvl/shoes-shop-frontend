import axiosClientPrivate from "./axiosClientPrivate";
import axiosClientPublic from "./axiosClientPublic";

const rateAPI = {
  getRatesOfShoesModel: async (shoesModelID) => {
    const url = `/api/rate/shoesmodel/${shoesModelID}`;
    const res = await axiosClientPublic(url);

    return res;
  },

  rate: async (purchaseOrderID, shoesID, rateStar, content, imageLink) => {
    const url = "/api/rate/orderdetail/add";
    const data = { purchaseOrderID, shoesID, rateStar, content, imageLink };
    const res = await axiosClientPrivate.post(url, data);

    return res;
  },

  getRatesOfPurchase: async (purchaseOrderID) => {
    const url = `/api/rate/orderdetail/get/${purchaseOrderID}`;
    const res = await axiosClientPrivate.get(url);

    return res;
  }
};

export default rateAPI;
