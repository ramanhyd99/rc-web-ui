import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BookNow = ({ className }) => {
  return (
    <div className={` py-6 sm:py-8 lg:py-20 ${className} `}>
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 ">
        <div className="flex flex-col overflow-hidden rounded-lg  sm:flex-row md:h-80">
          <div className="order-first h-60 w-full justify-center flex  sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
            <img
              src={require("../../../../assets/img/here_for_you.gif")}
              loading="lazy"
              alt="We're here for you"
              className="h-full w-auto object-center "
            />
          </div>

          <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
            <h2 className="flex sm:justify-start justify-center mb-4 text-3xl font-bold text-gray-800 md:text-2xl lg:text-5xl">
              Sessions at <span className="px-2 highlight highlight-blue-50 highlight-spread-sm highlight-variant-5">₹329</span> only
            </h2>
            <h3 className="flex sm:justify-start justify-center mb-4 text-md  text-pink-200 md:text-xl lg:text-2xl">
              Free follow-up sessions!
            </h3>

            <p className="mb-4 max-w-lg text-gray-700 text-center sm:text-left">
              We believe that mental well-being should be accessible to all,
              which is why we strive to offer afforadable rates without
              compromising on the quality of care. Free follow-ups help assess
              your progress without requiring additional payments.
            </p>

            <div className="mt-4 mb-7 flex justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  to="/booking"
                  className="flex justify-center sm:inline-block rounded-lg bg-blue-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-blue-400 focus-visible:ring active:bg-gray-200 md:text-base shadow-[0_0_3px_blue]"
                >
                  <span>Book Now</span>
                </Link>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
