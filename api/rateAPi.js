import axiosClientPublic from "./axiosClientPublic";

const rateAPI = {
    getRatesOfShoesModel: async (shoesModelID) => {
        const url = `/api/rate/shoesmodel/${shoesModelID}`;
        const res = await axiosClientPublic(url);

        return res;
    }
};

export default rateAPI;