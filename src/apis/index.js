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
    // needed to prevent csrf attacks
    config.headers["X-Requested-By"] = "Radhe-Krishna";
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
    if (error.response && error.response.status === 400) {
      store.dispatch(
        setToast({
          msg: error.response?.data?.errorMessage
            ? error.response?.data?.errorMessage
            : "Bad request.",
          isError: true,
        })
      );
    } else if (error.response && error.response.status === 401) {
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
          msg: error.response?.data?.errorMessage
            ? error.response?.data?.errorMessage
            : "Could not perform that action, please try again.",
          isError: true,
        })
      );
    } else if (error.response && error.response.status === 500) {
      store.dispatch(
        setToast({
          msg: error.response?.data?.errorMessage
            ? error.response?.data?.errorMessage
            : "Oops, something went wrong.",
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
