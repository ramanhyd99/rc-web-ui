import { Link } from "react-router-dom";

const SubmittedComponent = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <div className="flex justify-center">
        <img
          src={require("../../../assets/img/thanks.png")}
          className="h-48"
        />
      </div>
      {/* <CheckBadgeIcon className="h-16 mt-4 text-green-500 animate-pulse-end" /> */}
      <div className="flex-1 px-6 py-4">
        <div className="font-bold font-varela text-2xl mb-2 text-center ">
          for the feedback!
        </div>
        <div className="flex justify-center">
          <Link
            to="/home"
            className="relative mt-2.5 rounded-lg bg-blue-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-blue-400 focus-visible:ring active:text-gray-700 md:text-base"
          >
            &#8592; Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubmittedComponent;
