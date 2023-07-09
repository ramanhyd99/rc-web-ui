import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";

export default function BookingProcessingModal(props) {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    // setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    const delay = 3000; // Delay in milliseconds (3 seconds in this example)

    const timer = setTimeout(() => {
      props.setProcessingSlot(false);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center !bg-blue-200">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
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
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <img
                      src={require("../../../assets/img/penguin_booking.gif")}
                      loading="lazy"
                      alt="Booking..."
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="text-center">Booking your slot...</div>
                  </Dialog.Title>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
