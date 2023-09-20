import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Cookies from "js-cookie";

const NewUserModal = (props) => {
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const delay = 1000;

    const timer = setTimeout(() => {
      const hasWelcomeBeenShownId = Cookies.get("rc_welcome_shown");
      if (!open && String(hasWelcomeBeenShownId) !== String(props.id)) {
        setOpen(true);
        Cookies.set("rc_welcome_shown", props.id); // setting id so that if same browser is used to sign-up different users, message still gets shown
      } else {
        setOpen(false);
      }
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
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

          <div className="mt-12 fixed inset-0 z-10 overflow-y-auto">
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
                <Card className="w-96 h-full">
                  <div className="flex justify-center">
                    <img
                      src={require("../../assets/img/elephant.png")}
                      alt="img-blur-shadow"
                      layout="fill"
                      className="w-3/4"
                    />
                  </div>
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      Hello, {props.name}!
                    </Typography>
                    <Typography>
                      Welcome to Random Capsule. We're here to help your with
                      you mental health needs and more!
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-md font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-blue-400 sm:mt-0 sm:w-auto"
                    >
                      Let's get started
                    </button>
                  </CardFooter>
                </Card>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default NewUserModal;
