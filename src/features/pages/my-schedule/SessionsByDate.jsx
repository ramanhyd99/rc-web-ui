import {
  ArrowTopRightOnSquareIcon,
  DocumentDuplicateIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { useState } from "react";
import { useGetAllSessionsByDateQuery } from "../../../apis/rtk-apis";
import { SuccessToast } from "../../common/toast/CustomToast";
import CancelSessionModel from "../my-sessions/CancelSessionModel";
import MoreDetailsModal from "./MoreDetailsModal";

const IndividualEvent = ({ data }) => {
  const [cancelBooking, setCancelBooking] = useState(null);
  const [showMoreDetails, setShowMoreDetails] = useState(null);

  const name = data["contact_details"]["their_name"]
    ? data["contact_details"]["their_name"]
    : data["contact_details"]["name"];

  const number = data["contact_details"]["their_phone"]
    ? data["contact_details"]["their_phone"]
    : data["contact_details"]["phone"];

  const handleCopyNumberClick = () => {
    navigator.clipboard.writeText(number);
    SuccessToast("Number copied!");
  };

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

  const handleShowMoreDetailsClick = () => {
    setShowMoreDetails(true);
  };

  return (
    <div className="w-[28rem] p-4 my-2 flex justify-center border-b border-1 border-gray-200">
      <div className="flex-col space-y-1 w-[22rem]">
        <div className="flex justify-center items-center font-varela font-bold text-blue-400 text-xl text-center">
          <span>
            {data["session_mode"]} - {name}
          </span>
          {data["session_status"] === "completed" && (
            <span
              className={`ml-1 inline-flex text-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-300 font-quicksand ring-1 ring-inset ring-blue-600/20
    `}
            >
              Done
            </span>
          )}
        </div>
        <div className="font-semibold text-center">
          {data["formatted_start_time"]} ({data["timezone"]})
        </div>
        <div className="text-center text-gray-700 flex justify-center space-x-2 items-baseline">
          <div>{data["client_email"]}</div>
        </div>
        <div className="flex justify-center">
          {number}
          <DocumentDuplicateIcon
            onClick={handleCopyNumberClick}
            className="h-5 ml-2"
          />
        </div>
        <div className="text-center text-gray-700 flex justify-center">
          <div>
            ₹{data["price"]} ({data["payment_status"]})
          </div>
        </div>
        {data["session_mode"] === "Video" && (
          <div className="flex justify-center">
            <a href={data["session_link"]} target="_blank" rel="noreferrer">
              <Button className="bg-black mt-2 flex justify-center">
                {" "}
                Join Session{" "}
                <ArrowTopRightOnSquareIcon className="text-white h-4 ml-1" />
              </Button>
            </a>
          </div>
        )}
      </div>
      <div>
        <Menu>
          <MenuHandler>
            <EllipsisHorizontalIcon className="h-6 hover:cursor-pointer" />
          </MenuHandler>
          <MenuList>
            <MenuItem onClick={handleShowMoreDetailsClick}>
              More details
            </MenuItem>
            <MenuItem
              className="text-red-400"
              onClick={() =>
                handleOnCancelClick(
                  data["booking_id"],
                  data["formatted_date"],
                  data["formatted_start_time"],
                  data["timezone"]
                )
              }
            >
              Cancel Session
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
      {cancelBooking && (
        <CancelSessionModel
          id={cancelBooking["booking_id"]}
          formatted_date={cancelBooking["formatted_date"]}
          formatted_start_time={cancelBooking["formatted_start_time"]}
          timezone={cancelBooking["timezone"]}
          closeModal={setCancelBooking}
        />
      )}
      {showMoreDetails && (
        <MoreDetailsModal data={data} closeModal={setShowMoreDetails} />
      )}
    </div>
  );
};

const SessionsByDate = ({ date }) => {
  const { data, isFetching } = useGetAllSessionsByDateQuery({
    date: date,
  });

  return (
    <div className="max-h-[36rem] overflow-auto flex-col space-y-1">
      <span>
        <b>Total</b>: {data?.data.length}
      </span>
      {data &&
        data.data?.map((data) => {
          return (
            <div className="flex justify-center w-full">
              <IndividualEvent data={data} />
            </div>
          );
        })}
      <div className="flex justify-center w-full">You've reached the end!</div>
    </div>
  );
};

export default SessionsByDate;
