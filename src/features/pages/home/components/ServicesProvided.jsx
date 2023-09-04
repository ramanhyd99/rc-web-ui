import { CheckIcon, InformationCircleIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    service: "Stress, Anixety & Depression",
  },
  {
    id: 2,
    service: "Inter-personal relationship issues",
  },
  {
    id: 3,
    service: "Therapy for special needs children",
  },
  {
    id: 4,
    service: "LGBTQ+ counselling",
  },
  {
    id: 5,
    service: "Loneliness, Low self-esteem & Body-image Issues",
  },
  {
    id: 6,
    service: "Attention-deficit/hyperactivity disorder (ADHD)",
  },
  {
    id: 7,
    service: "Career & Student counselling",
  },
  {
    id: 8,
    service: "Couple & Family Counselling",
  },
  {
    id: 9,
    service: "Obsesssive Compulsive Disorder",
  },
  {
    id: 10,
    service: "And more (PTSD, Grief counselling etc.)",
  },
];

const ServicesProvided = () => {
  return (
    // style={{backgroundColor: "red", backgroundImage: "-webkit-linear-gradient(75deg, #013A6B 50%, white 50%)"}}
    <section className="text-gray-600 body-font">
      <div className="container py-4 sm:py-20 mx-auto px-4 sm:px-0">
        <div className="text-center mb-10 sm:mb-20">
          <h2 className="mb-2 text-center text-4xl font-bold text-white md:mb-6 lg:text-5xl">
            We're Here For You
          </h2>
          <p className="text-gray-400 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-lg">
            We provide help with a variety of things that may be bothering you.
            This is a <span className="text-pink-200">non-judgemental</span> and{" "}
            <span className="text-pink-200">safe zone.</span>
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 text-white">
          {services.map((item, index) => (
            <div className="p-3 sm:w-1/2 w-full">
              <div className="flex justify-start ml-4 sm:ml-0 ">
                <div className="mr-2">
                  <div className="bg-blue-50 rounded-full p-1">
                    <CheckIcon className="h-4 text-blue-500 " />
                  </div>
                </div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                >
                  <span className="title-font font-medium 2xl:text-xl font-varela">
                    {item.service}
                  </span>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 mt-14 sm:mt-20">
          <div className="mx-auto max-w-screen-2xl px-4 pb-4 md:px-8 ">
            <div className="flex flex-wrap justify-center rounded-lg bg-blue-900 px-4 py-3 shadow-lg sm:flex-nowrap sm:items-center sm:justify-center sm:gap-3 sm:pr-8 md:px-8">
              <InformationCircleIcon className="h-10 text-yellow-300"/>
              <div className="order-1 mb-2 inline-block w-11/12 max-w-screen-sm text-md text-white sm:order-none sm:mb-0 sm:w-auto md:text-lg text-center">
                Don't worry if you're unsure about what you need, we're here to
                help you discover and navigate it in our sessions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesProvided;
