import React, { useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { classNames } from "../../utils";
import { generateTimeSlots, TimeSlot, typesOfDays } from "./AvailabilityUtils";
import RangeComponent from "./RangeComponent";

const SetAvailabilityComponent = (props) => {
  const [formError, setFormError] = useState(false);
  const [typeOfDay, setTypeOfDay] = useState(null); //todo get from backend
  const [customRows, setCustomRows] = useState([]); //todo get from backend
  const [slots, setSlots] = useState([]); //todo get from backend

  useEffect(() => {
    let customSlots = [];
    customRows.forEach((component) => {
      const { id, from, to } = component.props;

      console.log(from, to);

      if (TimeSlot.compareHours(from, to) == 1) {
        setFormError(true);
      } else if (customRows.length == 0) {
        setFormError(true);
      } else {
        setFormError(false);
        customSlots.push(new TimeSlot(from, to));
      }
    });

    setSlots(customSlots);
  }, [customRows]);

  const handleTypeOfDaySelect = (value, from, to) => {
    setTypeOfDay(value);
    console.log(value);
    if (value !== "Custom") {
      setFormError(false);
      setSlots([new TimeSlot(from, to)]);
    } else if (value === "Custom") {
      setFormError(true);
      setSlots([]);
      setCustomRows([]); //todo replace with backend data
    }
  };

  const handleCustomSlotUpdate = (index, from, to) => {
    setCustomRows((prevRows) => {
      const updatedRows = prevRows.map((item, i) => {
        if (item.props.id === index) {
          return React.cloneElement(item, { from, to });
        }
        return item;
      });
      return updatedRows;
    });
  };

  const handleCustomRowAddition = (event) => {
    const uniqueId = uuidv4();
    setCustomRows([
      ...customRows,
      <RangeComponent
        id={uniqueId}
        deleteFunc={handleCustomRowDeletion}
        handleSlotUpdate={handleCustomSlotUpdate}
        from="07:00"
        to="08:00"
      />,
    ]);
  };

  const handleCustomRowDeletion = (index) => {
    setCustomRows((prevRows) =>
      prevRows.filter((item) => item.props.id !== index)
    );

    if (customRows.length == 0) setFormError(true);
  };

  const handleFormSubmit = () => {
    if (customRows.length == 0) {
      setFormError(true);
      return;
    }

    customRows.forEach((component) => {
      const { id, from, to } = component.props;

      console.log(from, to);
    });
  };

  return (
    <>
      <form>
        <div className="grid sm:grid-cols-6  border-b border-gray-900/10 pb-12">
          <div
            class="space-y-12 sm:col-span-4"
            // style={{ border: "2px solid magenta" }}
          >
            <div class=" pb-0">
              <h2 class="text-base font-semibold leading-7 text-gray-900">
                Set your schedule for:{" "}
                <span
                  class={`mt-2 inline-flex text-center text-sm rounded-md bg-green-50 px-2 py-1  font-medium text-green-700 ring-1 ring-inset ring-green-600/20`}
                >
                  Fri, 26 May
                </span>
              </h2>
              {/* <p class="mt-1 text-sm leading-6 text-gray-600">
            Add/remove rows and choose a range or multiple ranges. Ex: 5:00pm -
            7:00pm
          </p> */}
              <div class="mt-2 space-y-10">
                <fieldset>
                  <div class="mt-6 space-y-6">
                    {typesOfDays.map((item, index) => (
                      <div class="flex items-center gap-x-3">
                        <input
                          id="push-email"
                          name="push-notifications"
                          type="radio"
                          class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          onChange={() =>
                            handleTypeOfDaySelect(item.name, item.from, item.to)
                          }
                          value={item.name}
                        />
                        <label class="block text-sm font-medium leading-6 text-gray-900">
                          {item.name}{" "}
                          {item.from && item.to
                            ? "(" + item.from + " - " + item.to + ")"
                            : ""}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>
            </div>

            {typeOfDay === "Custom" && (
              <>
                {customRows.map((item, index) => (
                  <div className="w-full" key={index}>
                    {item}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleCustomRowAddition}
                  class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Add Row
                </button>
              </>
            )}
          </div>

          <div
            className="sm:col-span-2"
            // style={{ border: "2px solid magenta" }}
          >
            <h2 class="text-base font-semibold leading-7 text-gray-900 ">
              Preview Slots <small>(1hr each)</small>
            </h2>

            <div className="block space-x-2">
              {generateTimeSlots(slots).map((item, index) => (
                <span
                  className={classNames(
                    "mt-2 inline-flex text-center text-sm rounded-md  px-2 py-1  font-medium ring-1 ring-inset ring-green-600/20",
                    item.booked
                      ? "bg-gray-50 text-gray-700 "
                      : " bg-green-50 text-green-700 "
                  )}
                >
                  {item.from} {parseInt(item.from.split(":")[0]) > 11 ? "PM" : "AM"}
                </span>
              ))}

              {generateTimeSlots.length == 0 && <p>as</p>}
            </div>
          </div>
        </div>
        <div class="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            class="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={formError}
            onClick={handleFormSubmit}
            class={classNames(
              "rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
              formError
                ? "cursor-not-allowed bg-gray-500"
                : "bg-indigo-600  hover:bg-indigo-500"
            )}
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default SetAvailabilityComponent;
