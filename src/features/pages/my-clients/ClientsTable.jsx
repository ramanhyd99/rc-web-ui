import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { connect } from "react-redux";
import { useGetAllUsersQuery } from "../../../apis/user";
import { getRandomImageString, prettyDate } from "../../../utils";
import ClientInfo from "./ClientInfo";
import FreeSessionToggle from "./ToggleButton";

const TABLE_HEAD = ["Client", "Joining Date", "Free follow-up"];

const headers = [
  { id: 1, name: "Client", direction: "desc", sorting_field: "name" },
  {
    id: 2,
    name: "Joining Date",
    direction: "desc",
    sorting_field: "created_at",
  },
  { id: 3, name: "Free follow-up" },
];

const ClientsTable = () => {
  const [clients, setClients] = useState([]);
  const [clientInfo, setClientInfo] = useState(null);
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(0);
  const [sorting, setSorting] = useState({
    field: "name",
    direction: "asc",
  });

  const { data, error, isLoading } = useGetAllUsersQuery({
    role: "client",
    search: search,
    limit: limit,
    offset: page * limit,
    sort_field: sorting.field,
    sort_dir: sorting.direction,
  });

  const handlePrevious = () => {
    setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  const handleSearch = (value) => {
    setPage(0);
    setSearch(value);
  };

  const handleSort = (index) => {
    console.log(sorting);
    setSorting((prevSorting) => {
      let direction = "desc";
      // if (prevSorting.field === headers[index].sorting_field) {
      //   direction = prevSorting.direction === "desc" ? "asc" : "desc";
      // }
      direction = prevSorting.direction === "desc" ? "asc" : "desc";

      return {
        field: headers[index].sorting_field,
        direction: direction,
      };
    });
  };

  const handleClientClick = (id) => {
    setClientInfo(id);
  };

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none ">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row ">
          <div className="flex gap-4">
            <div className="w-full md:w-72">
              <Input
                placeholder="search"
                className="ml-2 rounded-lg"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
            {isLoading && (
              <div
                class="inline-block text-blue-400 h-7 w-7 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              ></div>
            )}
          </div>
          <div className="mr-2">
            <b>Total</b>: {data ? data.data.total : 0}
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
                      <ChevronUpDownIcon
                        onClick={() => handleSort(index)}
                        strokeWidth={2}
                        className="h-4 w-4"
                      />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data &&
              data.data?.users?.map(
                (
                  {
                    profile_picture,
                    name,
                    email,
                    created_at,
                    free_follow_up,
                    id,
                  },
                  index
                ) => {
                  const isLast = index === clients.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <>
                      <tr key={name}>
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => handleClientClick(id)}
                              className="transform transition-all hover:scale-110"
                            >
                              <Avatar
                                src={
                                  profile_picture
                                    ? profile_picture
                                    : require(`../../../assets/img/penguin-${getRandomImageString(
                                        id
                                      )}.png`)
                                }
                                alt={name}
                                size="md"
                              />
                            </button>
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {name}
                              </Typography>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal opacity-70"
                              >
                                {email}
                              </Typography>
                            </div>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {prettyDate(created_at)}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <FreeSessionToggle
                            key={free_follow_up}
                            className="w-full"
                            isToggled={free_follow_up}
                            id={id}
                          />
                        </td>
                      </tr>
                    </>
                  );
                }
              )}
          </tbody>
        </table>
        {data?.data.total == 0 && (
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
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page {page + 1} of{" "}
          {data?.data?.total ? Math.ceil(data.data.total / limit) : "-"}
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
      </CardFooter>
      {clientInfo && (
        <ClientInfo userId={clientInfo} setClientInfo={setClientInfo} />
      )}
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.persistedReducer.user.UserInfo,
  };
};

export default connect(mapStateToProps)(ClientsTable);
