import { Rating } from "@material-tailwind/react";
import React, { useRef, useState } from "react";

// review_id = Column(Integer, primary_key=True)
// email = Column(String(100), nullable=False, unique=True)
// rating = Column(Integer, nullable=False)
// age = Column(Integer, nullable=False)
// gender = Column(String(50))
// city = Column(String(100))
// feedback = Column(Text, nullable=False)
// improve = Column(Text)
// created_at = Column(TIMESTAMP, nullable=False, server_default=func.now())

const testimonials = [
  {
    review_id: 1,
    age: "30",
    gender: "Male",
    city: "Vizag",
    feedback:
      "She has always heard me without judgements, made me feel less guilty for my past. Always heard me out. I am happy after the therapy sessions.",
    rating: 5,
  },
  {
    review_id: 2,
    age: "23",
    gender: "Female",
    city: "Mahalingpur",
    feedback:
      "Amazing I see the massive difference in last one year I have grown mentally ",
    rating: 4,
  },

  {
    review_id: 4,
    age: "23",
    gender: "Female",
    city: "Bangalore",
    feedback: "I felt comfortable during the period.It was good.",
    rating: 5,
  },
  {
    review_id: 5,
    age: "26",
    gender: "Female",
    city: "Belgaum",
    feedback:
      "It changed my way of thinking and seeing everything with another perspective. The sessions also helped me to calm down and relax when i was in anxiety. It was really useful and great journey where we know what we are saying is actually being felt by the therapist and also the task that was given helped me think better about the situation.",
    rating: 5,
  },
  {
    review_id: 6,
    age: "22",
    gender: "Male",
    city: "Mysuru",
    feedback:
      "I really love the patience and detailing you look into before answering any query, the mini assignments are clarity boosters! Keep doing the work!",
    rating: 5,
  },
  {
    review_id: 9,
    age: "25",
    gender: "Male",
    city: "Belgaum",
    feedback: "It was good session",
    rating: 4,
  },
  {
    review_id: 10,
    age: "22",
    gender: "Male",
    city: "Kolkata",
    feedback:
      "It was really an amazing experience with miss pooja. It really helped me a lot.",
    rating: 4,
  },
  {
    review_id: 3,
    age: "21",
    gender: "Female",
    city: "Hyderabad",
    feedback:
      "Very helpful, getting better at every stage. Each point is well dealt, well addressed and rightly solved. Each step, each assignment given and done helps reach to a better mental health level.",
    rating: 5,
  },
  {
    review_id: 7,
    age: "26",
    gender: "Male",
    city: "Hyderabad",
    feedback:
      "She helped me get through my hard phase, helped me deal with my anxiety through techniques like JPMR and  deep breathing. She's an amazing listener and psychologist.",
    rating: 5,
  },
  {
    review_id: 8,
    age: "24",
    gender: "Female",
    city: "Gadag",
    feedback: "Great",
    rating: 5,
  },
  {
    review_id: 8,
    age: "24",
    gender: "Female",
    city: "Delhi",
    feedback: "It was really good. I was given enough space to talk",
    rating: 5,
  },
  {
    review_id: 8,
    age: "28",
    gender: "Female",
    city: "Jodhpur",
    feedback:
      "She was very responsive and ensured that I am being taken care of. She used to keep asking whether I am okay or not. ",
    rating: 5,
  },
  // {
  //   review_id: 8,
  //   age: "23",
  //   gender: "Female",
  //   city: "Hyd",
  //   feedback:
  //     "Great",
  //   rating: 5,
  // },
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
      className={`bg-white py-6 sm:py-8 lg:py-12 ${className}`}
    >
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <h2 className="mb-8 text-center text-4xl font-bold text-gray-800 md:mb-12 lg:text-5xl">
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
                  <li key={testimonial.id % 3}>
                    <div className="flex flex-col items-center  gap-4 rounded-lg bg-black px-8 py-6 md:gap-6">
                      <div className="max-w-md text-center text-white lg:text-md">
                        <span className="text-xl font-quicksand">"</span>{" "}
                        {testimonial.feedback}{" "}
                        <span className="text-xl font-quicksand">"</span>
                      </div>

                      <div>
                        {" "}
                        <Rating value={testimonial.rating} readonly />
                      </div>
                      <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                        <div className="h-12 w-12 overflow-hidden rounded-full border-2 md:h-14 md:w-14">
                          <img
                            src={require(`../../../../assets/img/penguin-${
                              (testimonial.review_id % 6) + 1
                            }.png`)}
                            loading="lazy"
                            alt="Cute penguin"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div>
                          <div className="text-center text-sm font-bold text-indigo-50 sm:text-left md:text-base">
                            Anonymous
                          </div>
                          <p className="text-center text-sm text-indigo-200 sm:text-left md:text-sm">
                            {testimonial.city} | {testimonial.gender} |{" "}
                            {testimonial.age}
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
            <div className="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-32 pb-8 pointer-events-none dark:from-gray-100/70 absolute">
              <button
                className="relative bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center dark:bg-gray-700 dark:hover:bg-gray-600 pointer-events-auto"
                onClick={handleLoadMore}
              >
                Show more...
              </button>
            </div>
          ) : (
            <div className="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-32 pb-8 pointer-events-none dark:from-gray-900 sticky -mt-42 transition-opacity duration-300 opacity-100">
              <button
                className="relative bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center dark:bg-gray-700 dark:hover:bg-gray-600 transition-transform pointer-events-auto"
                onClick={handleLoadMore}
              >
                Got it !
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
