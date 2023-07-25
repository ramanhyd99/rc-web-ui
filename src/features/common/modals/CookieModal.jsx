import { useEffect, useState } from "react";

const CookieModal = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    const delay = 5000;

    const timer = setTimeout(() => {
      if (!localStorage.getItem("cookie_accepted")) {
        setShowCookieBanner(true);
      }
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookie_accepted", true);
    setShowCookieBanner(false);
  };

  return (
    <>
      {showCookieBanner && (
        <div className="flex justify-center mr-2">
          <div className="bg-teal-50 rounded-2xl z-10 fixed bottom-3">
            <div className="mx-auto max-w-screen-2xl">
              {/* <div className="flex justify-end pr-3 pt-2"><XMarkIcon className="h-6"/></div> */}
              <div className="relative flex flex-wrap rounded-lg p-8 pb-6 shadow-lg sm:flex-nowrap sm:items-center sm:justify-center sm:gap-3 sm:pr-8 md:px-8">
                <div className="order-1 mb-2 inline-block w-11/12 max-w-screen-sm text-sm text-black sm:order-none sm:mb-0 sm:w-auto md:text-base">
                  <div className="flex ">
                    <img
                      className="block h-16 w-auto mr-4 mt-4"
                      src={require("../../../assets/img/cookie.png")}
                      alt="Random Capsule"
                    />
                    <p>
                      <div className="text-left text-2xl text-gray-800 mb-2">
                        We use cookies.
                      </div>
                      We use cookies to improve your experience on our site. To
                      find out more, read our updated{" "}
                      <a
                        className="underline"
                        href="/privacy-policy"
                        target={"_blank"}
                      >
                        Privacy Policy
                      </a>
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleAcceptCookies}
                  className="order-last inline-block w-full whitespace-nowrap rounded-lg bg-blue-600 px-4 py-2 text-center text-xs font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-blue-500 focus-visible:ring active:bg-blue-500 sm:order-none sm:w-auto md:text-sm"
                >
                  Accept Cookies
                </button>

                <div className="order-2 flex w-1/12 items-start justify-end sm:absolute sm:right-0 sm:order-none sm:mr-2 sm:w-auto xl:mr-3">
                  <button
                    type="button"
                    className="text-white transition duration-100 hover:text-indigo-100 active:text-indigo-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 xl:h-6 xl:w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieModal;
