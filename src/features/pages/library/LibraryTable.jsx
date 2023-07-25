import {
  ArrowDownTrayIcon,
  BookmarkIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";

const headers = [
  { id: 1, name: "Title", direction: "desc", sorting_field: "name" },
  {
    id: 2,
    name: "Link",
  },
  {
    id: 3,
    name: "Tag",
  },
];

const data = [
  {
    title:
      "Compassion Focused Therapy (CFT) Distinctive Features (Paul Gilbert).pdf",
    bookingDateTime: "2023-06-19",
    tag: "Social Psychology",
    status: "completed",
    link: "https://example.com",
    bookingDetails: {
      name: "John Doe",
      phone: "1234567890",
      email: "john.doe@example.com",
      age: 8,
    },
  },
  {
    title:
      "Relating to Voices using Compassion Focused Therapy A Self-help Companion.pdf",
    bookingDateTime: "2023-06-20",
    tag: "Self-help",
    status: "Pending",
    link: "https://example.com",
    bookingDetails: {
      name: "Jane Smith",
      phone: "9876543210",
      email: "jane.smith@example.com",
      age: 24,
    },
  },
];

const LibraryTable = () => {
  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row ">
          <div className="flex gap-4">
            <div className="w-full md:w-72 pt-1">
              <Input label="search" />
            </div>
          </div>
          <div className="mr-4">
            <b>Total</b>: 10
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {headers.map((head, index) => (
                <th
                  key={head.name}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                  >
                    {head.name}
                    {head.sorting_field && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map(({ title, tag, link }, index) => {
                const isLast = index === data.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={title} className="even:bg-blue-gray-50/50">
                    <td className={classes}>
                      <div className="flex items-center gap-4 w-1/2">
                        <div className="flex flex-col flex-wrap">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-semibold"
                          >
                            <div className="flex">
                              <BookmarkIcon className="w-6 mr-2" />
                              {title}
                            </div>
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <span href={link} >
                        <ArrowDownTrayIcon className="h-6 w-6 text-black" />
                      </span>
                    </td>
                    <td className={classes}>
                      <span
                        className={` rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20
   `}
                      >
                        {tag}
                      </span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </CardBody>
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
  );
};

export default LibraryTable;
