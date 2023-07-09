import {
  CalendarDaysIcon,
  ClipboardDocumentCheckIcon,
  Cog6ToothIcon,
  PencilSquareIcon,
  UsersIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";

import { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { api } from "../../apis";
import { redirect } from "react-router-dom";

const AccountNav = ({ userInfo, ...props }) => {
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!userInfo) {
  //     navigate("/login");
  //   }
  // }, [userInfo]);

  const Menus = [
    {
      title: "Book Session",
      src: CalendarDaysIcon,
      location: "/booking",
      adminOnly: false,
    },
    {
      title: "My Sessions",
      src: ClipboardDocumentCheckIcon,
      location: "/my-sessions",
      adminOnly: false,
    },
    {
      title: "My Assignments",
      src: PencilSquareIcon,
      location: "/my-assignments",
      adminOnly: false,
    },
    {
      title: "Set Schedule",
      src: WrenchIcon,
      gap: true,
      location: "/set-schedule",
      adminOnly: true,
    },
    {
      title: "My Clients",
      src: UsersIcon,
      location: "/my-clients",
      adminOnly: true,
    },
    {
      title: "Settings",
      src: Cog6ToothIcon,
      location: "/settings",
      adminOnly: true,
    },
  ];
  return (
    <>
      {userInfo ? (
        <>
          {/* NavBar for smaller screens */}
          <div className="sm:hidden ">
            <div class="bg-white pt-12 sm:pt-16 lg:pt-24">
              <nav class="sticky bottom-0 mx-auto flex flex-wrap w-full  gap-6 bg-white px-10  text-xs sm:max-w-md sm:rounded-t-xl sm:border-transparent sm:text-sm sm:shadow-2xl">
                {Menus.map((Menu, index) => {
                  const shouldDisplay = Menu.adminOnly
                    ? userInfo && userInfo.role === "admin"
                      ? true
                      : false
                    : true;

                  return shouldDisplay ? (
                    <Link
                      to={Menu.location}
                      key={index}
                      class={`flex flex-col items-center gap-1 text-gray-400 transition duration-100  active:text-gray-600" ${
                        location.pathname === Menu.location
                          ? " text-indigo-700"
                          : " hover:text-gray-500"
                      }`}
                    >
                      <div className="h-8 w-8">
                        <Menu.src />
                      </div>
                      <span> {Menu.title}</span>
                    </Link>
                  ) : null;
                })}
              </nav>
              <span
                class={`mt-8 flex  w-3/4 mx-auto items-center justify-center text-center  rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20
            `}
              >
                We hope you are feeling safe here.
              </span>
            </div>
          </div>
          <div class="flex-1 flex ">
            <nav
              className="md:block hidden border-gray-300 h-max "
              // class="order-first w-24 sm:w-32 bg-indigo-50 p-2 overflow-y-auto"

              // style={{ border: ".5px solid #ccc" }} //undo for border
            >
              <div
                className={` ${
                  open ? "w-48" : "w-20 "
                } bg-white h-min-screen p-5 pt-2 relative duration-300`}
              >
                <div className="flex gap-x-4 items-center"></div>
                <ul className="pt-6">
                  {Menus.map((Menu, index) => {
                    const shouldDisplay = Menu.adminOnly
                      ? userInfo && userInfo.role === "admin"
                        ? true
                        : false
                      : true;

                    return shouldDisplay ? (
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
                    ) : null;
                  })}
                  <span
                    class={`mt-32 inline-flex text-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20
            ${!open && "hidden"}`}
                  >
                    We hope you are feeling safe here.
                  </span>
                </ul>
              </div>
            </nav>
            {userInfo && <div className="w-full">{props.children}</div>}
          </div>
        </>
      ) : (
        <>
          <Navigate to="/login" />
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.persistedReducer.user.userInfo,
  };
};

export default connect(mapStateToProps)(AccountNav);
