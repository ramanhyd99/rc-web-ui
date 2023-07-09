import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { clearToast } from "../../redux/slices/toastSlice";
import { ErrorToast, InfoToast } from "../common/toast/ErrorToast";

const ErrorNotification = ({ toast, toastData }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (toast) {
      console.log(toastData);
      if (toastData.isError) ErrorToast(toastData.msg);
      else InfoToast(toastData.msg);
      dispatch(clearToast());
    }
  }, [toast]);

  return <></>;
};

const mapStateToProps = (state) => {
  return {
    toast: state.persistedReducer.toast.toast,
    toastData: state.persistedReducer.toast.data,
  };
};
export default connect(mapStateToProps)(ErrorNotification);
