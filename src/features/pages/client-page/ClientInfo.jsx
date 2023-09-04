import { Spinner } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetSpecificUserDetailsQuery } from "../../../apis/rtk-apis";
import { prettyDate } from "../../../utils";
import AssignmentsTable from "../my-assignments/AssignmentsTable";
import BookingsTable from "../my-sessions/BookingsTable";

const ClientInfo = ({defaultId}) => {
  const [id, setId] = useState(defaultId);
  const [search, setSearch] = useState("");

  const { data, isFetching } = useGetSpecificUserDetailsQuery({
    userId: id,
  });

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);

    setId(queryParams.get("id"));
    if(queryParams.get("search"))
    setSearch(queryParams.get("search"));
  }, []);

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-6">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <Link
          to={`/my-clients?search=${search}`}
          className="text-xl hover:text-blue-500"
        >
          &larr; Back to clients
        </Link>
        <div className="flex justify-center mt-12 sm:mt-0 xl:mt-12">
          <div className="w-full sm:w-1/2 bg-blue-50 rounded-xl">
            {isFetching && <Spinner />}
            <div className="p-4 flex justify-around">
              <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  {data?.data.name}
                </h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                  Joined: {prettyDate(data?.data.created_at)}
                </p>
              </div>
              <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  {data?.data.name}
                </h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                  Id: {data?.data.id}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <div className="divide-y w-full max-w-7xl">
              <div className="flex flex-col gap-3 py-4 md:py-8">
                <div>
                  <h3 className="text-base font-semibold leading-7 text-gray-900">
                    Client's Sessions
                  </h3>
                </div>
                <BookingsTable userId={id} />
                {/* <AssignmentsTable userId={id} /> */}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="divide-y border-t w-full max-w-7xl">
              <div className="flex flex-col gap-3 py-4 md:py-8">
                <div>
                  <h3 className="text-base font-semibold leading-7 text-gray-900">
                    Client's Assignments
                  </h3>
                </div>
                <AssignmentsTable userId={id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientInfo;
