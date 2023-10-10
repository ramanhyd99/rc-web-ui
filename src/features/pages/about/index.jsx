import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  NumberOfClients,
  NumberOfSessions,
  NumberOfStudentsCounselled,
  NumberOfYearsExp,
} from "../../../utils/constants";
import PageTitle from "../../common/PageTitle";
import SEO from "../../seo";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <div className="py-2">
      <SEO title="Your Psychologist" />
      <main
        className="flex w-full h-min-screen flex-col items-center justify-center md:px-24 px-12 pb-4"
        // style={{ border: " 2px solid magenta" }}
      >
        <PageTitle text="Your Psychologist" className="mb-12" />
        <div className="lg:grid w-full grid-cols-8 gap-16 flex flex-col lg:items-stretch  items-center">
          <div className="col-span-3 flex flex-col items-start justify-start">
            <h2 className="mb-4 text-lg font-bold uppercase text-gray-700  highlight highlight-pink-50 highlight-spread-sm highlight-variant-5">
              About Me
            </h2>
            <p className="font-medium text-gray-600">
              Hello! I am a psychologist, specialising in Clinical Psychology. I
              am a behavioural therapist, consultant child-psychologist,
              certified cognitive behavioural therapy practitioner, dream
              analyst, principal investigator in various research studies, a
              well trained counsellor and the founder of (your very own) Random
              Capsule. I use an empathetic approach and focus on client centred
              therapy. My unique style of counselling is based on the principles
              of psychoanalytic and humanistic schools of psychology and
              indegineous healing techniques. I am an active yoga and
              acupressure practitioner. I provide a safe, inclusive and a
              non-judgmental space for us to talk, vent, listen and understand.
            </p>
            <p className="font-medium text-gray-600 my-4">
              I deal with the people having issues related to anxiety, stress,
              interpersonal relationship issues, depression, grief, abuse,
              organisational stress, health issues, motivation, trauma,
              loneliness, poor self-esteem, body-image issues, autism,
              attention-deficit/hyperactivity disorder, cerebral palsy, learning
              disabilities and anything that takes a toll on mental health of an
              individual. I am with you in this journey of healing and loving
              yourself a little bit more.
            </p>
            <p className="font-medium text-gray-600">
              Come, be heard and don't worry! Your therapist has got your back!
            </p>
          </div>
          <div
            className="h-1/2 md:w-1/2 w-full lg:h-max lg:w-full col-span-3 rounded-2xl border-2 border-solid border-black bg-white p-8"
            style={{ boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.7)" }}
          >
            <img
              className="h-1/2 lg:h-max border-2 border-black/70 rounded-2xl"
              src={require("../../../assets/img/pooja_about_me.jpeg")}
              alt="Pooja Gupta"
            />
            <div className="flex items-center flex-col mt-2">
              <h2 className="text-2xl font-bold text-blue-500">
                Ms. Pooja Gupta
              </h2>
              <h2 className="text-md text-pink-200">Msc Psychology</h2>
              <h2 className="text-md text-black">Gold Medalist</h2>
            </div>
          </div>
          <div className="col-span-2 flex flex-col items-end justify-around pb-20">
            <div className="flex flex-col items-end justify-center ">
              <span className="inline-block text-7xl font-bold">
                <AnimatedNumbers value={NumberOfClients} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-black/60">
                Lives Impacted
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center ">
              <span className="inline-block text-7xl font-bold">
                <AnimatedNumbers value={NumberOfStudentsCounselled} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-black/60">
                Students counselled
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center ">
              <span className="inline-block text-7xl font-bold">
                <AnimatedNumbers value={NumberOfSessions} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-black/60">
                Sessions
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center ">
              <span className="inline-block text-7xl font-bold">
                <AnimatedNumbers value={NumberOfYearsExp} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-black/60">
                Years exp.
              </h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
