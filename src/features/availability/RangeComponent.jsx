import { fromTimeSlotsIn24HRFormat, toTimeSlotsIn24HRFormat } from "./AvailabilityUtils";
import { MinusCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const RangeComponent = (props) => {
  const [fromValue, setFromValue] = useState(props.from);
  const [toValue, setToValue] = useState(props.to);

  const handleFromChange = (event) => {
    const { value } = event.target;
    setFromValue(value);
    props.handleSlotUpdate(props.id, value, toValue);
  };

  const handleToChange = (event) => {
    const { value } = event.target;
    setToValue(value);
    props.handleSlotUpdate(props.id, fromValue, value);
  };

  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-1">
          <label
            for="first-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            From
          </label>
          <div className="mt-2">
            <select
              id="time_from"
              onChange={(value) => handleFromChange(value)}
              name="time_from"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              {fromTimeSlotsIn24HRFormat.map((hour) => (
                <option key={hour} value={hour}>
                  {hour}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="sm:col-span-1">
          <label
            for="last-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            To
          </label>
          <div className="mt-2">
            <select
              onChange={(value) => handleToChange(value)}
              id="time_to"
              name="time_to"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              {toTimeSlotsIn24HRFormat.map((hour) => (
                <option key={hour} value={hour}>
                  {hour}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="sm:col-span-1">
          <div className="max-w-1 h-5 w-5 sm:mt-8">
            <MinusCircleIcon
              onClick={() => props.deleteFunc(props.id)}
              className="h-full w-full text-red-600"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RangeComponent;
