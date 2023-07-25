import { Menu, Transition } from "@headlessui/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HomeIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Spinner } from "@material-tailwind/react";
import {
  add,
  addHours,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
} from "date-fns";
import { Fragment, useState } from "react";
import {
  useDeleteSlotBySlotIdMutation,
  useGenerateSlotForDateMutation,
  useGetSlotsForDateQuery,
} from "../../../apis/rtk-apis";
import { DefaultSlotTimings } from "./BookingUtils";

const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; // Output: "America/New_York"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CalendarComponent = (props) => {
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  const { data, isFetching } = useGetSlotsForDateQuery({
    date_str: format(selectedDay, "dd MMMM, yyy"),
  });

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  return (
    <div className="pt-0">
      <div className="max-w-lg px-4 mx-auto sm:px-7 md:max-w-4xl lg:max-w-6xl md:px-6">
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
          <div className="md:pr-14">
            <div className="flex items-center">
              <h2 className="flex-auto font-semibold text-gray-900 text-lg lg:text-2xl ml-5">
                {format(firstDayCurrentMonth, "MMMM yyyy")}
              </h2>
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Previous month</span>
                <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                onClick={nextMonth}
                type="button"
                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Next month</span>
                <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <div className="grid grid-cols-7 mt-10 text-xs lg:text-sm xl:text-md leading-6 text-center text-gray-500">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-sm xl:text-md">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    "py-1.5 2xl:py-2.0"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={classNames(
                      isEqual(day, selectedDay) && "text-white",
                      !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        "text-red-500",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        "text-gray-900",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        "text-gray-400",
                      isEqual(day, selectedDay) &&
                        isToday(day) &&
                        "bg-blue-500",
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        "bg-gray-900",
                      !isEqual(day, selectedDay) && "hover:bg-gray-200",
                      (isEqual(day, selectedDay) || isToday(day)) &&
                        "font-semibold",
                      "mx-auto flex h-8 w-8 2xl:h-10 2xl:w-10 items-center justify-center rounded-full"
                    )}
                  >
                    <time dateTime={format(day, "yyyy-MM-dd")}>
                      {format(day, "d")}
                    </time>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div>
            <section className="mt-12 md:mt-0 md:pl-14 text-center md:text-left">
              <h2 className="flex justify-center md:justify-start font-semibold ml-6 md:ml-7 mr-7 md:mr-0 text-gray-900 xl:text-md 2xl:text-lg">
                <p className="mr-1">Slots for</p>
                <time dateTime={format(selectedDay, "yyyy-MM-dd")}>
                  {format(selectedDay, "MMM dd, yyy")}
                </time>
              </h2>
              <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
                {isFetching ? (
                  <>
                    {Array.from({ length: 4 }).map((_, index) => (
                      <SlotsLoading key={index} />
                    ))}
                  </>
                ) : (
                  <>
                    {data && data?.data.length > 0 ? (
                      data?.data.map(({ slot_id, start, location, date }) => {
                        return (
                          <>
                            <p>
                              <Slot
                                start={start}
                                location={location}
                                id={slot_id}
                                date={date}
                                formattedDate={format(
                                  selectedDay,
                                  "MMM dd, yyy"
                                )}
                                setSlotData={props.setSlotData}
                                isAdmin={props.isAdmin}
                              />
                            </p>
                          </>
                        );
                      })
                    ) : (
                      <p className="ml-0 md:ml-8">No slots for this day.</p>
                    )}
                    {props.isAdmin && (
                      <AddSlot date={format(selectedDay, "MMM dd, yyy")} />
                    )}
                  </>
                )}
              </ol>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

