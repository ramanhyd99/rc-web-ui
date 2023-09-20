import {
  Card,
  Input,
  Spinner,
  Tooltip,
  Typography
} from "@material-tailwind/react";
import { useState } from "react";
import { useGetAllSessionsForUserQuery } from "../../../apis/rtk-apis";
import CancelBookingModal from "./CancelBookingModal";

const headers = [
  { id: 1, name: "Booking ID", direction: "desc", sorting_field: "name" },
  {
    id: 3,
    name: "Session date",
    direction: "desc",
    sorting_field: "name",
  },
  {
    id: 4,
    name: "Slot",
  },
  { id: 5, name: "Payment" },
  { id: 6, name: "Session" },
  {
    id: 2,
    name: "Client Email",
  },
  { id: 7, name: "Link" },
];

const BookingsTable = ({ userId, date }) => {
  const [cancelBooking, setCancelBooking] = useState(null);
  const [search, setSearch] = useState("");

  const handleSearch = (value) => {
    setSearch(value);
  };

  const { data, isFetching } = useGetAllSessionsForUserQuery({
    userId: userId,
    search: search,
  });

  const handleOnCancelClick = (
    booking_id,
    formatted_date,
    formatted_start_time,
    timezone
  ) => {
    setCancelBooking({
      booking_id: booking_id,
      formatted_date: formatted_date,
      formatted_start_time: formatted_start_time,
      timezone: timezone,
    });
  };

  return (
    <>
      <div className="flex justify-center sm:justify-start">
        <div className="w-72 pb-4 ">
          <Input
            label="search"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            icon={isFetching && <Spinner className="h-5" />}
          />
        </div>
      </div>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-center">
          <thead>
            <tr>
              {headers.map((head, index) => (
                <th
                  key={head.name}
                  //   onClick={() => handleSort(index)}
                  className=" border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center text-center justify-center gap-1 font-normal leading-none opacity-70"
                  >
                    {head.name}
                    {/* {head.sorting_field && (
                        <ChevronUpDownIcon
                          strokeWidth={2}
                          className="h-4 w-4"
                        />
                      )} */}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data &&
              data.data?.map(
                ({
                  index,
                  booking_id,
                  client_email,
                  formatted_date,
                  formatted_start_time,
                  timezone,
                  session_mode,
                  session_link,
                  payment_status,
                  session_status,
                  price,
                  can_cancel,
                }) => {
                  const classes =
                    "px-4 sm:px-8 py-6 sm:py-8 pl-4 border-b border-blue-gray-50";

                  return (
                    <tr key={booking_id} className="even:bg-blue-gray-50/50">
                      <td className={classes}>
                        <div className="">
                          <div className="">
                            <span
                              className={` rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-600/20
   `}
                            >
                              RC-00{booking_id}
                            </span>
                          </div>
                        </div>
                      </td>

                      <td className={classes}>
                        <span
                          className={` rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20
   `}
                        >
                          {formatted_date}
                        </span>
                      </td>
                      <td className={classes}>
                        <span
                          className={` rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20
   `}
                        >
                          {formatted_start_time}
                        </span>{" "}
                        <span className="text-xs">{timezone}</span>
                      </td>
                      <td className={classes}>
                        <span
                          className={`rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-600/20`}
                        >
                          ₹{price} - {payment_status}
                        </span>
                      </td>
                      <td className={classes}>
                        <div className="items-center flex space-x-1 justify-center">
                          {session_status === "upcoming" ? (
                            <>
                              <span
                                className={`rounded-md bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-600/20`}
                              >
                                {session_status}
                              </span>
                              {can_cancel ? (
                                <>
                                  <button
                                    onClick={() =>
                                      handleOnCancelClick(
                                        booking_id,
                                        formatted_date,
                                        formatted_start_time,
                                        timezone
                                      )
                                    }
                                    className={` rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20
 `}
                                  >
                                    x cancel
                                  </button>
                                </>
                              ) : (
                                <Tooltip content="This session was booked by someone else, please contact them to cancel it.">
                                  <button
                                    disabled={true}
                                    className={` cursor-not-allowed rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-600/20
 `}
                                  >
                                    x cancel
                                  </button>
                                </Tooltip>
                              )}
                            </>
                          ) : (
                            <>
                              <span
                                className={`rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-600/20`}
                              >
                                {session_status}
                              </span>
                            </>
                          )}
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="">
                          <div className="">
                            <span
                              className={` rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-600/20
   `}
                            >
                              {client_email}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="flex flex-col justify-center items-center space-y-1">
                          <div>
                            <span
                              className={` rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20
   `}
                            >
                              {session_mode}
                            </span>
                          </div>
                          {session_mode === "Video" ? (
                            <div className="text-sm break-words">
                              <a
                                href={session_link}
                                className="text-blue-500 hover:text-blue-600 underline"
                                target={"_blank"}
                                rel="noreferrer"
                              >
                                ({session_link})
                              </a>
                            </div>
                          ) : (
                            <div className="block">
                              <div className="text-sm break-words">
                                ({session_link})
                              </div>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                }
              )}
          </tbody>
        </table>

        {/* <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page {1} of{" "}
            {data?.data?.total ? Mth.ceil(data.data.total / limit) : "-"}
          </Typography>
          <div className="flex gap-2">
            <Button
              variant="outlined"
              color="blue-gray"
              size="sm"
              disabled={page == 0}
              onClick={handlePrevious}
            >
              Previous
            </Button>
            <Button
              variant="outlined"
              color="blue-gray"
              size="sm"
              disabled={data ? limit * (page + 1) >= data.data.total : true}
              onClick={handleNext}
            >
              Next
            </Button>
          </div>
        </CardFooter> */}
      </Card>
      {isFetching ? (
        <div className="flex justify-center items-center mt-7">
          <div className="block">
            <div className="flex justify-center">
              <Spinner className="h-7" />
            </div>
            <span className="text-sm text-gray-700">Loading sessions</span>
          </div>
        </div>
      ) : data == null || data.data.length === 0 ? (
        <div className="flex justify-center items-center">
          <div className="block">
            <img
              src={require("../../../assets/img/empty.png")}
              loading="lazy"
              alt="No results"
              className="h-48"
            />
            <div className="flex justify-center items-center text-gray-500">
              No sessions found
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {data != null && data.data.length > 0 && (
        <div className="text-sm font-varela mt-4">
          For 'Pay after session' option, please use the following UPI ID for
          the payment: <span className="text-blue-500">7975897538@paytm</span>
        </div>
      )}
      {cancelBooking && (
        <CancelBookingModal
          id={cancelBooking["booking_id"]}
          formatted_date={cancelBooking["formatted_date"]}
          formatted_start_time={cancelBooking["formatted_start_time"]}
          timezone={cancelBooking["timezone"]}
          closeModal={setCancelBooking}
        />
      )}
    </>
  );
};

export default BookingsTable;
