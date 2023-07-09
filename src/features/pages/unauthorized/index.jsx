import { Link } from "react-router-dom";
import SEO from "../../seo";

const UnauthorizedPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <SEO title="Unauthorized" />
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-col items-center">
            <h1 className="mb-2 text-center text-2xl font-bold text-gray-800 md:text-3xl">
              Oops, unauthorized!
            </h1>
            <img
              className="md:w-3/4 lg:w-full  w-1/2 h-auto"
              src={require("../../../assets/img/unauthorized.png")}
              alt="Unauthorized"
            />
            <Link
              to="/home"
              className="inline-block rounded-lg bg-blue-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-blue-400 focus-visible:ring active:text-gray-700 md:text-base"
            >
              &#8592; Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
