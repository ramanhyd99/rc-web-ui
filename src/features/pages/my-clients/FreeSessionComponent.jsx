import { useState } from "react";
import { useUpdateFreeFollowUpMutation } from "../../../apis/rtk-apis";
import { classNames } from "../../../utils";

const FreeSessionToggle = (props) => {
  const [toggled] = useState(props.isToggled);

  const [updateFreeFollowUp] = useUpdateFreeFollowUpMutation();

  const handleOnToggle = () => {
    updateFreeFollowUp({ userId: props.id });
    // if (!isError && !isLoading) setToggled(!toggled);
  };

  return (
    <div className="flex h-6 items-center gap-x-2">
      <button
        type="button"
        onClick={handleOnToggle}
        className={classNames(
          "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
          toggled ? "bg-blue-400" : "bg-gray-200"
        )}
        value={true}
      >
        <span className="sr-only">Agree to policies</span>
        <span
          aria-hidden="true"
          className={classNames(
            " h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out",
            toggled ? "translate-x-4" : "translate-x-0"
          )}
        ></span>
      </button>

      {toggled && (
        <span
          className={` rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20
   `}
        >
          1 free session
        </span>
      )}
    </div>
  );
};

export default FreeSessionToggle;