function Slot({ start, location, id, date, ...props }) {
  const startTime = new Date(`${date}T${start}Z`); //sets the time in local timezone
  const formattedStartTimeForTimeZone = format(startTime, "h:mm a");

  const toTime = addHours(startTime, 1);
  const formattedToTimeForTimeZone = format(toTime, "h:mm a");

  const formattedDateForTimezone = format(startTime, "MMM dd, yyy"); //sets the date in local timezone
  const formattedDate = format(new Date(`${date}T${start}`), "MMM dd, yyy"); //this comes from database as UTC

  const [deleteSlotBySlotId, { isLoading: isDeleting }] =
    useDeleteSlotBySlotIdMutation();

  const handleBookClick = () => {
    props.setSlotData({
      id: id,
      formattedDate: formattedDateForTimezone,
      formattedStartTime: formattedStartTimeForTimeZone,
      formattedToTime: formattedToTimeForTimeZone,
      timeZone: timeZone,
      location: timeZone === "Asia/Calcutta" ? location : "online", //in-clinic only for India clients
    });
  };

  const handleSlotDelete = () => {
    deleteSlotBySlotId({ slotId: id });
  };

  return (
    <li className="flex items-center justify-center md:justify-start ml-20 space-x-2 md:ml-0 px-4 py-2 mr-12 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100">
      {/* in-clinic only for India clients */}
      {(location === "clinic" || location === "both") &&
      timeZone === "Asia/Calcutta" ? (
        <div className="has-tooltip">
          <span className="tooltip rounded shadow-lg p-2 bg-black text-white text-xs -mt-10">
            In-clinic available
          </span>
          <HomeIcon className="flex-none w-5 h-5 text-gray-500 rounded-full" />
        </div>
      ) : (
        <>
          <div className="mr-5"></div>
        </>
      )}
      <div className="my-2 flex flex-col">
        <span
          className={`rounded-md bg-green-50 px-2 py-2 text-md font-medium text-green-700 ring-1 ring-inset ring-green-600/20
     `}
        >
          <span>
            {formattedStartTimeForTimeZone} - {formattedToTimeForTimeZone}
          </span>
        </span>
        {formattedDate !== formattedDateForTimezone && (
          <span className="text-xs text-center text-orange-600">tomorrow</span>
        )}
      </div>

      <Menu
        as="div"
        className="flex relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
      >
        <button
          onClick={handleBookClick}
          type="submit"
          className="ml-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Book
        </button>

        {props.isAdmin && (
          <button
            onClick={handleSlotDelete}
            disabled={isDeleting}
            className="ml-2 font-medium text-black-600 hover:text-red-500"
          >
            {!isDeleting ? <TrashIcon className="h-6 w-6" /> : <Spinner />}
          </button>
        )}

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/checkout"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Book
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </li>
  );
}

const AddSlot = ({ date }) => {
  const [startSlot, setStartSlot] = useState(DefaultSlotTimings[0]);
  const [endSlot, setEndSlot] = useState(DefaultSlotTimings[0]);

  const [generateSlotForDate, { isLoading: isGenerating }] =
    useGenerateSlotForDateMutation();

  const handleStartSlotChange = (event) => {
    setStartSlot(event.target.value);
  };

  const handleEndSlotChange = (event) => {
    setEndSlot(event.target.value);
  };

  const handleAddSlotsClick = () => {
    generateSlotForDate({
      date_str: date,
      start_str: startSlot,
      end_str: endSlot,
    });
  };

  return (
    <li className="flex items-center justify-center md:justify-start ml-20 space-x-2 md:ml-0 px-4 py-2 mr-12 group rounded-xl ">
      <div className="my-2 mr-0 flex flex-col">
        <span
          className={` rounded-md bg-blue-50 px-2 py-2 text-md font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20
     `}
        >
          <div className="flex">
            <select
              onChange={handleStartSlotChange}
              name="start_slot"
              className="block bg-gray-50 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              {DefaultSlotTimings.map((timing, index) => {
                return (
                  <option key={index} value={timing}>
                    {timing}
                  </option>
                );
              })}
            </select>
            <p className="mx-4 flex items-center ">-</p>
            <select
              onChange={handleEndSlotChange}
              name="end_slot"
              className="block bg-gray-50 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              {DefaultSlotTimings.map((timing, index) => {
                return (
                  <option key={index} value={timing}>
                    {timing}
                  </option>
                );
              })}
            </select>
          </div>
        </span>
      </div>

      <Menu as="div" className="flex relative ">
        <button
          onClick={handleAddSlotsClick}
          disabled={isGenerating}
          className="ml-0 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          {!isGenerating ? "Add" : <Spinner />}
        </button>
      </Menu>
    </li>
  );
};

function SlotsLoading() {
  return (
    <div className="flex justify-center md:justify-start">
      <div className="border border-blue-300 shadow rounded-md p-0 h-max max-w-sm w-1/2 mb-4">
        <div className="animate-pulse flex space-x-2">
          <div className="flex-1 space-y-3 py-1 mt-2">
            <div>
              <div className="h-4 bg-gray-300 rounded m-2"></div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

export default CalendarComponent;
