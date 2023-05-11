import React, { useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    age: "25",
    place: "Hyd",
    message: "The sessions have been very useful.",
  },
  {
    id: 1,
    age: "25",
    place: "Hyd",
    message: "I got alot of done. thanks alot pooja maam u are the best",
  },
  {
    id: 1,
    age: "25",
    place: "Hyd",
    message:
      "Pooja ma'am has helped me alot.Pooja ma'am has helped me alotPooja ma'am has helped me alotPooja ma'am has helped me alot, ma'am has helped me alotPooja ma'am has helped me alot,",
  },
  {
    id: 1,
    age: "25",
    place: "Hyd",
    message:
      "eibccc eibcccunb cbdbrktj kildklrctgfefrdjj tnbgnjhgin unbcbddveeu ijfnvhtlneb dtrnelt rcehcbinr",
  },
  {
    id: 1,
    age: "25",
    place: "Hyd",
    message:
      "Pooja ma'am has helped me alot.Pooja  alot.Poo  alot.Poo  alot.Poo  alot.Poo  alot.Poo  alot.Poo alot.Poo  alot.Poo  alot.Poo  alot.Poo ma'am has helped me alotPooja ma'am has helped me alotPooja ma'am has helped me alot, ma'am has helped me alotPooja ma'am has helped me alot,",
  },
  {
    id: 1,
    age: "25",
    place: "Hyd",
    message: "Pooja helped me alot,",
  },
  {
    id: 1,
    age: "25",
    place: "Hyd",
    message:
      "Pooja ma'am has helped me alot.Pooja  has helped me alotPooja ma'am has helped me alot, ma'am has helped me alotPooja ma'am has helped me alot,",
  },
  {
    id: 1,
    age: "25",
    place: "Hyd",
    message: "Pooja ma'am has helped me a alot,",
  },
  {
    id: 1,
    age: "25",
    place: "Hyd",
    message: "Pooja ma'am has helped me a alot,",
  },
  {
    id: 1,
    age: "25",
    place: "Hyd",
    message: "Pooja helped me alot,",
  },
  {
    id: 1,
    age: "25",
    place: "Hyd",
    message:
      "Pooja ma'am has helped me alot.Pooja ma'am has helped me alotPooja ma'am has helped me alotPooja ma'am has helped me alot, ma'am has helped me alotPooja ma'am has helped me alot,",
  },
  {
    id: 1,
    age: "25",
    place: "Hyd",
    message: "Pooja ma'am has helped me a alot,",
  },
  {
    id: 1,
    age: "25",
    place: "Hyd",
    message:
      "Pooja ma'am has helped me alot.Pooja ma'am has helped me alotPooja ma'am has helped me alotPooja ma'am has helped me alot, ma'am has helped me alotPooja ma'am has helped me alot,",
  },

  {
    id: 1,
    age: "25",
    place: "Hyd",
    message:
      "eibccc eibcccunb cbdbrktj kildklrctgfefrdjj tnbgnjhgin unbcbddveeu ijfnvhtlneb dtrnelt rcehcbinr",
  },
  {
    id: 1,
    age: 32,
    place: "London",
    message: "Fantastic product, exceeded my expectations!",
  },
  {
    id: 2,
    age: 45,
    place: "New York",
    message: "I've never been happier with a purchase. Highly recommended!",
  },
  {
    id: 3,
    age: 27,
    place: "Paris",
    message: "The service was outstanding. Will definitely come back!",
  },
  {
    id: 4,
    age: 52,
    place: "Tokyo",
    message: "Impressed by the quality and attention to detail.",
  },
  {
    id: 5,
    age: 38,
    place: "Sydney",
    message: "Exceptional value for money. Worth every penny.",
  },
  {
    id: 6,
    age: 29,
    place: "Berlin",
    message: "I can't express how satisfied I am with this product.",
  },
  {
    id: 7,
    age: 56,
    place: "Rome",
    message: "The best purchase I've made in a long time. Truly remarkable!",
  },
  {
    id: 8,
    age: 41,
    place: "Amsterdam",
    message: "Great service, quick delivery, and top-notch quality.",
  },
  {
    id: 9,
    age: 33,
    place: "Barcelona",
    message: "An absolute game-changer. Can't recommend it enough!",
  },
  {
    id: 10,
    age: 48,
    place: "Dubai",
    message: "I'm impressed by the professionalism and efficiency.",
  },
  {
    id: 11,
    age: 37,
    place: "San Francisco",
    message: "A life-changing experience. I'm extremely grateful.",
  },
  {
    id: 12,
    age: 39,
    place: "Singapore",
    message: "Superb customer support. They went above and beyond.",
  },
  {
    id: 13,
    age: 43,
    place: "Munich",
    message: "Good product at a reasonable price. I'm happy with my purchase.",
  },
  {
    id: 14,
    age: 31,
    place: "Toronto",
    message: "Effortless shopping experience. Will definitely shop here again.",
  },
  {
    id: 15,
    age: 50,
    place: "Stockholm",
    message: "The product arrived on time and in perfect condition.",
  },
  {
    id: 16,
    age: 36,
    place: "Seoul",
    message: "Absolutely love it! It's become an essential part of my routine.",
  },
  {
    id: 17,
    age: 44,
    place: "Los Angeles",
    message: "Highly impressed by the quality and durability.",
  },
  {
    id: 18,
    age: 34,
    place: "Vienna",
    message: "Satisfied customer here. Will definitely recommend it to others.",
  },
  {
    id: 19,
    age: 47,
    place: "Hong Kong",
    message: "This product exceeded my expectations. I'm truly amazed!",
  },
];

