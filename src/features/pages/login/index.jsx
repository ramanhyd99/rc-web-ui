import { GoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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
    if (userInfo) {
      if (userInfo.role === "admin") navigate("/my-schedule");
      else navigate("/booking");
    }
  }, [userInfo, navigate]);

  const handleGoogleSuccess = (response) => {
    try {
      const token = response.credential;
      setIsLoading(true);
      dispatch(loginAsyncGoogle({ token })).then((result) => {
        if (result.type === "auth/googleLogin/fulfilled") {
          localStorage.setItem(LocalStorageLoggedInKey, "16108"); // needed to login/logout for all tabs (check in Navbar)
        }
        setIsLoading(false);
      });
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  const handleGoogleError = (error) => {
    ErrorToast(error);
    console.error(error);
  };

  return (
    <div className="mt-0 h-[20rem]">
      <SEO title="Login/Sign-up" />
      {isLoading && <Loading />}
      {!isLoading && !userInfo && (
        <div className="flex justify-center sm:items-center sm:pb-[5rem] h-screen">
          {/* <img
            // src={require("../../assets/backgrounds/no_internet.svg").default}
            src={require("../../../assets/backgrounds/no_internet.svg").default}
            className="w-full max-w-screen-sm"
          /> */}
          <div className="w-4/5 sm:w-full md:w-full h-4/5 sm:h-full  shadow-md rounded-2xl sm:rounded-none mt-6 sm:mt-0">
            <div className="block sm:grid grid-cols-2 grid-rows-1 gap-0 h-full">
              <div className="bg-blue-50 bg-gradient-to-r from-blue-200 to-blue-50 flex justify-center items-center rounded-t-2xl sm:rounded-none">
                <img
                  src={require("../../../assets/backgrounds/login.svg").default}
                  className="w-1/2 sm:w-full max-w-screen-sm"
                  alt="login"
                />
              </div>
              <div
                // className="bg-random bg-cover flex justify-center sm:h-full p-4"
                className="flex justify-center sm:h-full pt-2"
              >
                <div className="flex justify-center mt-0 sm:items-center sm:pt-5">
                  <div className="">
                    <h2 className="text-center text-3xl lg:text-4xl text-blue-500">
                      Login/Sign-up
                    </h2>
                    <h3 className="text-center text-lg pt-2 sm:pt-3 text-pink-300">
                      Welcome to Random Capsule!
                    </h3>
                    <h4 className="text-center text-md pt-2 sm:pt-0 text-blue-800">
                      Be Heard, Today!
                    </h4>
                    <div className="pt-0 sm:mt-8 px-2 h-full flex items-center -mt-2">
                      <div>
                        <form className="mx-auto max-w-lg rounded-lg sm:rounded-none border">
                          <div className="flex flex-col gap-4 p-4 md:p-8">
                            <div className="relative flex items-center justify-center">
                              <span className="absolute inset-x-0 h-px bg-gray-300"></span>
                              <span className="relative bg-white px-4 text-sm text-gray-400">
                                More options coming soon
                              </span>
                            </div>
                            <div className="flex justify-center mt-2">
                              <GoogleLogin
                                size="large"
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
                                className="text-blue-500 transition duration-100 hover:text-blue-600 active:text-blue-700"
                              >
                                Privacy policy
                              </Link>
                            </p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        // <div className="py-6 sm:py-8 lg:py-12 h-screen flex items-center !pt-0">

        //   <div className="mx-auto max-w-screen-2xl px-4 md:px-8 mb-20">
        //     <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
        //       Login/Sign-up
        //     </h2>

        //     <form className="mx-auto max-w-lg rounded-lg border">
        //       <div className="flex flex-col gap-4 p-4 md:p-8">
        //         <div className="relative flex items-center justify-center">
        //           <span className="absolute inset-x-0 h-px bg-gray-300"></span>
        //           <span className="relative bg-white px-4 text-sm text-gray-400">
        //             More options coming soon
        //           </span>
        //         </div>
        // <div className="flex justify-center mt-2">
        //   <GoogleLogin
        //     size="large"
        //     onSuccess={handleGoogleSuccess}
        //     onError={handleGoogleError}
        //   />
        // </div>
        //       </div>
        //       <div className="flex items-center justify-center bg-gray-100 p-4">
        //         <p className="text-center text-sm text-gray-500">
        //           We respect your privacy & data. &nbsp;
        //           <Link
        //             to="/privacy-policy"
        //             className="text-blue-500 transition duration-100 hover:text-blue-600 active:text-blue-700"
        //           >
        //             Privacy policy
        //           </Link>
        //         </p>
        //       </div>
        //     </form>
        //   </div>
        //   <ToastContainer />
        // </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.persistedReducer.user.userInfo,
  };
};

export default connect(mapStateToProps)(Login);
