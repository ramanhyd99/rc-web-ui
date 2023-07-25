import {
  CalendarDaysIcon,
  ChartBarIcon,
  ClipboardDocumentCheckIcon,
  PencilSquareIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

import { useState } from "react";
import { connect } from "react-redux";
import { Link, Navigate, useLocation } from "react-router-dom";
import NewUserModal from "./NewUserModal";

const AccountNav = ({ userInfo, ...props }) => {
  const location = useLocation();
  const [open] = useState(true);

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
      title: "My Clients",
      src: UsersIcon,
      gap: true,
      location: "/my-clients",
      adminOnly: true,
    },
    {
      title: "Dashboard",
      src: ChartBarIcon,
      location: "/dashboard",
      adminOnly: true,
    },
    // {
    //   title: "Set Schedule",
    //   src: WrenchIcon,
    //   location: "/set-schedule",
    //   adminOnly: true,
    // },
    // {
    //   title: "Settings",
    //   src: Cog6ToothIcon,
    //   location: "/settings",
    //   adminOnly: true,
    // },
  ];
  return (
    <>
      {userInfo && userInfo.isNewUser !== "true" && (
        <NewUserModal name={userInfo.name} />
      )}

      {userInfo ? (
        <>
          {/* NavBar for smaller screens */}
          <div className="sm:hidden ">
            <div className="bg-white pt-12 sm:pt-16 lg:pt-24">
              <nav className="sticky bottom-0 mx-auto flex flex-wrap w-full  gap-6 bg-white px-10  text-xs sm:max-w-md sm:rounded-t-xl sm:border-transparent sm:text-sm sm:shadow-2xl">
                {Menus.map((menu, index) => {
                  const shouldDisplay = menu.adminOnly
                    ? userInfo && userInfo.role === "admin"
                      ? true
                      : false
                    : true;

                  return shouldDisplay ? (
                    <Link
                      to={menu.location}
                      key={index}
                      className={`flex flex-col items-center gap-1 text-gray-400 transition duration-100  active:text-gray-600" ${
                        location.pathname === menu.location
                          ? " text-indigo-700"
                          : " hover:text-gray-500"
                      }`}
                    >
                      <div className="h-8 w-8">
                        <menu.src />
                      </div>
                      <span> {menu.title}</span>
                      asd
                    </Link>
                  ) : null;
                })}
              </nav>
              <span
                className={`mt-8 flex  w-3/4 mx-auto items-center justify-center text-center  rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20
            `}
              >
                We hope you are feeling safe here.
              </span>
            </div>
          </div>
          <div className="flex-1 flex ">
            <nav
              className="md:block hidden border-gray-300 h-max"
              // className="fixed z-0 overflow-y-auto"
              // style={{ border: ".5px solid #ccc" }} //undo for border
            >
              <div
                className={` ${
                  open ? "w-48" : "w-20 "
                } w-48 bg-white h-min-screen p-5 pt-2 relative duration-300`}
              >
                <div className="flex gap-x-4 items-center"></div>
                <ul className="pt-6">
                  {Menus.map((menu, index) => {
                    const shouldDisplay = menu.adminOnly
                      ? userInfo && userInfo.role === "admin"
                        ? true
                        : false
                      : true;

                    return shouldDisplay ? (
                      <Link
                        to={menu.location}
                        onHover
                        key={index}
                        className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white  text-gray-700 text-sm items-center gap-x-2 
              ${menu.gap ? "mt-9 " : ""} ${index === 0 && "bg-light-white"}  ${
                          location.pathname === menu.location
                            ? "bg-blue-100 text-blue-800"
                            : " hover:bg-gray-100"
                        }`}
                      >
                        <div
                          className="h-6 w-6
                  "
                        >
                          <div className="relative flex flex-col items-center group">
                            <menu.src />
                            {!open && (
                              <div className="absolute left-0 flex items-center hidden ml-6 group-hover:flex">
                                <div className="w-3 h-3 -mr-2 rotate-45"></div>
                                <span className="relative z-10 p-2 text-sm leading-none text-black whitespace-no-wrap  ">
                                  {menu.title}
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
                          {menu.title}
                        </span>
                      </Link>
                    ) : null;
                  })}
                  <span
                    className={`mt-32 inline-flex text-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20
            ${!open && "hidden"}`}
                  >
                    We hope you are feeling safe here.
                  </span>
                </ul>
              </div>
            </nav>
            {userInfo && (
              <div className="w-full overflow-auto">{props.children}</div>
            )}
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
