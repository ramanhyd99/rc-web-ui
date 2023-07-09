import { GoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SEO from "../../../features/seo";
import { loginAsyncGoogle } from "../../../redux/slices/authSlice";
import { LocalStorageLoggedInKey } from "../../../utils/constants";
import Loading from "../../common/loading";
import { ErrorToast } from "../../common/toast/ErrorToast";

const Login = ({ userInfo }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (userInfo) navigate("/booking");
  }, [userInfo]);

  const handleGoogleSuccess = (response) => {
    try {
      const token = response.credential;
      setIsLoading(true);
      dispatch(loginAsyncGoogle({ token })).then((result) => {
        if (result.type === "auth/googleLogin/fulfilled") {
          localStorage.setItem(LocalStorageLoggedInKey, "16108");
        }
      setIsLoading(false);
      });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const handleGoogleError = (error) => {
    ErrorToast(error);
    console.log(error);
  };

  return (
    <>
    {isLoading && <Loading/>}
      {!isLoading && !userInfo && (
        <div className="bg-white py-6 sm:py-8 lg:py-12 min-h-screen flex items-center !pt-0">
          <SEO title="Login/Sign-up" />
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8 mb-20">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
              Login/Sign-up
            </h2>

            <form className="mx-auto max-w-lg rounded-lg border">
              <div className="flex flex-col gap-4 p-4 md:p-8">
                <div className="relative flex items-center justify-center">
                  <span className="absolute inset-x-0 h-px bg-gray-300"></span>
                  <span className="relative bg-white px-4 text-sm text-gray-400">
                    More options coming soon
                  </span>
                </div>
                <div className="flex justify-center mt-2">
                  <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onError={handleGoogleError}
                  />
                </div>
              </div>
              <div className="flex items-center justify-center bg-gray-100 p-4">
                <p className="text-center text-sm text-gray-500">
                  We respect your privacy & data. &nbsp;
                  <Link
                    to="/privacy-policy"
                    className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  >
                    Privacy policy
                  </Link>
                </p>
              </div>
            </form>
          </div>
          <ToastContainer />
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.persistedReducer.user.userInfo,
  };
};

export default connect(mapStateToProps)(Login);
