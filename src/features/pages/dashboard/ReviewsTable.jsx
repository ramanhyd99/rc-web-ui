import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useGetReviewsQuery } from "../../../apis/rtk-apis";

const headers = [
  { id: 1, name: "Email" },
  {
    id: 2,
    name: "Rating",
  },
  {
    id: 3,
    name: "Review",
  },
  {
    id: 4,
    name: "Improve",
  },
];

const ReviewsTable = () => {
  const { data } = useGetReviewsQuery();

  return (
    <>
      <div className="font-quicksand mb-5 text-xl flex justify-center sm:justify-start">
        Reviews
      </div>
      <Card className="h-full w-full mt-1 max-h-[48rem] overflow-hidden">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row ">
            <div className="flex gap-4">
              {/* <div className="w-full md:w-96 pt-1">
              <Input label="search" />
            </div> */}
            </div>
            <div className="mr-4 mb-4">
              <b>Total</b>: {data?.data?.length}
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="mt-0 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {headers.map((head, index) => (
                  <th
                    key={head.name}
                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-3 transition-colors hover:bg-blue-gray-50"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                    >
                      {head.name}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data &&
                data.data?.map(
                  (
                    { email, rating, feedback, gender, age, city, improve },
                    index
                  ) => {
                    const isLast = index === data.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={email} className="even:bg-blue-gray-50/50">
                        <td className={classes}>
                          <div className="flex items-center gap-4 w-1/2">
                            <div className="flex flex-col flex-wrap">
                              <span
                                className={` rounded-md bg-gray-50 px-2 py-1 text-sm font-medium text-gray-700 ring-1 ring-inset ring-gray-600/20
   `}
                              >
                                <div className="flex">{email}</div>
                                <div className="flex">{gender}</div>
                                <div className="flex">{age}</div>
                                <div className="flex">{city}</div>
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className={classes}>
                          {rating >= 3 ? (
                            <span
                              className={` rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20
   `}
                            >
                              {rating}
                            </span>
                          ) : (
                            <span
                              className={` rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20
  `}
                            >
                              {rating}
                            </span>
                          )}
                        </td>
                        <td className={classes}>
                          <div className="w-1/2">{feedback}</div>
                        </td>
                        <td className={classes}>
                          <div className="w-1/2">{improve}</div>
                        </td>
                      </tr>
                    );
                  }
                )}
            </tbody>
          </table>
        </CardBody>
        {/* <div className="flex justify-center items-right w-full">
          <img
            src={require("../../../assets/img/no_data.svg").default}
            className="h-64 sm:h-72 pointer-events-none"
          />
        </div> */}
        {/* <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page {1} of{" "}
            {data?.data?.total ? Math.ceil(data.data.total / limit) : "-"}
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
        </CardFooter> */}
      </Card>
    </>
  );
};

export default ReviewsTable;
