import { combineReducers } from "redux";
import authReducer from "../slices/authSlice";
import toastErrorReducer from "../slices/toastSlice";

const reducers = combineReducers({
  user: authReducer,
  toast: toastErrorReducer,
});

export default reducers;
