import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AssignmentsTable from "../my-assignments/AssignmentsTable";

const ClientInfo = () => {
  const [name, setName] = useState();
  const [id, setId] = useState();
  const [email, setEmail] = useState();
  const [joining, setJoining] = useState();
  const [search, setSearch] = useState();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);

    setName(queryParams.get("name"));
    setId(queryParams.get("id"));
    setEmail(queryParams.get("email"));
    setJoining(queryParams.get("joining_date"));
    setJoining(queryParams.get("joining_date"));
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
            <div className="p-4 flex justify-around">
              <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  {name}
                </h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                  Joined: {joining}
                </p>
              </div>
              <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  {email}
                </h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                  Id: {id}
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
                    Sessions
                  </h3>
                </div>
                <AssignmentsTable userId={id} />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="divide-y border-t w-full max-w-7xl">
              <div className="flex flex-col gap-3 py-4 md:py-8">
                <div>
                  <h3 className="text-base font-semibold leading-7 text-gray-900">
                    Assignments
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
