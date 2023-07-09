import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import {
  AdjustmentsVerticalIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  FunnelIcon,
  InformationCircleIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import CalendarComponent from "./CalendarComponent";

const filters = [
  {
    id: "mode",
    name: "Mode of Session",
    options: [
      { value: "online", label: "Online (Video/Call/Chat)", checked: true },
      { value: "clinic", label: "In-clinic", checked: false },
    ],
  },
  {
    id: "time",
    name: "Time of day",
    options: [
      { value: "morning", label: "Morning", checked: true },
      { value: "afternoon", label: "Afternoon", checked: true },
      { value: "night", label: "Night", checked: true },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const BookingComponent = (props) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <>
      <div>
        {/* Mobile filter dialog */}
        {/* <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    

                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                      {option.label === "In-clinic" && (
                                        <div>Coming soon</div>
                                      )}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root> */}

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

            <button
              type="button"
              className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
            >
              <span className="sr-only">View grid</span>
              <div class="relative flex flex-col items-center group">
                <div class="relative flex flex-col items-center group">
                  <InformationCircleIcon
                    className="lg:hidden h-5 w-5"
                    aria-hidden="true"
                  />
                  <div class="absolute top-0 flex flex-col items-center hidden mt-6 group-hover:flex">
                    <div class="w-3 h-3 -mb-2 rotate-45 bg-gray"></div>
                    <span class="relative z-10 p-2 text-xs leading-none text-white text-left whitespace-no-wrap bg-white shadow-lg">
                      <ul role="list" class="list-disc space-y-2 text-sm ml-2 p-6">
                        <li class="text-gray-400">
                          <span class="text-gray-600">
                            Each session is of{" "}
                            <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                              1hr
                            </span>
                          </span>
                        </li>
                        <li class="text-gray-400">
                          <span class="text-gray-600">
                            Your timezone{" "}
                            <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                              {timeZone}
                            </span>
                          </span>
                        </li>
                        <li class="text-gray-400">
                          <span class="text-gray-600">
                            Please try keeping a gap of atleast{" "}
                            <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                              3
                            </span>{" "}
                            days between each session.
                          </span>
                        </li>
                      </ul>
                    </span>
                  </div>
                </div>
              </div>
            </button>
            {/* <button
              type="button"
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <span className="sr-only">Filters</span>
              <AdjustmentsVerticalIcon className="h-5 w-5" aria-hidden="true" />
            </button> */}
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4 xl:grid-cols-5">
             
              <form className="hidden lg:block mt-2">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  // className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                  className="space-y-4  pb-6 text-sm font-medium text-gray-900"
                >
                  <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                    <li class="text-gray-400">
                      <span class="text-gray-600">
                        Each session is of{" "}
                        <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                          1hr
                        </span>
                      </span>
                    </li>
                    <li class="text-gray-400">
                      <span class="text-gray-600">
                        Your timezone{" "}
                        <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                          {timeZone}
                        </span>
                      </span>
                    </li>
                    <li class="text-gray-400">
                      <span class="text-gray-600">
                        Please try keeping a gap of atleast{" "}
                        <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                          2
                        </span>{" "}
                        days between each session.
                      </span>
                    </li>
                  </ul>
                </ul>

                {/* {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  disabled={option.label === "In-clinic"}
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label === "In-clinic" ? (
                                    <div>
                                      {option.label}{" "}
                                      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                        Coming soon
                                      </span>
                                    </div>
                                  ) : (
                                    <>{option.label}</>
                                  )}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))} */}
              </form>
              <div className="2xl:col-span-3 lg:col-span-4">
                <CalendarComponent setSlotData={props.setSlotData}/>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default BookingComponent;