const chunkArray = (arr, size) => {
  const chunkedArr = [];
  for (let i = 0; i < arr.length; i += size) {
    chunkedArr.push(arr.slice(i, i + size));
  }
  return chunkedArr;
};

const chunkedTestimonials = chunkArray(
  testimonials,
  Math.ceil(testimonials.length / 3)
);

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Testimonials = ({ className }) => {
  const scrollTargetRef = useRef(null);

  const scrollToTarget = () => {
    scrollTargetRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const [loadMore, setLoadMore] = useState(false);
  const handleLoadMore = () => {
    if (loadMore) {
      setLoadMore(!loadMore);
      scrollToTarget();
    } else {
      setLoadMore(!loadMore);
    }
  };

  return (
    <div
      ref={scrollTargetRef}
      class={`bg-white py-6 sm:py-8 lg:py-12 ${className}`}
    >
      <div class="mx-auto max-w-screen-xl px-4 md:px-8">
        <h2 class="mb-8 text-center text-4xl font-bold text-gray-800 md:mb-12 lg:text-5xl">
          Know What Others Are Saying
        </h2>

        <div className="relative items-center max-w-7xl mx-auto px-4 focus:outline-none sm:px-3 md:px-5">
          <div
            className={classNames(
              " grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3  overflow-hidden ",
              loadMore ? "" : "max-h-[30rem]"
            )}
          >
            {chunkedTestimonials.map((chunk, index) => (
              <ul key={index} className="space-y-8">
                {chunk.map((testimonial) => (
                  <li key={testimonial.id}>
                    <div class="flex flex-col items-center  gap-4 rounded-lg bg-gray-700 px-8 py-6 md:gap-6">
                      <div class="max-w-md text-center text-white lg:text-md">
                        {testimonial.message}
                      </div>

                      <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                        <div class="h-12 w-12 overflow-hidden rounded-full border-2 border-indigo-100 bg-gray-100 md:h-14 md:w-14">
                          <img
                            src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
                            loading="lazy"
                            alt="Photo by Radu Florin"
                            class="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div>
                          <div class="text-center text-sm font-bold text-indigo-50 sm:text-left md:text-base">
                            Anonymous
                          </div>
                          <p class="text-center text-sm text-indigo-200 sm:text-left md:text-sm">
                            {testimonial.place}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          {!loadMore ? (
            <div className="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-32 pb-8 pointer-events-none dark:from-slate-100/70 absolute">
              <button
                className="relative bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center dark:bg-slate-700 dark:hover:bg-slate-600 pointer-events-auto"
                onClick={handleLoadMore}
              >
                Show more...
              </button>
            </div>
          ) : (
            <div className="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-32 pb-8 pointer-events-none dark:from-slate-900 sticky -mt-42 transition-opacity duration-300 opacity-100">
              <div
                className="relative bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center dark:bg-slate-700 dark:hover:bg-slate-600 transition-transform pointer-events-auto"
                onClick={handleLoadMore}
              >
                Got it !
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
