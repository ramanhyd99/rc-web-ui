import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Button, Card, CardFooter, Typography } from "@material-tailwind/react";
import { prettyDate } from "../../../utils";

const headers = [
  { id: 1, name: "Booking Id", direction: "desc", sorting_field: "name" },
  {
    id: 2,
    name: "Session date",
    direction: "desc",
    sorting_field: "name",
  },
  {
    id: 3,
    name: "Slot",
  },
  { id: 4, name: "Status" },
  { id: 5, name: "Link" },
];

const data = [
  {
    bookingId: "RC-0001",
    bookingDateTime: "2023-06-19",
    slot: "10:00 AM",
    status: "completed",
    link: "https://example.com",
  },
  {
    bookingId: "RC-0002",
    bookingDateTime: "2023-06-20",
    slot: "2:00 PM",
    status: "Upcoming",
    link: "https://example.com",
  },
];

const SessionsTable = () => {
  return (
    <>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {headers.map((head, index) => (
                <th
                  key={head.name}
                  //   onClick={() => handleSort(index)}
                  className="cursor-pointer  border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-1 font-normal leading-none opacity-70"
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
              data.map(
                ({ bookingId, bookingDateTime, slot, status, link }, index) => {
                  const isLast = index === data.length - 1;
                  const classes = isLast
                    ? "p-4 pl-4"
                    : "p-4 pl-4 border-b border-blue-gray-50";

                  return (
                    <tr key={bookingId} className="even:bg-blue-gray-50/50">
                      <td className={classes}>
                        <div className="">
                          <div className="">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {bookingId}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {prettyDate(bookingDateTime)}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {slot}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {status === "completed" ? (
                            <span
                              className={` rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20
   `}
                            >
                              Completed
                            </span>
                          ) : (
                            <span
                              className={` rounded-md bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20
   `}
                            >
                              Upcoming
                            </span>
                          )}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <span>
                          <ArrowTopRightOnSquareIcon className="h-6 w-6 text-black" />
                        </span>
                      </td>
                    </tr>
                  );
                }
              )}
          </tbody>
        </table>
        {!data && (
          <div
            //   style={{ border: "2px solid red" }}
            className="flex justify-center"
          >
            <img
              src={require("../../../assets/img/empty.png")}
              loading="lazy"
              alt="No results"
              className="h-96"
            />
          </div>
        )}
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page {1} of{" "}
            {/* {data?.data?.total ? Math.ceil(data.data.total / limit) : "-"} */}
          </Typography>
          <div className="flex gap-2">
            <Button
              variant="outlined"
              color="blue-gray"
              size="sm"
              // disabled={page == 0}
              // onClick={handlePrevious}
            >
              Previous
            </Button>
            <Button
              variant="outlined"
              color="blue-gray"
              size="sm"
              // disabled={data ? limit * (page + 1) >= data.data.total : true}
              // onClick={handleNext}
            >
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default SessionsTable;
