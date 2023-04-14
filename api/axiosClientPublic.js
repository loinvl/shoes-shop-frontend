import { triggerProgressBar } from "@/redux/progressBarReducer";
import store from "@/redux/store";
import axios from "axios";
import queryString from "query-string";
const { dispatch } = store;

// config base axios
const axiosClientPublic = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 30000,
  paramsSerializer: (params) => queryString.stringify(params),
});

// before request to api
axiosClientPublic.interceptors.request.use(async (config) => {
  dispatch(triggerProgressBar());
  return config;
});

// after request to api
axiosClientPublic.interceptors.response.use(
  (response) => {
    // stop progress bar
    dispatch(triggerProgressBar());

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
    // stop progress bar
    dispatch(triggerProgressBar());

    // Handle errors
    console.log(error);

    if (error.response && error.response.data) {
      return error.response.data;
    }

    return {
      success: false,
      message: "Response is not data",
      data: null,
    };
  }
);

export default axiosClientPublic;
