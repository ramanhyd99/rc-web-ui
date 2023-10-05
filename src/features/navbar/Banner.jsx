import { useState } from "react";

const Banner = () => {
  const [showBanner, setShowBanner] = useState(true);

  const handleCloseClick = () => {
    setShowBanner(false);
  };

  return (
    <div class="bg-white">
      {showBanner ? (
        <div class="relative flex flex-wrap bg-indigo-500 px-4 py-1 sm:flex-nowrap sm:items-center sm:justify-center sm:gap-3 sm:pr-8 md:px-8">
          <div class="flex justify-center order-1 mb-2 w-11/12 max-w-screen-sm text-sm text-white sm:order-none sm:mb-0 sm:w-auto md:text-base">
            📢 Random Capsule officially goes live on 10th October, 2023!
          </div>
          <div class="order-2 flex w-1/12 items-start justify-end sm:absolute sm:right-0 sm:order-none sm:mr-1 sm:w-auto xl:mr-3">
            <button
              type="button"
              onClick={handleCloseClick}
              class="text-white transition duration-100 hover:text-indigo-100 active:text-indigo-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 md:h-6 md:w-6"
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
      ) : (
        <></>
      )}
    </div>
  );
};

export default Banner;
