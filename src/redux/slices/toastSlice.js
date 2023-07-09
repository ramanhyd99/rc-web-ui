import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toast: false,
  data: null,
};

export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    clearToast: (state) => {
      state.toast = false;
      state.data = null;
    },
    setToast: (state, action) => {
      state.toast = true;
      state.data = {
        msg: action.payload.msg,
        isError: action.payload.isError,
      };
    },
  },
});

export const { clearToast, setToast } = toastSlice.actions;

export default toastSlice.reducer;
