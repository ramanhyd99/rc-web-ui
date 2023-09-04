import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { clearToast } from "../../redux/slices/toastSlice";
// import { ErrorToast, InfoToast } from "../common/toast/ErrorToast";

import toast, { Toaster } from "react-hot-toast";
import { ErrorToast, SuccessToast } from "../common/toast/CustomToast";

const ErrorNotification = ({ toast, toastData }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (toast) {
      // if (toastData.isError) ErrorToast(toastData.msg);
      if (toastData.isError) ErrorToast(toastData.msg);
      else SuccessToast(toastData.msg); //InfoToast(toastData.msg);
      dispatch(clearToast());
    }
  }, [toast]);

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={true} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    toast: state.persistedReducer.toast.toast,
    toastData: state.persistedReducer.toast.data,
  };
};
export default connect(mapStateToProps)(ErrorNotification);
