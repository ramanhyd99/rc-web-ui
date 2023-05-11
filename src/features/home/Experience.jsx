import {
  NumberOfClients,
  NumberOfSessions,
  NumberOfYearsExp,
} from "../../utils/constants";

const Experience = () => {
  return (
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-xl px-4 md:px-8">
        <div class="mb-10 md:mb-16">
          <h2 class="mb-4 text-center text-4xl font-bold text-gray-800  md:mb-6 lg:text-5xl">
            Prior Experience
          </h2>
          <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Ms. Pooja has helped many feel better and hopes to reach and impact
            even more lives in a positive way.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-0 md:divide-x">
          <div class="flex flex-col items-center md:p-4">
            <div class="text-3xl font-bold text-blue-500 sm:text-2xl md:text-3xl lg:text-5xl">
              {NumberOfClients}+
            </div>
            <div class="text-sm font-semibold sm:text-base">
              Lives transformed
            </div>
          </div>
          <div class="flex flex-col items-center md:p-4">
            <div class="text-3xl font-bold text-blue-500 sm:text-2xl md:text-3xl lg:text-5xl">
              {NumberOfSessions}+
            </div>
            <div class="text-sm font-semibold sm:text-base">Sessions</div>
          </div>
          <div class="flex flex-col items-center md:p-4">
            <div class="text-3xl font-bold text-blue-500 sm:text-2xl md:text-3xl lg:text-5xl">
              {NumberOfYearsExp}+
            </div>
            <div class="text-sm font-semibold sm:text-base">Years exp</div>
          </div>
          {/* <div class="flex flex-col items-center md:p-4">
              <div class="text-xl font-bold text-blue-500 sm:text-2xl md:text-3xl">
                A couple
              </div>
              <div class="text-sm font-semibold sm:text-base">Coffee breaks</div>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default Experience;
