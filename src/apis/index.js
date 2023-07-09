import axios from "axios";
import CONFIG from "../config";
import { logout } from "../redux/slices/authSlice";
import { setToast } from "../redux/slices/toastSlice";

export const api = axios.create({
  baseURL: `${CONFIG["WEB_BFF"]}/`,
});

let store;

export const injectStore = (_store) => {
  store = _store;
};

api.interceptors.request.use(
  (config) => {
    if (!navigator.onLine) {
      store.dispatch(
        setToast({
          msg: "Please check you network connection.",
          isError: true,
        })
      );
    }
    config.headers["Content-Type"] = "application/json";
    config.withCredentials = true;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    if (response.data?.infoMessage) {
      store.dispatch(
        setToast({
          msg: response.data.infoMessage,
          isError: false,
        })
      );
    }
    return response;
  },
  (error) => {
    console.log(error);
    if (error.response && error.response.status === 401) {
      store.dispatch(
        setToast({
          msg: "Session expired.",
          isError: true,
        })
      );
      store.dispatch(logout());
    } else if (error.response && error.response.status === 404) {
      store.dispatch(
        setToast({
          msg: "Unable to fetch details. Please try again later.",
          isError: true,
        })
      );
    } else if (error.response && error.response.status === 500) {
      store.dispatch(
        setToast({
          msg: "Internal server error. ",
          isError: true,
        })
      );
    } else {
      store.dispatch(
        setToast({
          msg: error.message,
          isError: true,
        })
      );
    }
    return Promise.reject(error);
  }
);
