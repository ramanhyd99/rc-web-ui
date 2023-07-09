import { RadioGroup, Tab } from "@headlessui/react";
import { useEffect, useState } from "react";
import { classNames } from "../../../utils";
import { Switch } from "@headlessui/react";
import {
  ChatBubbleBottomCenterIcon,
  ClockIcon,
  ComputerDesktopIcon,
  HomeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { connect } from "react-redux";
import { isValidEmail, isValidName, isValidNumber } from "./FormValidations";
import { useNavigate } from "react-router-dom";

const genders = [
  { value: "Female" },
  { value: "Male" },
  { value: "Other" },
  { value: "Prefer not say" },
];

const Checkout = ({ userInfo, ...props }) => {
  const [mode, setMode] = useState("video");
  const [agreementAccepted, setAgreementAccepted] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedFreeFollowUp, setSelectedFreeFollowUp] = useState(
    userInfo && userInfo.free_follow_up
  );
  const [finalPrice, setFinalPrice] = useState(
    selectedFreeFollowUp ? "0" : "329"
  );
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: userInfo ? userInfo.name : "",
    email: userInfo ? userInfo.email : "",
    phone: "",
    issue: "",
    their_name: "",
    their_email: "",
    their_phone: "",
  });

  const handleForMyselfFormChange = (event) => {
    if (event.target.name == "name" && !isValidName(event.target.value)) {
      setAgreementAccepted(false);
    }

    if (event.target.name == "phone" && !isValidNumber(event.target.value)) {
      setAgreementAccepted(false);
    }

    // using for someone else form
    if (selectedTab == 1) {
      if (
        event.target.name == "their_name" &&
        !isValidName(event.target.value)
      ) {
        setAgreementAccepted(false);
      }

      if (
        event.target.name == "their_phone" &&
        !isValidNumber(event.target.value)
      ) {
        setAgreementAccepted(false);
      }

      if (
        event.target.name == "their_email" &&
        !isValidEmail(event.target.value)
      ) {
        setAgreementAccepted(false);
      }
    }

    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    console.log(formData);
  };

  const handleAgreementAccepted = () => {
    console.log(selectedTab);
    if (selectedTab == 0) {
      if (
        isValidName(formData.name) &&
        isValidNumber(formData.phone) &&
        formData.email != null
      ) {
        setAgreementAccepted(!agreementAccepted);
      }
    } else if (selectedTab == 1) {
      if (
        isValidName(formData.name) &&
        isValidNumber(formData.phone) &&
        formData.email != null &&
        isValidName(formData.their_name) &&
        isValidNumber(formData.their_phone) &&
        isValidEmail(formData.their_email)
      ) {
        setAgreementAccepted(!agreementAccepted);
      } else {
        setAgreementAccepted(false);
      }
    }
  };

  const handleFreeFollowUpSelect = () => {
    if (selectedFreeFollowUp) {
      setSelectedFreeFollowUp(false);
      setFinalPrice("329");
    } else {
      setSelectedFreeFollowUp(true);
      setFinalPrice("0");
    }
  };

  const handleSelectedTabChange = (index) => {
    setSelectedTab(index);
    setAgreementAccepted(false);
  };

  useEffect(() => {
    console.log(props.slotData);
    if (!userInfo) navigate("/booking");
    window.scrollTo(0, 0);
  }, []);

  // useEffect(() => {
  //   const handleBeforeUnload = (event) => {
  //     event.preventDefault();
  //     const confirmationMessage = "Are you sure you want to leave this page?";
  //     event.returnValue = confirmationMessage;
  //     return event.returnValue;
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []);

  return (
    <>

      {userInfo && props.slotData && (
        <div className="bg-white">
          <div className="">
            <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-6">
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8"></div>
              <div className=" lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 ">
                <div>
                  <div className="space-y-6">
                    <div class="bg-white">
                      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                        <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
                          Who's this booking for?
                        </h2>

                        <form class="mx-auto max-w-lg rounded-lg border">
                          <Tab.Group
                            selectedIndex={selectedTab}
                            defaultIndex={1}
                            onChange={(index) => handleSelectedTabChange(index)}
                          >
                            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/30 p-1">
                              <Tab
                                className={classNames(
                                  "w-full rounded-lg py-2.5 text-md leading-5 text-black font-semibold",
                                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                                  selectedTab == 0
                                    ? "bg-white shadow"
                                    : "text-gray-50 hover:bg-white/[0.12] hover:text-white"
                                )}
                              >
                                For Myself
                              </Tab>
                              <Tab
                                className={classNames(
                                  "w-full rounded-lg py-2.5 text-md leading-5 text-black font-semibold",
                                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                                  selectedTab == 1
                                    ? "bg-white shadow"
                                    : "text-gray-50 hover:bg-white/[0.12] hover:text-white"
                                )}
                              >
                                For Someone Else
                              </Tab>
                            </Tab.List>
                            <Tab.Panels>
                              <div class="flex flex-col gap-4 p-4 md:p-8 ">
                                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                  <div>
                                    <label
                                      htmlFor="first-name"
                                      className="block text-sm font-semibold leading-6 text-gray-900"
                                    >
                                      Your Name{" "}
                                      <span className="text-red-400">*</span>
                                    </label>
                                    <div className="mt-2.5">
                                      <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleForMyselfFormChange}
                                        className={classNames(
                                          "block w-full bg-gray-50 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                          !isValidName(formData.name)
                                            ? "ring-2 ring-red-500"
                                            : ""
                                        )}
                                      />
                                    </div>
                                  </div>
                                  <div>
                                    <label
                                      htmlFor="last-name"
                                      className="block text-sm font-semibold leading-6 text-gray-900"
                                    >
                                      Your Email
                                    </label>
                                    <div className="mt-2.5">
                                      <input
                                        type="text"
                                        name="email"
                                        value={formData.email}
                                        disabled="true"
                                        onChange={handleForMyselfFormChange}
                                        className="cursor-not-allowed block w-full bg-gray-50 rounded-md border-0 px-3.5 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                  <div>
                                    <label
                                      htmlFor="first-name"
                                      className="block text-sm font-semibold leading-6 text-gray-900"
                                    >
                                      Your Number{" "}
                                      <span className="text-red-400">*</span>
                                    </label>
                                    <div className="mt-2.5">
                                      <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleForMyselfFormChange}
                                        className={classNames(
                                          "block w-full bg-gray-50 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                          !isValidNumber(formData.phone)
                                            ? "ring-1 ring-red-500"
                                            : ""
                                        )}
                                      />
                                    </div>
                                  </div>

                                  {selectedTab == 1 && (
                                    <div>
                                      <label
                                        htmlFor="last-name"
                                        className="block text-sm font-semibold leading-6 text-gray-900"
                                      >
                                        Your Relation With Them
                                      </label>
                                      <div className="mt-2.5">
                                        <select
                                          name="gender"
                                          value={formData.gender}
                                          onChange={handleForMyselfFormChange}
                                          className="block w-full bg-gray-50 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        >
                                          <option value="parent_guardian">
                                            Parent/Guardian
                                          </option>
                                          <option value="friend">Friend</option>
                                          <option value="other">Other</option>
                                        </select>
                                      </div>
                                    </div>
                                  )}
                                </div>

                                {selectedTab == 1 && (
                                  <>
                                    {" "}
                                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                      <div>
                                        <label
                                          htmlFor="first-name"
                                          className="block text-sm font-semibold leading-6 text-gray-900"
                                        >
                                          Their Name{" "}
                                          <span className="text-red-400">
                                            *
                                          </span>
                                        </label>
                                        <div className="mt-2.5">
                                          <input
                                            type="text"
                                            name="their_name"
                                            value={formData.their_name}
                                            onChange={handleForMyselfFormChange}
                                            className={classNames(
                                              "block w-full bg-gray-50 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                              !isValidName(formData.their_name)
                                                ? "ring-1 ring-red-500"
                                                : ""
                                            )}
                                          />
                                        </div>
                                      </div>
                                      <div>
                                        <label
                                          htmlFor="last-name"
                                          className="block text-sm font-semibold leading-6 text-gray-900"
                                        >
                                          Their Email{" "}
                                          <span className="text-red-400">
                                            *
                                          </span>
                                        </label>
                                        <div className="mt-2.5">
                                          <input
                                            type="text"
                                            name="their_email"
                                            value={formData.their_email}
                                            onChange={handleForMyselfFormChange}
                                            className={classNames(
                                              "block w-full bg-gray-50 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                              !isValidEmail(
                                                formData.their_email
                                              )
                                                ? "ring-1 ring-red-500"
                                                : ""
                                            )}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                      <div>
                                        <label
                                          htmlFor="first-name"
                                          className="block text-sm font-semibold leading-6 text-gray-900"
                                        >
                                          Their Number{" "}
                                          <span className="text-red-400">
                                            *
                                          </span>
                                        </label>
                                        <div className="mt-2.5">
                                          <input
                                            type="text"
                                            name="their_phone"
                                            value={formData.their_phone}
                                            onChange={handleForMyselfFormChange}
                                            className={classNames(
                                              "block w-full bg-gray-50 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                              !isValidNumber(
                                                formData.their_phone
                                              )
                                                ? "ring-1 ring-red-500"
                                                : ""
                                            )}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                )}

                                <div class="relative flex items-center justify-center">
                                  <span class="absolute inset-x-0 h-px bg-gray-300"></span>
                                  <span class="relative bg-white px-4 text-sm text-gray-400">
                                    Please briefly describe the issue
                                  </span>
                                </div>
                                <div className="mt-2.5">
                                  <textarea
                                    name="issue"
                                    placeholder={"Example: I am feeling..."}
                                    value={formData.issue}
                                    onChange={handleForMyselfFormChange}
                                    rows={4}
                                    className="block w-full bg-gray-50 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={""}
                                  />
                                </div>
                                <div className="flex">
                                  <Switch
                                    checked={agreementAccepted}
                                    onChange={handleAgreementAccepted}
                                    className={`${
                                      agreementAccepted
                                        ? "bg-blue-500"
                                        : "bg-gray-300"
                                    }
          relative inline-flex h-[24px] w-[46px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                                  >
                                    <span className="sr-only">Use setting</span>
                                    <span
                                      aria-hidden="true"
                                      className={`${
                                        agreementAccepted
                                          ? "translate-x-6"
                                          : "translate-x-0"
                                      }
            pointer-events-none inline-block h-[19px] w-[19px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                    />
                                  </Switch>

                                  <span className="ml-2">
                                    I accept the{" "}
                                    <a
                                      className="text-blue-400 hover:text-blue-600"
                                      href="/terms-and-conditions"
                                      target={"_blank"}
                                    >
                                      terms & conditions
                                    </a>{" "}
                                    and consult to counselling.
                                  </span>
                                </div>
                              </div>

                              {/* <Tab.Panel>form 2</Tab.Panel> */}
                            </Tab.Panels>
                          </Tab.Group>

                          <div class="flex items-center justify-center bg-gray-100 p-4">
                            <p class="text-center text-sm text-gray-500">
                              We respect your personal details.{" "}
                              <a
                                href="/privacy-policy"
                                target={"_blank"}
                                class="text-blue-400 transition duration-100 hover:text-blue-600 active:text-blue-700"
                              >
                                Our privacy policy
                              </a>
                            </p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:row-span-3 md:mt-4 mt-12">
                <p className="text-2xl tracking-tight font-semibold text-gray-900 mb-4 md:text-left text-center">
                  {props.slotData.formattedDate}
                </p>
                <div className="md:text-left text-center">
                  <span
                    class={`rounded-md bg-blue-50 px-2 py-1 text-md font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20 
   `}
                  >
                    {props.slotData.formattedStartTime} -{" "}
                    {props.slotData.formattedToTime}
                  </span>
                  <small>{" ("}{props.slotData.timeZone}{")"}</small>
                </div>
                <form className="mt-10">
                  <div className="md:text-left text-center">
                    <h3 className="text-sm font-medium text-gray-900">
                      Choose a mode
                    </h3>
                    <RadioGroup
                      value={mode}
                      onChange={setMode}
                      className="flex justify-center md:justify-start"
                    >
                      <div className="flex items-center space-x-5 mt-4 cursor-pointer">
                        <RadioGroup.Option value="chat">
                          {({ checked }) => (
                            <div
                              className={
                                checked
                                  ? "p-2 ring-2 ring-green-400 rounded-md bg-green-50"
                                  : ""
                              }
                            >
                              <ChatBubbleBottomCenterIcon className="md:h-7 h-10" />
                              <small>Chat</small>
                            </div>
                          )}
                        </RadioGroup.Option>
                        <RadioGroup.Option value="video">
                          {({ checked }) => (
                            <div
                              className={
                                checked
                                  ? "p-2 ring-2 ring-green-400 rounded-md bg-green-50"
                                  : ""
                              }
                            >
                              <ComputerDesktopIcon className="ml-1 md:h-7 h-10" />
                              <small>Video</small>
                            </div>
                          )}
                        </RadioGroup.Option>
                        <RadioGroup.Option value="call">
                          {({ checked }) => (
                            <div
                              className={
                                checked
                                  ? "p-2 ring-2 ring-green-400 rounded-md bg-green-50"
                                  : ""
                              }
                            >
                              <PhoneIcon className="md:h-7 h-10" />
                              <small>Call</small>
                            </div>
                          )}
                        </RadioGroup.Option>
                        {props.slotData.location === "clinic" ||
                        props.slotData.location === "both" ? (
                          <RadioGroup.Option value="clinic">
                            {({ checked }) => (
                              <div
                                className={
                                  checked
                                    ? "p-2 ring-2 ring-green-400 rounded-md bg-green-50"
                                    : ""
                                }
                              >
                                <HomeIcon className="md:h-7 h-10" />
                                <small>Clinic</small>
                              </div>
                            )}
                          </RadioGroup.Option>
                        ) : null}
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="mt-10 p-2 md:p-0">
                    <div className="flex items-center justify-between">
                      <div className="flex">
                        <input
                          name="free_follow_up"
                          type="checkbox"
                          onChange={handleFreeFollowUpSelect}
                          defaultChecked={selectedFreeFollowUp}
                          disabled={userInfo && !userInfo.free_follow_up}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <h3
                          className={classNames(
                            "ml-4 text-sm font-medium",
                            userInfo && !userInfo.free_follow_up
                              ? "text-gray-500"
                              : "text-gray-800"
                          )}
                        >
                          {userInfo && userInfo.free_follow_up
                            ? "Use your free follow-up session"
                            : "No free follow-up currently"}
                        </h3>
                      </div>
                      <a
                        href="/faqs#"
                        target={"_blank"}
                        className="text-sm font-medium text-blue-400 hover:text-blue-500"
                      >
                        What's this?
                      </a>
                    </div>
                  </div>

                  <button
                    disabled={!agreementAccepted}
                    type="submit"
                    className={classNames(
                      "mt-10 flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white ",
                      !agreementAccepted
                        ? "bg-gray-500 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    )}
                  >
                    Pay ₹ <span className="text-lg">{finalPrice}</span>
                  </button>
                </form>
                <div className="mt-4 flex">
                  <ClockIcon className="h-6 mr-2" />
                  <span>
                    Session expires in: <span className="font-bold">10</span>{" "}
                    mins
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.persistedReducer.user.userInfo,
  };
};

export default connect(mapStateToProps)(Checkout);
