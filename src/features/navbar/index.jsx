import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BookOpenIcon,
  DocumentMagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { InstagramIcon, SpotifyIcon, WhatsappIcon } from "../common/svgs";

import { PhoneIcon } from "@heroicons/react/20/solid";
import { Avatar } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { connect, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { fetchUserInfo, logout } from "../../redux/slices/authSlice";
import { LocalStorageLoggedInKey } from "../../utils/constants";
import Button1 from "../common/styled-components/button1";

const navigation = [
  { id: 1, name: "Your Psychologist", to: "/your-psychologist", current: true },
  { id: 2, name: "Our Team", to: "/our-team", current: true },
  { id: 3, name: "FAQS", to: "/faqs", current: false },
  // { id: 4, name: "Library", to: "/library", current: false },
  { id: 4, name: "Contact Us", to: "/contact-us", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavBar = ({ userInfo }) => {
  const dispatch = useDispatch();

  //get userProfile each time page loads if it's already present
  //this prevents anyone from editing the localstorage
  useEffect(() => {
    try {
      if (userInfo) {
        dispatch(fetchUserInfo());
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  // this is to ensure we logout the user from all tabs if logged out from one.
  // the rc_logged_in token is set and removed on login/logout and we detect any changes in that here.
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === LocalStorageLoggedInKey) {
        if (!localStorage.getItem(LocalStorageLoggedInKey)) {
          dispatch(logout());
        } else window.location.assign("/booking");
      }
      // if someone removed the redux state also we log them out
      if (event.key === "persist:root") {
        if (!localStorage.getItem("persist:root")) {
          if (localStorage.getItem(LocalStorageLoggedInKey))
            localStorage.removeItem(LocalStorageLoggedInKey);
          // dispatch(logout());
          dispatch(logout());
        }
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    try {
      dispatch(logout());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <ToastContainer />
        <Disclosure
          as="nav"
          className="bg-white fixed top-0 w-full py-2 border-b -[1px] z-50"
        >
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                      <Link to="/home">
                        <img
                          className="block h-12 lg:h-16 w-auto"
                          src={require("../../assets/img/logo.png")}
                          alt="Random Capsule"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex space-x-4 items-center">
                        {navigation.map((item) => (
                          <Link
                            key={item.id}
                            to={item.to}
                            className={classNames(
                              item.current,
                              "text-black ",
                              "rounded-md px-3 py-2 text-sm font-medium",
                              "px-3",
                              "relative group"
                            )}
                          >
                            {item.name}
                          </Link>
                        ))}
                        <div className="relative group">
                          <div className="flex items-center">
                            <button
                              className="flex items-center gap-x-1 text-sm font-medium leading-6 text-black"
                              aria-expanded="false"
                            >
                              Resources
                            </button>
                            <svg
                              className="h-5 w-5 text-gray-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className="group-hover:block dropdown-menu absolute hidden h-auto w-screen max-w-sm rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 ">
                            <div className="p-1">
                              <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                <div className="flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                  <DocumentMagnifyingGlassIcon />
                                </div>
                                <div className="flex-auto">
                                  <a
                                    href="https://ijcspub.org/viewfull.php?&p_id=IJCSP23A1290"
                                    className="block font-semibold text-gray-900"
                                    target={"_blank"}
                                    rel="noopener noreferrer"
                                  >
                                    My Publications
                                    <span className="absolute inset-0"></span>
                                  </a>
                                  <p className="mt-1 text-gray-600">
                                    View my publications to international
                                    journal of current science
                                  </p>
                                </div>
                              </div>
                              <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                <div className="flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                  <BookOpenIcon />
                                </div>
                                <div className="flex-auto">
                                  <a
                                    href="/library"
                                    className="block font-semibold text-gray-900"
                                  >
                                    Library
                                    <span className="absolute inset-0"></span>
                                  </a>
                                  <p className="mt-1 text-gray-600">
                                    Checkout a variety of online & free
                                    psychology resources to read and download.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:block h-6 mx-5 border-l border-gray-300"></div>
                    <div className="hidden sm:flex flex items-center flex-wrap">
                      <motion.a
                        href="/contact-us"
                        target={"_blank"}
                        rel="noopener noreferrer"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <PhoneIcon className="h-5 w-5 text-blue-500" />
                      </motion.a>
                      <motion.a
                        href="https://wa.me/918867439162"
                        target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <WhatsappIcon />
                      </motion.a>

                      <motion.a
                        href="https://open.spotify.com/show/6RcZys27bOqkHuiWVrR6zO?si=7831be0129f14077"
                        target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <SpotifyIcon />
                      </motion.a>
                      <motion.a
                        href="https://www.instagram.com/random_capsule/"
                        target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <InstagramIcon />
                      </motion.a>
                    </div>
                    <Button1 text="Book Session" />
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex rounded-full bg-gray-1000 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-1 focus:ring-offset-gray-800">
                          <span className="sr-only">Open user menu</span>
                          {userInfo != null && userInfo.profile_picture ? (
                            <Avatar
                              className="h-9 w-9 rounded-full"
                              src={userInfo.profile_picture}
                              alt="profile picture"
                            />
                          ) : (
                            // uncomment for notifications
                            // <Badge
                            //   content="5"
                            //   overlap="circular"
                            //   placement="bottom-end"
                            // >
                            //   <Avatar
                            //     src={userInfo.profile_picture}
                            //     alt="profile picture"
                            //   />
                            // </Badge>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="gray"
                              className="h-9 w-9 rounded-full"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-3 origin-top-right inline-block rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <div className="w-32">
                                {userInfo ? (
                                  <div className="absolute right-0 z-10 mt-2 w-auto origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div>
                                      <span
                                        className="text-gray-700 block px-4 py-2 text-sm justify-center"
                                        role="menuitem"
                                        tabindex="-1"
                                        id="menu-item-0"
                                      >
                                        <span className="items-center text-center flex justify-center">
                                          Signed in as
                                        </span>
                                        <b>{userInfo.email}</b>
                                      </span>
                                    </div>
                                    <div>
                                      <button
                                        onClick={handleLogout}
                                        className={classNames(
                                          "px-4 py-2 text-sm  w-full text-red-600 bg-gray-50 hover:bg-gray-100"
                                        )}
                                      >
                                        Logout
                                      </button>
                                    </div>
                                  </div>
                                ) : (
                                  <a
                                    href="/login"
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "inline-block px-4 py-2 text-sm text-gray-700 w-full"
                                    )}
                                  >
                                    Sign-In
                                  </a>
                                )}
                              </div>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>
              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {navigation.map((item) => (
                    <Link
                      to={item.to}
                      className={classNames(
                        item.current,
                        "w-1/2 text-black  hover:text-blue-500",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="relative group px-3 py-2 ">
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="flex items-center gap-x-1 text-md font-semibold leading-6 text-gray-900"
                        aria-expanded="false"
                      >
                        Library
                      </button>
                      <svg
                        className="h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="group-hover:block dropdown-menu absolute hidden h-auto w-4/5 max-w-md rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                      <div className="p-1">
                        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                          <div className="flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <BookOpenIcon />
                          </div>
                          <div className="flex-auto">
                            <a
                              href="https://ijcspub.org/viewfull.php?&p_id=IJCSP23A1290"
                              className="block font-semibold text-gray-900"
                              target={"_blank"}
                              rel="noopener noreferrer"
                            >
                              My Publications
                              <span className="absolute inset-0"></span>
                            </a>
                            <p className="mt-1 text-gray-600">
                              View my publications to international journal of
                              current science
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Link
                    to="/booking"
                    className="mx-auto my-0  ml-4 space-y-1 px-2 pb-3 pt-2  text-white bg-blue-500 border-0 focus:outline-none hover:bg-blue-400 rounded "
                  >
                    Book Session
                  </Link>
                </div>
                <div>
                  <div className="sm:flex flex items-center flex-wrap ml-3 mt-6 space-x-2">
                    <motion.a
                      href="/contact-us"
                      target={"_blank"}
                      whileHover={{ y: -2 }}
                    >
                      <PhoneIcon className="h-5 w-5 text-gray-800" />
                    </motion.a>
                    <motion.a
                      href="https://wa.me/918867439162"
                      target={"_blank"}
                      whileHover={{ y: -2 }}
                    >
                      <WhatsappIcon />
                    </motion.a>
                    <motion.a
                      href="https://open.spotify.com/show/6RcZys27bOqkHuiWVrR6zO?si=7831be0129f14077"
                      target={"_blank"}
                      whileHover={{ y: -2 }}
                    >
                      <SpotifyIcon />
                    </motion.a>
                    <motion.a
                      href="https://www.instagram.com/random_capsule/"
                      target={"_blank"}
                      whileHover={{ y: -2 }}
                    >
                      <InstagramIcon />
                    </motion.a>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.persistedReducer.user.userInfo,
  };
};
export default connect(mapStateToProps)(NavBar);
