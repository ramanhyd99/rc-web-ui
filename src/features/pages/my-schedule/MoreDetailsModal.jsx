import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { InformationCircleIcon } from "@heroicons/react/20/solid";

const MoreDetailsModal = (props) => {
  const [open, setOpen] = useState(true);

  const closeModal = () => {
    setOpen(!open);
    props.closeModal(null);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                      <InformationCircleIcon className="text-blue-400 h-7" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3
                        className="text-base font-semibold leading-6 text-gray-900"
                        id="modal-title"
                      >
                        Booking #RC-00{props.data["booking_id"]}
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500 space-y-1">
                          <div className="text-blue-400">Date & time</div>
                          <div>
                            {props.data["formatted_date"]} |{" "}
                            {props.data["formatted_start_time"]} (
                            {props.data["timezone"]})
                          </div>
                          <div className="text-blue-400">Booked By</div>
                          <div>
                            {props.data["contact_details"]["name"]} (UserID:
                            {props.data["user_id"]})
                          </div>
                          <div className="text-blue-400">Booked For</div>
                          <div>
                            {props.data["contact_details"]["their_name"]
                              ? props.data["contact_details"]["their_name"]
                              : props.data["contact_details"]["name"]}{" "}
                            ({props.data["session_for"]})
                          </div>
                          <div className="text-blue-400">Contact Details:</div>
                          <div>
                            {props.data["session_for"] !== "self" && (
                              <div>
                                {props.data["contact_details"]["their_name"]}{" "}
                                {props.data["contact_details"]["their_phone"]}
                              </div>
                            )}
                            {props.data["contact_details"]["name"]}{" "}
                            {props.data["contact_details"]["phone"]}
                            <br />
                          </div>
                          <br />
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={closeModal}
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MoreDetailsModal;
