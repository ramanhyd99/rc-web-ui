import { Link } from "react-router-dom";

const BookNow = ({ className }) => {
  return (
    <div class={`bg-white py-6 sm:py-8 lg:py-10 ${className}`}>
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div class="flex flex-col overflow-hidden rounded-lg bg-blue-100 sm:flex-row md:h-80">
          <div class="order-first h-60 w-full justify-center flex bg-white sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
            <img
              src={require("../../assets/img/here_for_you.gif")}
              loading="lazy"
              alt="We're here for you"
              class="h-full w-auto object-center"
            />
          </div>

          <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
            <h2 class="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">
              Sessions at ₹329 only!
            </h2>

            <p class="mb-4 max-w-md text-gray-600">
              We believe that mental well-being should be accessible to all,
              which is why we strive to offer afforadable rates without
              compromising on the quality of care.
            </p>

            <div class="mt-auto mb-4">
              <Link
                to="/booking"
                class="inline-block rounded-lg bg-blue-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-blue-400 focus-visible:ring active:bg-gray-200 md:text-base"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
