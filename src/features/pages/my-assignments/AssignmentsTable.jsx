import { TrashIcon } from "@heroicons/react/24/outline";
import { PaperClipIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { fetchAssignmentsApiCall } from "../../../apis/assignments";
import DeleteAssignmentModal from "./DeleteAssignmentModal";

const data = [
  {
    assignment_id: "1",
    name: "raman_sharma.pdf",
    size: 2.4,
    link: "https://jira.oracledatacloud.com/browse/HELP-203417",
    uploaded_date: "20/06/2023",
  },
  {
    assignment_id: "2",
    name: "raman_sharma2.pdf",
    size: 1.8,
    link: "https://jira.oracledatacloud.com/browse/HELP-203415",
    uploaded_date: "18/06/2023",
  },
];

const AssignmentsTable = ({ userId }) => {
  const [isLoading, setLoading] = useState(false);
  const [assignments, setAssignments] = useState(null);
  const [deleteAssignment, setDeleteAssignment] = useState(null);

  const handleDeleteAssignment = (id, name) => {
    setDeleteAssignment({ id: id, name: name });
  };

//   useEffect(() => {
//     const fetchAssignmentsData = async () => {
//       setLoading(true);
//       // await new Promise((resolve) => setTimeout(resolve, 3000));
//       try {
//         const response = await fetchAssignmentsApiCall(userId);
//         setAssignments(response.data);
//       } catch (error) {}

//       if (!assignments) setLoading(false);
//     };

//     if (userId) fetchAssignmentsData();
//   }, [userId]);

  return (
    <div className="mt-12 w-full flex justify-center">
      {isLoading ? (
        <div class="border border-blue-300 shadow rounded-md p-4 max-w-md w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="rounded-full bg-slate-700 h-10 w-10"></div>
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-700 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ul
          role="list"
          class="divide-y divide-gray-100 rounded-md border border-gray-200 w-full lg:w-3/5 justify-center"
        >
          {data.map((item) => (
            <div key={item.assignment_id}>
              <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6 ">
                <div class="flex w-0 flex-1 items-center">
                  <PaperClipIcon className="h-5 w-5 text-gray-400" />
                  <div class="ml-4 flex min-w-0 flex-1 gap-2">
                    <span class="truncate font-medium">{item.name}</span>
                    <span class="flex-shrink-0 text-gray-400">
                      {item.size} mb
                    </span>
                  </div>
                </div>
                <div class="ml-4 flex-shrink-0 flex">
                  <a
                    href={item.link}
                    class="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Download
                  </a>
                </div>
                <div class="ml-4 flex-shrink-0 flex">
                  <button
                    onClick={() =>
                      handleDeleteAssignment(item.assignment_id, item.name)
                    }
                    class="font-medium text-black-600 hover:text-red-500"
                  >
                    <TrashIcon className="h-4 w-4" />
                  </button>
                </div>
              </li>
            </div>
          ))}
        </ul>
      )}
      {deleteAssignment && (
        <DeleteAssignmentModal
          filename={deleteAssignment["name"]}
          closeModal={setDeleteAssignment}
        />
      )}
    </div>
  );
};

export default AssignmentsTable;
