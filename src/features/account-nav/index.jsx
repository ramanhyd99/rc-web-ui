import {
    CalendarDaysIcon,
    ClipboardDocumentCheckIcon,
    ClockIcon,
    PencilSquareIcon,
    UsersIcon
} from "@heroicons/react/24/outline";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const AccountNav = (props) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  console.log(location.pathname);

  const Menus = [
    { title: "Book Session", src: CalendarDaysIcon, location: "/booking" },
    {
      title: "My Sessions",
      src: ClipboardDocumentCheckIcon,
      location: "/my-sessions",
    },
    {
      title: "My Assignments",
      src: PencilSquareIcon,
      location: "/my-assignments",
    },
    {
      title: "My Schedule",
      src: ClockIcon,
      gap: true,
      location: "/my-schedule",
    },
    { title: "My Clients", src: UsersIcon, location: "/my-clients" },
  ];
  return (
    <>
      {/* NavBar for smaller screens */}
      <div className="sm:hidden ">
        <div class="bg-white pt-12 sm:pt-16 lg:pt-24">
          <nav class="sticky bottom-0 mx-auto flex flex-wrap w-full  gap-6 bg-white px-10  text-xs sm:max-w-md sm:rounded-t-xl sm:border-transparent sm:text-sm sm:shadow-2xl">
            {Menus.map((Menu, index) => (
              <Link
                to={Menu.location}
                key={index}
                class={`flex flex-col items-center gap-1 text-gray-400 transition duration-100  active:text-gray-600" ${
                  location.pathname === Menu.location
                    ? " text-blue-800"
                    : " hover:text-gray-500"
                }`}
              >
                <div className="h-8 w-8">
                  <Menu.src />
                </div>
                <span> {Menu.title}</span>
              </Link>
            ))}
          </nav>
          <span
            class={`mt-4 flex  w-3/4 mx-auto items-center justify-center text-center  rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20
            `}
          >
            We hope you are feeling safe here.
          </span>
        </div>
      </div>
      <div className="flex flex-row">
        <div
          className="md:block hidden border-gray-300 h-min-screen"
          style={{ border: ".5px solid #ccc" }}
        >
          <div
            className={` ${
              open ? "w-48" : "w-20 "
            } bg-white h-min-screen p-5 pt-8 relative duration-300`}
          >
            {/* <img
            src="./src/assets/control.png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          /> */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              // class="w-6 h-6"
              className={` w-4 h-4 absolute cursor-pointer -right-3 top-9  
            border-3 bg-gray-500 text-white rounded-full  ${
              open && "rotate-180"
            }`}
              onClick={() => setOpen(!open)}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>

            <div className="flex gap-x-4 items-center"></div>
            <ul className="pt-6">
              {Menus.map((Menu, index) => (
                <Link
                  to={Menu.location}
                  onHover
                  key={index}
                  className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white  text-gray-700 text-sm items-center gap-x-2 
              ${Menu.gap ? "mt-9 " : ""} ${index === 0 && "bg-light-white"}  ${
                    location.pathname === Menu.location
                      ? "bg-blue-100 text-blue-800"
                      : " hover:bg-gray-100"
                  }`}
                >
                  <div
                    className="h-6 w-6
                  "
                  >
                    <div class="relative flex flex-col items-center group">
                      <Menu.src />
                      {!open && (
                        <div class="absolute left-0 flex items-center hidden ml-6 group-hover:flex">
                          <div class="w-3 h-3 -mr-2 rotate-45"></div>
                          <span class="relative z-10 p-2 text-sm leading-none text-black whitespace-no-wrap  ">
                            {Menu.title}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-left duration-200 text-left flex flex-wrap text-sm`}
                  >
                    {Menu.title}
                  </span>
                </Link>
              ))}

              {/* <span class="mt-10 inline-flex text-center items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                We hope you are feeling safe here!
                </span> */}

              <span
                class={`mt-32 inline-flex text-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20
            ${!open && "hidden"}`}
              >
                We hope you are feeling safe here.
              </span>

              {/* <div
                className={`${
                  open && "hidden"
                } mt-40 flex items-center justify-center text-center`}
              >
                <div class="group flex relative">
                  <InformationCircleIcon className="h-6 w-6 text-green-700" />
                  <span
                    class="group-hover:opacity-100 transition-opacity  bg-green-50 px-2 text-sm text-green-700 rounded-md absolute left-1/2 
    translate-x-1/2 -translate-y-1/2 opacity-0 m-0 mx-auto"
                  >
                    We hope you are feeling safe here.
                  </span>
                </div>
              </div> */}
            </ul>
          </div>
        </div>
        <div className="w-full">{props.children}</div>
      </div>
    </>
  );
};

export default AccountNav;
