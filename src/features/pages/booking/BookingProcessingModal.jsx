import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useLockSlotForDateMutation } from "../../../apis/rtk-apis";

export default function BookingProcessingModal(props) {
  let [isOpen, setIsOpen] = useState(true);

  const [lockSlotForDate, { data, error, isLoading }] =
    useLockSlotForDateMutation();

  function closeModal() {
    // setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    const delay = 2000;

    const timer = setTimeout(() => {
      lockSlotForDate({ slot_id: props.slotData.slot_id });
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!error && data) {
      props.setSlotData({
        ...props.slotData,
        lock_uuid: data.data.lock_uuid,
      });
      props.setProcessingSlot("done");
    } else if (error) {
      props.setSlotData(null);
    }
  }, [data, error, isLoading]);

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center !bg-blue-50">
        <button
          type="button"
          onClick={openModal}
          className="rounded-lg bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
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
                    {/* <video preload="yes" autoPlay loop muted playsInline>
                      <source
                        src={require("../../../assets/img/penguin_booking.mp4")}
                        type="video/mp4"
                      />
                    </video> */}
                    <div className="text-center text-xl ">
                      Booking your slot...
                    </div>
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
