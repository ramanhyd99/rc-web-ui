import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  InstagramIcon,
  SpotifyIcon,
  TwitterIcon,
  WhatsappIcon,
} from "../common/svgs";

import { motion } from "framer-motion";

const navigation = [
  { id: 1, name: "Your Psychologist", to: "/your-psychologist", current: true },
  { id: 2, name: "Our Team", to: "/about", current: true },
  { id: 3, name: "FAQS", to: "/faqs", current: false },
  { id: 4, name: "Library", to: "/library", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavBar = () => {
  return (
    <>
      <div>
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
                      <div className="flex space-x-4">
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
                      </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:block h-6 mx-5 border-l border-gray-300"></div>
                    <div className="hidden sm:flex flex items-center flex-wrap">
                      <motion.a
                        href="https://wa.me/918867439162"
                        target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <WhatsappIcon />
                      </motion.a>
                      <motion.a
                        href="https://wa.me/918867439162"
                        target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <TwitterIcon />
                      </motion.a>
                      <motion.a
                        href="https://wa.me/918867439162"
                        target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <SpotifyIcon />
                      </motion.a>
                      <motion.a
                        href="https://wa.me/918867439162"
                        target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <InstagramIcon />
                      </motion.a>
                    </div>

                    <Link
                      to="/booking"
                      className=" hidden sm:ml-6 sm:block  ml-auto text-white bg-blue-500 border-0 py-3 px-6  text-sm   focus:outline-none hover:bg-blue-400 rounded-lg  "
                    >
                      Book Session
                    </Link>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex rounded-full bg-gray-1000 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-1 focus:ring-offset-gray-800">
                          <span className="sr-only">Open user menu</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-9 w-9 rounded-full"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
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
                        <Menu.Items className="absolute right-0 z-10 mt-3 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/login"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Sign In
                              </a>
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
                        "text-black  hover:text-blue-500",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div>
                  <button className="mx-auto my-0  ml-4 space-y-1 px-2 pb-3 pt-2  text-white bg-blue-500 border-0 focus:outline-none hover:bg-blue-400 rounded ">
                    Book Session
                  </button>
                </div>
                <div>
                  <div className="sm:flex flex items-center flex-wrap m-3">
                    <motion.a
                      href="https://wa.me/918867439162"
                      target={"_blank"}
                      whileHover={{ y: -2 }}
                    >
                      <WhatsappIcon />
                    </motion.a>
                    <motion.a
                      href="https://wa.me/918867439162"
                      target={"_blank"}
                      whileHover={{ y: -2 }}
                    >
                      <TwitterIcon />
                    </motion.a>
                    <motion.a
                      href="https://wa.me/918867439162"
                      target={"_blank"}
                      whileHover={{ y: -2 }}
                    >
                      <SpotifyIcon />
                    </motion.a>
                    <motion.a
                      href="https://wa.me/918867439162"
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

export default NavBar;
