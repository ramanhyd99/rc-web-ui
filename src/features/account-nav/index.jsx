import {
  BriefcaseIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  ClipboardDocumentCheckIcon,
  CurrencyRupeeIcon,
  PencilSquareIcon,
  UsersIcon
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
      title: "My Schedule",
      src: BriefcaseIcon,
      gap: true,
      location: "/my-schedule",
      adminOnly: true,
    },
    {
      title: "My Clients",
      src: UsersIcon,
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
    //   title: "Payments",
    //   src: CurrencyRupeeIcon,
    //   location: "/payments",
    //   adminOnly: true,
    // },
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
    <div className="min-h-screen">
      {userInfo && userInfo.new_user && (
        <div>
          <NewUserModal name={userInfo.name} id={userInfo.id} />
        </div>
      )}

      {userInfo ? (
        <>
          {/* NavBar for smaller screens */}
          <div className="sm:hidden ">
            <div className="bg-white pt-12 sm:pt-16 lg:pt-24">
              {/* <nav className="sticky bottom-0 mx-auto flex flex-wrap w-full  gap-6 bg-white px-10  text-xs sm:max-w-md sm:rounded-t-xl sm:border-transparent sm:text-sm sm:shadow-2xl"> */}
              <nav className="flex justify-around px-4 text-xs">
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
                      className={`flex flex-col items-center gap-1  transition duration-100  active:text-gray-600" ${
                        location.pathname === menu.location
                          ? " text-blue-500"
                          : " hover:text-blue-400 text-gray-700"
                      }`}
                    >
                      <div className="h-8 w-8">
                        <menu.src />
                      </div>
                      <span> {menu.title}</span>
                    </Link>
                  ) : null;
                })}
              </nav>
              <span
                className={`mt-8 flex  w-3/5 mx-auto items-center justify-center text-center  rounded-md bg-blue-50 px-2 py-2 text-xs font-medium text-blue-300 font-quicksand ring-1 ring-inset ring-blue-600/20
            `}
              >
                "We hope you are feeling safe here."
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
                } w-48 3xl:w-64 bg-white h-min-screen p-5 pt-0 relative duration-300`}
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
                        className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white  text-black text-sm items-center gap-x-2  font-thin
              ${menu.gap ? "mt-9 " : ""} ${index === 0 && "bg-light-white"}  ${
                          location.pathname === menu.location
                            ? "bg-blue-100 text-black"
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
                    className={`mt-32 inline-flex text-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-300 font-quicksand ring-1 ring-inset ring-blue-600/20
            ${!open && "hidden"}`}
                  >
                    "We hope you are feeling safe here."
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.persistedReducer.user.userInfo,
  };
};

export default connect(mapStateToProps)(AccountNav);
