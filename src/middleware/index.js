import {
  isFulfilled, isRejectedWithValue
} from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const rtkQueryErrorLogger = (api) => (next) => (action) => {
  // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these use matchers!

  if (isFulfilled(action)) {
    if (action.payload && action.payload.infoMessage) {
      toast.info(action.payload.infoMessage, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  if (isRejectedWithValue(action)) {
    let msg = "Could not perform that action. Please try again.";

    if (action.payload && action.payload.data.errorMessage) {
      msg = action.payload.data.errorMessage;
    }

    toast.error(msg, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return next(action);
};
