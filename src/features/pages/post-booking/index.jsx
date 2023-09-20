import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const PostBookingPage = (props) => {

  const booking_id = props.data?.data?.data.booking_id;
  const price =  props.data?.data?.data.price;
  const session_mode =  props.data?.data?.data.session_mode;
  const payment_mode =  props.data?.data?.data.payment_mode === "pay_later" ? "Pay after session" : "Pending";
  const formatted_date =  props.data?.data?.data.formatted_date;
  const formatted_start_time =  props.data?.data?.data.formatted_start_time;
  const timezone =  props.data?.data?.data.timezone;

  const handleGotIt = () => {
    props.setBookingSuccessData(null);
  };

  return (
    <div className="flex justify-center items-center h-screen px-2">
      <div className="md:w-1/3 flex flex-col rounded-lg overflow-hidden bg-white shadow">
        <CheckBadgeIcon className="h-12 mt-4 text-green-500 animate-pulse-end" />
        <div className="flex-1 px-6 py-4">
          <div className="font-bold text-2xl mb-2 text-center">
            Booking Confirmed!
          </div>
          <div className="block md:flex justify-center space-x-4">
            <div className="text-center">
              <small className="font-semibold">Booking Id: </small>
              <small>
                {" "}
                <span
                  className={` rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20
           `}
                >
                  RC-00{booking_id}
                </span>
              </small>
            </div>
            <div className="text-center">
              <small className="font-semibold">Payment: </small>
              <small>
                {" "}
                <span
                  className={` rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20
           `}
                >
                  ₹{price} - {payment_mode}
                </span>
              </small>
            </div>
          </div>
          <div className="flex mt-6 justify-start">
            <div>
              <div className="">
                <div className="flex">
                  <CalendarIcon className="h-7 mr-8" />
                  <div className="text-gray-700">{formatted_date}</div>
                </div>

                <div className="flex mt-2">
                  <ClockIcon className="h-7 mr-8" />
                  <div className="text-gray-700">{formatted_start_time} {timezone}</div>
                </div>
              </div>
              <div>
                <div className="flex mt-2">
                  <MapPinIcon className="h-7 mr-8" />
                  <div className="text-gray-700 ">{session_mode}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <b>Note:</b> <br />
            <div className="pt-1">
              1. You will receive an email with the session details.
              Alternatively, you can view it in{" "}
              <span className="text-blue-600 hover:text-blue-400">
                <Link to="/my-sessions">My Sessions</Link>
              </span>
            </div>
            <br />
            <div className="">
              2. Please try to submit your assignment, if any, prior to joining
              the session at{" "}
              <span className="text-blue-600 hover:text-blue-400">
                <Link to="/my-assignments">My Assignments</Link>
              </span>
            </div>
            <br />
            <br />
            Please contact <span className="underline">+91-7975897538</span> for
            any issues.
          </div>
        </div>
        <div className="px-6 py-4 bg-gray-100 flex justify-center">
          <button
            onClick={handleGotIt}
            className="bg-blue-500 hover:bg-blue-400 py-2 px-4 text-sm font-medium text-white border border-transparent rounded-lg focus:outline-none"
          >
            Got it!
          </button>
          <div
            className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
            aria-hidden="true"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PostBookingPage;
