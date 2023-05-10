import { Link } from "react-router-dom";
import AnimatedHomeTitle from "../../common/AnimatedHomeTitle";
import WhyRandomCapsule from "../../home/WhyRandomCapsule";
import SEO from "../../seo";

const Home = () => {
  return (
    <>
      <div className="flex py-10 text-black w-full min-h-screen justify-around">
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
                  className="inline-flex text-white bg-black py-2 px-6 focus:outline-none hover:bg-gray-800 rounded text-lg"
                >
                  Know more &#8594;
                </Link>
                <Link
                  to="/booking"
                  className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                >
                  Book Session
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <WhyRandomCapsule className={"mt-5 px-14"}/>
      </div>
    </>
  );
};

export default Home;
