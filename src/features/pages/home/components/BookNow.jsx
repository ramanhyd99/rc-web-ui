import { Link } from "react-router-dom";

const BookNow = ({ className }) => {
  return (
    <div className={`bg-white py-6 sm:py-8 lg:py-10 ${className}`}>
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col overflow-hidden rounded-lg bg-blue-100 sm:flex-row md:h-80">
          <div className="order-first h-60 w-full justify-center flex bg-white sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
            <img
              src={require("../../../../assets/img/here_for_you.gif")}
              loading="lazy"
              alt="We're here for you"
              className="h-full w-auto object-center"
            />
          </div>

          <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
            <h2 className="flex sm:justify-start justify-center mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">
              Sessions at ₹329 only
            </h2>
            <h3 className="flex sm:justify-start justify-center mb-4 text-md font-bold text-gray-500 md:text-xl lg:text-2xl">
              Free follow-up sessions!
            </h3>

            <p className="mb-4 max-w-lg text-gray-600">
              We believe that mental well-being should be accessible to all,
              which is why we strive to offer afforadable rates without
              compromising on the quality of care. Free follow-ups help
              assess your progress without requiring additional payments.
            </p>

            <div className="mt-4 mb-7">
              <Link
                to="/booking"
                className="flex justify-center sm:inline-block rounded-lg bg-blue-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-blue-400 focus-visible:ring active:bg-gray-200 md:text-base"
              >
                <span>Book Now</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
