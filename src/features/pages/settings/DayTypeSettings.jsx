import { CardBody } from "@material-tailwind/react";
import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
import {
  useGetDayTypesQuery,
  useUpdateDayTypesMutation,
} from "../../../apis/user";
import {
  convertTo12HourFormat,
  convertTo24HourFormat,
  prettyDate,
} from "../../../utils";
import Loading from "../../common/loading";

const DAY_TYPE_DATA = [
  {
    day_type_id: 3,
    name: "Full-day (online)",
    start: "19:00:00",
    end: "21:00:00",
    in_clinic: false,
    updated_at: "2023-06-29 08:54:11",
  },
  {
    day_type_id: 4,
    name: "Full-day (in-clinic)",
    start: "08:00:00",
    end: "21:00:00",
    in_clinic: true,
    updated_at: "2023-06-29 08:54:11",
  },
];
const DayTypeSettings = () => {
  const [formData, setFormData] = useState({});

  let { data, isFetching } = useGetDayTypesQuery();

  const [updateDayTypes, { isError }] = useUpdateDayTypesMutation();

  const handleValueChange = (event) => {
    // alert(event.target.value);
    const id = event.target.id;
    const field = event.target.name;
    let value = event.target.value;

    if (field == "start" || field == "end") {
      value = convertTo24HourFormat(value);
    }

    setFormData((prevFormData) => {
      const updatedData = {
        ...prevFormData,
        [id]: {
          ...prevFormData[id],
          [field]: value,
          day_type_id: parseInt(id),
        },
      };
      return updatedData;
    });
  };

  const clearFormUpload = () => {
    setFormData([]);
  };

  const handleFormUpload = (event) => {
    event.preventDefault();
    console.log(Object.values(formData));

    updateDayTypes({ formData: Object.values(formData) });
    setFormData([]);
  };

  return (
    <>
      <form>
        <CardBody className="overflow-scroll px-0 mx-2 bg-white rounded-lg">
          <table className="ml-2 w-full min-w-max table-auto text-left text-md">
            <thead className="bg-gray-50">
              <th>Name</th>
              <th>Start</th>
              <th>End</th>
              <th>In-clinic</th>
              <th>Modified</th>
            </thead>
            <br />
            {isFetching && <Loading />}
            {data &&
              data?.data.map(
                (
                  { day_type_id, name, start, end, in_clinic, updated_at },
                  index
                ) => {
                  return (
                    <>
                      <tr className="mx-2">
                        <td>
                          <input
                            name="name"
                            onChange={handleValueChange}
                            class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id={day_type_id}
                            type="text"
                            defaultValue={name}
                          />
                        </td>
                        <td>
                          <input
                            name="start"
                            onChange={handleValueChange}
                            class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id={day_type_id}
                            type="text"
                            defaultValue={convertTo12HourFormat(start)}
                          />
                        </td>
                        <td>
                          <input
                            name="end"
                            onChange={handleValueChange}
                            class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id={day_type_id}
                            type="text"
                            defaultValue={convertTo12HourFormat(end)}
                          />
                        </td>
                        <td>
                          <select
                            id={day_type_id}
                            onChange={handleValueChange}
                            name="in_clinic"
                            autocomplete="in_clinic"
                            defaultValue={in_clinic.toString()}
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                          >
                            <option>true</option>
                            <option>false</option>
                          </select>
                        </td>
                        <td>&nbsp;&nbsp;{prettyDate(updated_at)}</td>
                      </tr>
                      <br />
                    </>
                  );
                }
              )}
          </table>
        </CardBody>
        {Object.keys(formData).length > 0 && (
          <div class="mt-6 flex items-center justify-center gap-x-6">
            <button
              onClick={clearFormUpload}
              type="button"
              class="text-sm font-semibold leading-6 text-gray-900"
            >
              Clear
            </button>
            <button
              name="files"
              onClick={handleFormUpload}
              type="submit"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        )}
      </form>
    </>
  );
};

export default DayTypeSettings;
