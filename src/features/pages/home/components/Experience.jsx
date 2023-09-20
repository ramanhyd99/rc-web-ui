import {
  NumberOfClients,
  NumberOfSessions,
  NumberOfYearsExp,
} from "../../../../utils/constants";

const Experience = ({ className }) => {
  return (
    <div
      // className={`py-24 ${className} bg-desk bg-cover bg-no-repeat bg-center w-full h-[550px] flex`}
      className={`py-24 ${className}r w-full  flex`}
    >
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mb-10 md:mb-0">
          <h2 className="mb-4 text-center text-4xl font-bold text-gray-800  md:mb-6 lg:text-5xl">
            Prior Experience
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-700 md:text-lg">
            We have helped many feel better and hope to reach and impact even
            more lives in a positive way.
          </p>
        </div>
        <div className="flex justify-center mb-8 sm:mb-8">
          <img
            height="100%"
            width="auto"
            src={require("../../../../assets/img/support.gif")}
            className="h-64 sm:h-96"
            alt="Mental health support by psychologist"
          />
          {/* <video
            preload="yes"
            ref={videoRef} // need this for react + video to work on mobile https://stackoverflow.com/questions/65259387/video-not-playing-on-mobile-using-react 
            autoPlay
            loop
            muted
            playsInline
            className="h-64 sm:h-96"
          >
            <source
              src={require("../../../../assets/img/support.mp4")}
              type="video/mp4"
            />
          </video> */}
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-0 md:divide-x">
          <div className="flex flex-col items-center md:p-4">
            <div className="text-5xl font-bold text-black/70  sm:text-2xl md:text-3xl lg:text-6xl highlight highlight-green-50 highlight-spread-sm highlight-variant-5">
              {NumberOfClients}+
            </div>
            <div className="text-sm font-semibold sm:text-base">
              Lives transformed
            </div>
          </div>
          <div className="flex flex-col items-center md:p-4">
            <div className="text-5xl font-bold text-black/70  sm:text-2xl md:text-3xl lg:text-6xl highlight highlight-red-50 highlight-spread-sm highlight-variant-5">
              {NumberOfSessions}+
            </div>
            <div className="text-sm font-semibold sm:text-base">Sessions</div>
          </div>
          <div className="flex flex-col items-center md:p-4">
            <div className="text-5xl font-bold text-black/70  sm:text-2xl md:text-3xl lg:text-6xl highlight highlight-orange-50 highlight-spread-sm highlight-variant-5">
              {NumberOfYearsExp}+
            </div>
            <div className="text-sm font-semibold sm:text-base">Years exp</div>
          </div>
          {/* <div className="flex flex-col items-center md:p-4">
              <div className="text-xl font-bold text-blue-500 sm:text-2xl md:text-3xl">
                A couple
              </div>
              <div className="text-sm font-semibold sm:text-base">Coffee breaks</div>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default Experience;
