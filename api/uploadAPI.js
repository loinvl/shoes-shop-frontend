import axiosClientPublic from "./axiosClientPublic";

const uploadAPI = {
  uploadImage: async (imageFile) => {
    const url = "/api/file/image/upload";
    const formData = new FormData();
    formData.append("ImageFile", imageFile);

    const res = await axiosClientPublic({
      method: "post",
      url: url,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });

    return res;
  },
};

export default uploadAPI;
