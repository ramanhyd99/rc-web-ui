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
            <p>Hello! I am Pooja Gupta RCI-licensed Clinical Psychologist (MPhil in clinical psychology).</p>
            <br />
            <p className="font-medium text-gray-600">
              I am a behavioural therapist, consultant child psychologist, certified Cognitive Behaviour Therapy (CBT) practitioner,OCD specialist, dream analyst, and principal investigator involved in multiple research studies. I am a well-trained therapist  and the founder of (your very own)  Random Capsule. 
              Just like how different journeys require different routes, healing too cannot follow a single path—Hence, my therapeutic approach is empathetic, client-centred, holistic, and eclectic. I draw upon the principles of psychoanalytic and humanistic schools of psychology too, while also integrating indigenous healing practices. Alongside psychotherapy, I am an active practitioner of yoga and acupressure, which allows me to adopt a holistic perspective towards mental health and wellbeing.

            </p>
            <p className="font-medium text-gray-600 my-4">
              I strive to provide a safe, inclusive, and non-judgmental space—one where we can talk, vent, feel heard, and truly understood.

            </p>
            <p className="font-medium text-gray-600">

              I work with individuals experiencing concerns related to anxiety, stress, interpersonal and relationship difficulties, depression, grief and loss, trauma, abuse, organisational and occupational stress, health-related issues, low motivation, loneliness, poor self-esteem, body-image concerns, and clinical populations like obsessive–compulsive disorder (OCD),  depression, schizophrenia, bipolar disorder and  addiction cases. I also have experience working with neurodevelopmental childhood conditions, including autism spectrum disorder, attention-deficit/hyperactivity disorder (ADHD), and learning disabilities.

            </p>
            <p className="font-medium text-gray-600">
              <br />
              Therapy, for me, is a collaborative journey, where we work on accepting and loving ourselves little more each day.
            </p>
            <p className="font-medium text-gray-600">
              <br />
              Come, be heard. And don’t worry—your therapist has got your back.
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
              <h2 className="text-md text-pink-200">MPhil. Psychology</h2>
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
