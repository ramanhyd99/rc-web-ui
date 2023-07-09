import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  addHours,
  subHours,
  subMinutes,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DevicePhoneMobileIcon,
  EllipsisVerticalIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useGetSlotsForDateQuery } from "../../../apis/user";
import Loading from "../../common/loading";

const currentDate = new Date();
const timezoneOffset = currentDate.getTimezoneOffset();
console.log(timezoneOffset); // Output: -240 (for GMT-4:00)

const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log(timeZone); // Output: "America/New_York"

const meetings = [
  {
    id: 1,
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2023-06-30T09:00",
    endDatetime: "2023-05-30T10:00",
  },
  {
    id: 2,
    name: "Michael Foster",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2023-06-30T10:00",
    endDatetime: "2023-06-30T11:00",
  },
  {
    id: 3,
    name: "Dries Vincent",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2023-06-30T12:00",
    endDatetime: "2023-06-30T13:00",
  },

  {
    id: 4,
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2023-06-30T15:00",
    endDatetime: "2023-06-30T16:00",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CalendarComponent = (props) => {
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  const { data, error, isFetching } = useGetSlotsForDateQuery({
    date_str: format(selectedDay, "dd MMMM, yyy"),
  });

  console.log(data);

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

  let selectedDayMeetings = meetings.filter((meeting) =>
    isSameDay(parseISO(meeting.startDatetime), selectedDay)
  );

  return (
    <div className="pt-0">
      <div className="max-w-lg px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
          <div className="md:pr-14">
            <div className="flex items-center">
              <h2 className="flex-auto font-semibold text-gray-900 text-lg ml-5">
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
            <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-sm">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    "py-1.5"
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
                      "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                    )}
                  >
                    <time dateTime={format(day, "yyyy-MM-dd")}>
                      {format(day, "d")}
                    </time>
                  </button>

                  <div className="w-1 h-1 mx-auto mt-1">
                    {meetings.some((meeting) =>
                      isSameDay(parseISO(meeting.startDatetime), day)
                    ) && (
                      <div className="w-1 h-1 rounded-full bg-sky-500"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <section className="mt-12 md:mt-0 md:pl-14 text-center md:text-left">
              <h2 className="font-semibold text-gray-900">
                Slots for{" "}
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
                              />
                            </p>
                          </>
                        );
                      })
                    ) : (
                      <p>No slots for this day.</p>
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
  const formattedStartTimeForTimeZone = format(startTime, "h a");

  const toTime = addHours(startTime, 1);
  const formattedToTimeForTimeZone = format(toTime, "h a");

  const formattedDateForTimezone = format(startTime, "MMM dd yyy"); //sets the date in local timezone
  const formattedDate = format(new Date(date), "MMM dd yyy"); //this comes from database as UTC

  const handleBookClick = () => {
    console.log(id);
    props.setSlotData({
      id: id,
      formattedDate: formattedDateForTimezone,
      formattedStartTime: formattedStartTimeForTimeZone,
      formattedToTime: formattedToTimeForTimeZone,
      timeZone: timeZone,
      location: timeZone === "Asia/Calcutta" ? location : "online", //in-clinic only for India clients
    });
  };


  return (
    <li className="flex items-center justify-center md:justify-start ml-8 md:ml-0 px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100">
      {/* in-clinic only for India clients */}
      {(location == "clinic" || location == "both") && timeZone === "Asia/Calcutta" ? (
        <div class="has-tooltip">
          <span class="tooltip rounded shadow-lg p-2 bg-black text-white text-xs -mt-10">
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
          class={` rounded-md bg-green-50 px-2 py-2 text-md font-medium text-green-700 ring-1 ring-inset ring-green-600/20
     `}
        >
          {formattedStartTimeForTimeZone} - {formattedToTimeForTimeZone}
        </span>
        {formattedDate !== formattedDateForTimezone && (
          <span class="text-xs text-center text-orange-600">Next day</span>
        )}
      </div>

      <Menu
        as="div"
        className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
      >
        <button
          // to="/checkout"
          onClick={handleBookClick}
          type="submit"
          class="ml-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Book
        </button>

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

function SlotsLoading() {
  return (
    <div className="flex justify-center md:justify-start">
      <div class="border border-blue-300 shadow rounded-md p-0 h-max max-w-sm w-1/2 mb-4">
        <div class="animate-pulse flex space-x-2">
          <div class="flex-1 space-y-3 py-1 mt-2">
            <div>
              <div class="h-4 bg-slate-400 rounded m-2"></div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
// function Meeting({ meeting }) {
//   let startDateTime = parseISO(meeting.startDatetime);
//   let endDateTime = parseISO(meeting.endDatetime);

//   return (
//     <li className="flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100">
//       {/* <img
//         src={meeting.imageUrl}
//         alt=""
//         className="flex-none w-10 h-10 rounded-full"
//       /> */}
//       <div class="has-tooltip">
//         <span class="tooltip rounded shadow-lg p-2 bg-black text-white text-xs -mt-10">
//           In-clinic available
//         </span>
//         <HomeIcon className="flex-none w-5 h-5 text-gray-500 rounded-full" />
//       </div>
//       <div className="my-2">
//         {/* <p className="text-gray-900">{meeting.name}</p> */}
//         <span
//           class={` rounded-md bg-green-50 px-2 py-2 text-md font-medium text-green-700 ring-1 ring-inset ring-green-600/20
//    `}
//         >
//           {format(startDateTime, "h:mm a")}
//           <time dateTime={meeting.startDatetime}></time> -{" "}
//           <time dateTime={meeting.endDatetime}>
//             {format(endDateTime, "h:mm a")}
//           </time>
//         </span>
//         {/* <p className="mt-0.5">
//           <time dateTime={meeting.startDatetime}></time> -{" "}
//           <time dateTime={meeting.endDatetime}>
//             {format(endDateTime, "h:mm a")}
//           </time>
//         </p> */}
//       </div>

//       <Menu
//         as="div"
//         className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
//       >
//         <Link
//           to="/checkout"
//           type="submit"
//           class="ml-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
//         >
//           Book
//         </Link>

//         <Transition
//           as={Fragment}
//           enter="transition ease-out duration-100"
//           enterFrom="transform opacity-0 scale-95"
//           enterTo="transform opacity-100 scale-100"
//           leave="transition ease-in duration-75"
//           leaveFrom="transform opacity-100 scale-100"
//           leaveTo="transform opacity-0 scale-95"
//         >
//           <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
//             <div className="py-1">
//               <Menu.Item>
//                 {({ active }) => (
//                   <a
//                     href="/checkout"
//                     className={classNames(
//                       active ? "bg-gray-100 text-gray-900" : "text-gray-700",
//                       "block px-4 py-2 text-sm"
//                     )}
//                   >
//                     Book
//                   </a>
//                 )}
//               </Menu.Item>
//             </div>
//           </Menu.Items>
//         </Transition>
//       </Menu>
//     </li>
//   );
// }

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
