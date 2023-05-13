const WhyRandomCapsule = ({ className }) => {
  return (
    <div className={`bg-white py-6 sm:py-8 lg:py-12 ${className}`}>
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-4xl font-bold text-gray-800 md:mb-6 lg:text-5xl">
            Why Random Capsule?
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Random Capsule has been made with the sole aim to bring afforadable
            and better mental health-care closer to you!
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 md:gap-8 xl:grid-cols-2">
          <div className="flex divide-x rounded-lg border bg-gray-50">
            <div className="flex items-center p-2 text-blue-500 md:p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-8 md:w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <div className="p-4 md:p-6">
              <h3 className="mb-2 text-lg font-semibold md:text-xl">
                Personalized Support
              </h3>
              <p className="text-gray-500">
                We understand that everyone's journey is different, and we're
                here to provide you with the guidance and assistance that fits
                your specific goals.
              </p>
            </div>
          </div>
          <div className="flex divide-x rounded-lg border bg-gray-50">
            <div className="flex items-center p-2 text-blue-500 md:p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-8 md:w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <div className="p-4 md:p-6">
              <h3 className="mb-2 text-lg font-semibold md:text-xl">
                Flexibilty of Sessions
              </h3>
              <p className="text-gray-500">
                Whether you prefer face-to-face consultations, online video
                sessions, or prefer to chat, our platform offers convenient
                options that allow you to receive the support you need from the
                comfort of your own environment.
              </p>
            </div>
          </div>

          <div className="flex divide-x rounded-lg border bg-gray-50">
            <div className="flex items-center p-2 text-blue-500 md:p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-8 md:w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <div className="p-4 md:p-6">
              <h3 className="mb-2 text-lg font-semibold md:text-xl">
                Extensive Practical Experience
              </h3>
              <p className="text-gray-500">
                Experience the valuable expertise and extensive practical
                knowledge of Ms. Pooja, empowering her to offer you impactful
                strategies and evidence-based approaches that can truly
                transform your life.
              </p>
            </div>
          </div>

          <div className="flex divide-x rounded-lg border bg-gray-50">
            <div className="flex items-center p-2 text-blue-500 md:p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:h-8 md:w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <div className="p-4 md:p-6">
              <h3 className="mb-2 text-lg font-semibold md:text-xl">
                Afforadable Pricing
              </h3>
              <p className="text-gray-500">
                Prioritizing affordability without compomising quality, we aim
                to ensure that you can receive the support you deserve without
                financial barriers standing in the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyRandomCapsule;
