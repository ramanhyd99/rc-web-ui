import { Link } from "react-router-dom";
import AnimatedHomeTitle from "../../common/AnimatedHomeTitle";
import BookNow from "../../home/BookNow";
import WhyRandomCapsule from "../../home/WhyRandomCapsule";
import Experience from "../../home/Experience";
import SEO from "../../seo";
import HowItWorks from "../../home/HowItWorks";
import Testimonials from "../../home/Testimonials";

const Home = () => {
  return (
    <>
      <div className="flex py-10 text-black w-full justify-around">
        <SEO title="Home" />
        <div className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex justify-center">
              <img
                className="md:w-3/4 lg:w-full  w-1/2 h-auto"
                src={require("../../../assets/img/pooja.png")}
                alt="Pooja Gupta"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <div className="flex justify-center ">
                <AnimatedHomeTitle />
              </div>
              <p className="my-2 mb-8 leading-relaxed sm:mr-20">
                Hello! I'm <b>Pooja Gupta</b>, a psychologist specialising in
                Clinical Psychology. <br /> <br /> My mission is to bring
                afforadable and the best possible mental healthcare to everyone.
                I am with you in this journey of healing and loving yourself a
                little bit more. Don't worry, I've got your back!
              </p>
              <div className="flex justify-center">
                <Link
                  to="/your-psychologist"
                  className="inline-flex text-white bg-gray-900 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded text-lg"
                >
                  Know more &#8594;
                </Link>
                <Link
                  to="/contact-us"
                  className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <WhyRandomCapsule className={"mt-5 sm:px-14 px-4"} />
      </div>
      <div>
        <BookNow className={"mt-8 sm:px-14 px-4"} />
      </div>
      <div>
        <Experience className={"mt-8 sm:px-14 px-4"} />
      </div>
      <div>
        <HowItWorks className={"mt-20 sm:px-14 px-4"} />
      </div>
      <div>
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
