import axios from "axios";
import queryString from "query-string";

// config base axios
const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 30000,
  paramsSerializer: (params) => queryString.stringify(params),
});

// before request to api
axiosClient.interceptors.request.use(async (config) => {
  // Handle token here
  return config;
});

// after request to api
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    console.log(response);
    return {
      success: false,
      message: "Response is not data",
      data: null,
    };
  },
  (error) => {
    // Handle errors
    console.log(error);
    if(error.response && error.response.data){
      return error.response.data;
    }

    console.log(error);
    return {
      success: false,
      message: "Response is not data",
      data: null
    };
  }
);

export default axiosClient;
