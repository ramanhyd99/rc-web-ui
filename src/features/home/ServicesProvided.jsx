const services = [
  {
    id: 1,
    service: "Anxiety",
  },
  {
    id: 2,
    service: "Depression",
  },
  {
    id: 3,
    service: "Children Counselling",
  },
  {
    id: 4,
    service: "Couple Counselling",
  },
  {
    id: 5,
    service: "Bipolar disorder",
  },
  {
    id: 6,
    service: "Attention-deficit/hyperactivity disorder (ADHD)",
  },
  // {
  //   id: 7,
  //   service: "Schizophrenia",
  // },
  {
    id: 8,
    service: "Obsessive-compulsive disorder (OCD)",
  },
  {
    id: 9,
    service: "Substance abuse and addiction",
  },
  {
    id: 10,
    service: "Post-traumatic stress disorder (PTSD)",
  },
  // {
  //   id: 11,
  //   service: "Eating disorders",
  // },
  {
    id: 12,
    service: "And more...",
  },
];

const ServicesProvided = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h2 className="mb-4 text-center text-4xl font-bold text-gray-800  md:mb-6 lg:text-5xl">
            We're Here For You
          </h2>
          <p className="text-gray-500 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-lg">
            We provide help with a variety of things that may be bothering you.
            This is a non-judgemental and safe zone.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {services.map((item, index) => (
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">{item.service}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 mt-8">
          <div className="mx-auto max-w-screen-2xl px-4 pb-4 md:px-8 ">
            <div className="relative flex flex-wrap rounded-lg bg-gray-500 px-4 py-3 shadow-lg sm:flex-nowrap sm:items-center sm:justify-center sm:gap-3 sm:pr-8 md:px-8">
              <div className="order-1 mb-2 inline-block w-11/12 max-w-screen-sm text-sm text-white sm:order-none sm:mb-0 sm:w-auto md:text-lg text-center">
                Don't worry if you're unsure about what you need, we're here to
                help you discover and navigate it in our sessions.
              </div>

              {/* <a
                href="#"
                className="order-last inline-block w-full whitespace-nowrap rounded-lg  bg-gray-900 px-4 py-2 text-center text-xs font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-gray-800 focus-visible:ring active:bg-indigo-800 sm:order-none sm:w-auto md:text-sm"
              >
                Learn more
              </a> */}

              {/* <div className="order-2 flex w-1/12 items-start justify-end sm:absolute sm:right-0 sm:order-none sm:mr-2 sm:w-auto xl:mr-3">
                <button
                  type="button"
                  className="text-white transition duration-100 hover:text-indigo-100 active:text-indigo-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 xl:h-6 xl:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div> */}
            </div>
          </div>
        </div>

        {/* <button className="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
          Button
        </button> */}
      </div>
    </section>
  );
};

export default ServicesProvided;
