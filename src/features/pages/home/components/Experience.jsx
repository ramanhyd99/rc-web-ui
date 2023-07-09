import {
  NumberOfClients,
  NumberOfSessions,
  NumberOfYearsExp,
} from "../../../../utils/constants";

const Experience = ({ className }) => {
  return (
    <div className={`bg-white ${className}`}>
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-4xl font-bold text-gray-800  md:mb-6 lg:text-5xl">
            Prior Experience
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            We have helped many feel better and hopes to reach and impact
            even more lives in a positive way.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-0 md:divide-x">
          <div className="flex flex-col items-center md:p-4">
            <div className="text-3xl font-bold text-black/70  sm:text-2xl md:text-3xl lg:text-5xl">
              {NumberOfClients}+
            </div>
            <div className="text-sm font-semibold sm:text-base">
              Lives transformed
            </div>
          </div>
          <div className="flex flex-col items-center md:p-4">
            <div className="text-3xl font-bold text-black/70  sm:text-2xl md:text-3xl lg:text-5xl">
              {NumberOfSessions}+
            </div>
            <div className="text-sm font-semibold sm:text-base">Sessions</div>
          </div>
          <div className="flex flex-col items-center md:p-4">
            <div className="text-3xl font-bold text-black/70  sm:text-2xl md:text-3xl lg:text-5xl">
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
