import { PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useGetDayTypesQuery } from "../../../apis/user";

const day_types_data = [
  {
    id: 1,
    name: "Full-day (online)",
    clinic_open: false,
    from: "08:00:00",
    to: "22:00:00",
    last_modified: "08/05/2023",
  },
  {
    id: 2,
    name: "Half-day (online)",
    from: "20:00:00",
    clinic_open: false,
    to: "22:00:00",
    last_modified: "08/05/2023",
  },
  {
    id: 3,
    name: "Holiday",
    clinic_open: false,
    from: null,
    to: null,
    last_modified: "08/05/2023",
  },
  {
    id: 4,
    name: "Full-day (clinic)",
    clinic_open: true,
    from: "09:00:00",
    to: "18:00:00",
    last_modified: "08/05/2023",
  },
  {
    id: 4,
    name: "Half-day (clinic)",
    clinic_open: true,
    from: "09:00:00",
    to: "15:00:00",
    last_modified: "08/05/2023",
  },
];
const day_day_types_mapping_data = [
  {
    id: 3,
    name: "Weekday",
    day_type: 1,
  },
  {
    id: 4,
    name: "Weekend",
    day_type: 2,
  },
];
const SlotGenerationSettings = () => {
  const [formData, setFormData] = useState(null);

  const { data, isLoading } = useGetDayTypesQuery();

  const handleFormUpload = (event) => {
    const fieldName = event.target.name;
    const selectedValue = event.target.value;
    const day_type_id = event.target.id;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: selectedValue,
    }));

    console.log(formData);
  };

  const clearFormUpload = () => {
    setFormData(null);
  };

  return (
    <>
      <form>
        <h1 class="m-6 text-black-800 mb-8 text-2xl font-bold sm:text-5xl md:mb-12 md:text-3xl">
          If <span className="text-orange-400">Weekday</span> then
          <select
            id="Weekday"
            onChange={handleFormUpload}
            data-te-select-init
            class="mx-2 relative cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
          >
            {data &&
              data?.data.map(
                (
                  { day_type_id, name, start, end, in_clinic, updated_at },
                  index
                ) => {
                  return (
                    <>
                      <option selected>{name}</option>
                    </>
                  );
                }
              )}
          </select>
          +
          <select
            name="Weekday"
            onChange={handleFormUpload}
            data-te-select-init
            class="mx-2 relative cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
          >
            {data &&
              data?.data.map(
                (
                  { day_type_id, name, start, end, in_clinic, updated_at },
                  index
                ) => {
                  return (
                    <>
                      <option>{name}</option>
                    </>
                  );
                }
              )}
          </select>
        </h1>
        <h1 class="m-6 text-black-800 mb-8 text-2xl font-bold sm:text-5xl md:mb-12 md:text-3xl">
          If <span className="text-orange-400">Weekend</span> then
          <select
            name="Weekday"
            onChange={handleFormUpload}
            data-te-select-init
            class="ml-2 relative cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
          >
            <option selected>Full-day (online)</option>
            <option selected>Half-day (online)</option>
            <option selected>Holiday</option>
            <option selected>Full-day (clinic)</option>
            <option selected>Half-day (clinic)</option>
          </select>
        </h1>

        {formData && (
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

export default SlotGenerationSettings;
