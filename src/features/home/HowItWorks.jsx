const HowItWorks = ({ className }) => {
  return (
    <section className={`text-gray-600 body-font ${className}`}>
      <div className="container px-5 py-14 mx-auto flex flex-wrap">
        <div className="w-full flex justify-center items-center content-center">
          <h2 className="text-4xl font-bold text-gray-800  md:mb-6 lg:text-5xl">
            How It Works
          </h2>
        </div>
        <div className="flex flex-wrap md:mx-40 mt-4">
          <div className="lg:w-1/3 md:w-1/2 w-full md:pr-10 md:py-6">
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-400 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-medium text-gray-900 mb-1 tracking-wider">
                  Book Session
                </h2>
                <p className="leading-relaxed">
                  Book a session as per your convenience. You can choose your
                  preferred mode such as <b>video, chat or call</b>.
                </p>
              </div>
            </div>

            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-medium text-gray-900 mb-1 tracking-wider">
                  Receive Confirmation
                </h2>
                <p className="leading-relaxed">
                  You will receive an <b>email/sms</b> confirmation post booking
                  & details of how to join the session.
                </p>
              </div>
            </div>
            <div className="flex relative">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-medium text-gray-900 mb-1 tracking-wider">
                  1 hr session
                </h2>
                <p className="leading-relaxed">
                  The session will be an hour long and an option for free
                  follow-up session as your psychologist sees fit.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 md:w-2/3 w-full md:mt-0 mt-12 flex items-center content-center justify-center">
            <img
              className="lg:w-3/4 lg:h-auto  w-3/4 h-auto "
              src={require("../../assets/img/talking_to_client.png")}
              alt="talking to client"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
