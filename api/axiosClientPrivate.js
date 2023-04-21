import { triggerProgressBar } from "@/redux/progressBarReducer";
import store from "@/redux/store";
import { logoutSuccess } from "@/redux/userReducer";
import authUtil from "@/utils/authUtil";
import axios from "axios";
import Router from "next/router";
import queryString from "query-string";

const { dispatch } = store;

// config base axios
const axiosClientPrivate = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 30000,
  paramsSerializer: (params) => queryString.stringify(params),
});

// before request to api
axiosClientPrivate.interceptors.request.use(
  async (config) => {
    // stop progress bar
    dispatch(triggerProgressBar());

    // Handle token here
    const accessToken = await authUtil.getValidAccessToken();

    // set access token to header
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    //
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

// after receive response from api
axiosClientPrivate.interceptors.response.use(
  (response) => {
    try {
      // stop progress bar
      dispatch(triggerProgressBar());

      //
      console.log(response);

      //
      if (response && response.data) {
        return response.data;
      }

      return {
        success: false,
        message: "Not response or response is not data",
        data: null,
        errorCode: 500,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error when receive response",
        data: null,
        errorCode: 500,
      };
    }
  },
  (error) => {
    try {
      // stop progress bar
      dispatch(triggerProgressBar());

      //
      console.log(error);

      // Handle errors
      if (error && error.response && error.response.status === 401) {
        // logout
        authUtil.removeToken();
        dispatch(logoutSuccess());

        // Redirect the user to the login page
        Router.push("/auth/login");

        return Promise.reject("Redirect to login page");
      }

      if (error.response && error.response.data) {
        return error.response.data;
      }

      return {
        success: false,
        message: "Response is not data",
        data: null,
        errorCode: 500,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error when receive response",
        data: null,
        errorCode: 500,
      };
    }
  }
);

export default axiosClientPrivate;
