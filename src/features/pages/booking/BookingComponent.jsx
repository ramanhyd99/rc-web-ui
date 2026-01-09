import { Menu, Transition } from "@headlessui/react";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import { Button } from "@material-tailwind/react";
import { Fragment } from "react";
import LoggedInPageHeader from "../../common/layout/LoggedInPageHeader";
import CalendarComponent from "./CalendarComponent";

const BookingComponent = (props) => {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <>
      <div>
        <main className="mx-auto max-w-9xl px-2 sm:px-6 lg:px-0">
          <div className="flex items-center">
            <Menu as="div" className="relative inline-block text-left">
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              ></Transition>
            </Menu>

            <div className="sm:hidden block w-full">
              <div className="sm:hidden flex justify-center items-center">
                <LoggedInPageHeader
                  title="Book Session"
                  className="!pt-4"
                />
              </div>
              <div
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 sm:ml-7 flex space-x-24"
              >
                <div className="relative flex flex-col items-center group hover:text-gray-500">
                  <div className="relative flex flex-col items-center group">
                    <div className="flex justify-center space-x-24  ">
                      <InformationCircleIcon
                        className="lg:hidden h-5 w-5 mt-2.5"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="absolute top-0 flex flex-col items-center hidden mt-6 group-hover:flex">
                      <div className="w-3 h-3 -mb-2 rotate-45 bg-gray"></div>
                      <span className="relative z-10 p-2 text-xs leading-none text-white text-left whitespace-no-wrap bg-white shadow-lg">
                        <ul className="list-disc space-y-2 text-sm ml-2 p-6">
                          <li className="text-gray-400">
                            <span className="text-gray-600">
                              Each session is of{" "}
                              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                1hr
                              </span>
                            </span>
                          </li>
                          <li className="text-gray-400">
                            <span className="text-gray-600">
                              Your timezone{" "}
                              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                {timeZone}
                              </span>
                            </span>
                          </li>
                          <li className="text-gray-400">
                            <span className="text-gray-600">
                              Please try keeping a gap of atleast{" "}
                              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                1
                              </span>{" "}
                              day between each session.
                            </span>
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <Button className="mt-2.5 sm:hidden bg-gradient-to-r from-blue-400 to-pink-300 text-sm pointer-events-none flex">
                    All sessions ₹529
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <section aria-labelledby="details" className="pb-24">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4 xl:grid-cols-5">
              <form className="hidden lg:block mt-2">
                <LoggedInPageHeader
                  title="Book Session"
                  className="!mt-0 !pt-0"
                />
                <ul className="space-y-4  pb-6 text-sm font-medium text-gray-900">
                  <ul className="list-disc space-y-2 pl-4 text-sm">
                    <li className="text-gray-400">
                      <span className="text-gray-600">
                        Each session is of{" "}
                        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                          1hr
                        </span>
                      </span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600">
                        Your timezone{" "}
                        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                          {timeZone}
                        </span>
                      </span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600">
                        Please try keeping a gap of atleast{" "}
                        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                          1
                        </span>{" "}
                        day between each session.
                      </span>
                    </li>
                  </ul>
                </ul>
                <div className="flex justify-center">
                  <Button className="bg-gradient-to-r from-blue-400 to-pink-300 text-sm pointer-events-none flex">
                    All sessions ₹529
                  </Button>
                </div>
              </form>
              <div className="xl:col-span-4 lg:col-span-3">
                <CalendarComponent
                  setSlotData={props.setSlotData}
                  isAdmin={props.isAdmin}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default BookingComponent;
