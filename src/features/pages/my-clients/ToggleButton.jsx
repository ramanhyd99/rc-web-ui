import { classNames } from "../../../utils";
import { useEffect, useState } from "react";
import { useUpdateFreeFollowUpMutation } from "../../../apis/user";

const FreeSessionToggle = (props) => {
  const [toggled, setToggled] = useState(props.isToggled);

  const [updateFreeFollowUp, { isError, isLoading }] =
    useUpdateFreeFollowUpMutation();

  const handleOnToggle = () => {
    updateFreeFollowUp({ userId: props.id });
    // if (!isError && !isLoading) setToggled(!toggled);
  };

  return (
    <div class="flex h-6 items-center gap-x-2">
      <button
        type="button"
        onClick={handleOnToggle}
        class={classNames(
          "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
          toggled ? "bg-blue-400" : "bg-gray-200"
        )}
        value={true}
      >
        <span class="sr-only">Agree to policies</span>
        <span
          aria-hidden="true"
          class={classNames(
            " h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out",
            toggled ? "translate-x-4" : "translate-x-0"
          )}
        ></span>
      </button>

      {toggled && (
        <span
          class={` rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20
   `}
        >
          1 free session
        </span>
      )}
    </div>
  );
};

export default FreeSessionToggle;
