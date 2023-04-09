import axiosClient from "./axiosClient";

const rateAPI = {
    getRatesOfShoesModel: async (shoesModelID) => {
        const url = `/api/rate/shoesmodel/${shoesModelID}`;
        const res = await axiosClient(url);

        return res;
    }
};

export default rateAPI;