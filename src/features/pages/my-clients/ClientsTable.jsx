import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetAllUsersQuery } from "../../../apis/rtk-apis";
import { getRandomImageString, prettyDate } from "../../../utils";
import FreeSessionToggle from "./ToggleButton";

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
  const [clients] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [limit] = useState(5);
  const [page, setPage] = useState(0);
  const [sorting, setSorting] = useState({
    field: "name",
    direction: "asc",
  });

  const { data, isFetching } = useGetAllUsersQuery({
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
    setSorting((prevSorting) => {
      let direction = "desc";
      direction = prevSorting.direction === "desc" ? "asc" : "desc";

      return {
        field: headers[index].sorting_field,
        direction: direction,
      };
    });
  };

  const handleClientClick = (id, name, joining_date, email) => {
    let searchTerm = search ? search : ""; // don't send null as search term

    navigate(
      `/client?id=${id}&name=${name}&joining_date=${prettyDate(
        joining_date
      )}&email=${email}&search=${searchTerm}`
    );
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    setSearch(queryParams.get("search"));
  }, []);

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none ">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row ">
          <div className="w-72 pt-1 flex">
            <Input
              label="search"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              icon={isFetching && <Spinner className="h-5" />}
            />
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
                      <tr key={name} className="even:bg-blue-gray-50/50">
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() =>
                                handleClientClick(id, name, created_at, email)
                              }
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
        {data?.data.total === 0 && (
          <div className="flex justify-center">
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
            disabled={page === 0}
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
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.persistedReducer.user.UserInfo,
  };
};

export default connect(mapStateToProps)(ClientsTable);
