import { PaperClipIcon, TrashIcon } from "@heroicons/react/24/outline";
import { format } from "date-fns";
import { useState } from "react";
import { useGetAssignmentsForUserIdQuery } from "../../../apis/rtk-apis";
import DeleteAssignmentModal from "./DeleteAssignmentModal";

const AssignmentsTable = ({ userId }) => {
  const [deleteAssignment, setDeleteAssignment] = useState(null);

  const { data, isFetching } = useGetAssignmentsForUserIdQuery({
    userId: userId,
  });

  const handleDeleteAssignment = (id, name) => {
    setDeleteAssignment({ id: id, name: name });
  };

  return (
    <div className="mt-12 w-full flex justify-center">
      {isFetching ? (
        <div className="border border-blue-300 shadow rounded-md p-4 max-w-md w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-gray-300 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-gray-300 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                  <div className="h-2 bg-gray-300 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {data == null || data?.data.length === 0 ? (
            <div className="flex justify-center">
              <div className="block">
                <img
                  src={require("../../../assets/img/empty.png")}
                  loading="lazy"
                  alt="No results"
                  className="h-48"
                />
                <div className="flex justify-center items-center font-varela text-gray-500">
                  No assignments found
                </div>
              </div>
            </div>
          ) : (
            <ul className="divide-y divide-gray-100 rounded-md border border-gray-200 w-full lg:w-3/5 xl:full justify-center">
              {data &&
                data.data?.map(
                  ({ assignment_id, name, uploaded_date, url }) => {
                    return (
                      <div key={assignment_id}>
                        <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6 ">
                          <div className="flex w-0 flex-1 items-center">
                            <PaperClipIcon className="h-5 w-5 text-gray-400" />
                            <div className="ml-4 flex min-w-0 flex-1 gap-2">
                              <span className="truncate font-medium">
                                {name}
                              </span>
                              <span className="flex-shrink-0 text-gray-400">
                                {format(
                                  new Date(uploaded_date),
                                  "dd MMMM, yyy"
                                )}
                              </span>
                            </div>
                          </div>
                          <div className="ml-4 flex-shrink-0 flex">
                            <a
                              href={url}
                              className="font-medium text-blue-600 hover:text-blue-500"
                            >
                              Download
                            </a>
                          </div>
                          <div className="ml-4 flex-shrink-0 flex">
                            <button
                              onClick={() =>
                                handleDeleteAssignment(assignment_id, name)
                              }
                              className="font-medium text-black-600 hover:text-red-500"
                            >
                              <TrashIcon className="h-4 w-4" />
                            </button>
                          </div>
                        </li>
                      </div>
                    );
                  }
                )}
            </ul>
          )}
        </>
      )}
      {deleteAssignment && (
        <DeleteAssignmentModal
          id={deleteAssignment["id"]}
          filename={deleteAssignment["name"]}
          closeModal={setDeleteAssignment}
        />
      )}
    </div>
  );
};

export default AssignmentsTable;
