import { useState } from "react";

const SettingsLayout = (props) => {
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(!selected);
  };

  return (
    <>
      <div className="bg-gray-100 rounded-md p-2 my-2">
        <div
          className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-blue-500 active:text-blue-600"
          onClick={handleSelect}
        >
          <span className="font-semibold transition duration-100 md:text-lg">
            {props.title}
          </span>

          {!selected ? (
            <span className="text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          ) : (
            <span className="text-blue-500 transform rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          )}
        </div>

        {selected && props.children}
      </div>
    </>
  );
};

export default SettingsLayout;
