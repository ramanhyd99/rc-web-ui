import { PhoneIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  WhatsappIcon,
} from "../common/svgs";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-400 bg-gray-900 body-font mt-20">
        <div className="container px-5 pt-24 py-12 mx-auto">
          <div className="flex flex-wrap md:text-center text-center order-first justify-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                About
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    to="/your-psychologist"
                    className="text-gray-400 hover:text-white"
                  >
                    Your Psychologist
                  </Link>
                </li>
                <li>
                  <Link
                    to="/our-team"
                    className="text-gray-400 hover:text-white"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link to="/faqs" className="text-gray-400 hover:text-white">
                    FAQS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className="text-gray-400 hover:text-white"
                  >
                    Contact Us
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                Library
              </h2>
              <nav className="list-none mb-10">
                {/* <li>
                  <Link to="/home" className="text-gray-400 hover:text-white">
                    Assessments
                  </Link>
                </li> */}
                <li>
                  <Link
                    to="https://ijcspub.org/viewfull.php?&p_id=IJCSP23A1290"
                    className="text-gray-400 hover:text-white"
                    target={"_blank"}
                  >
                    My Publications
                  </Link>
                </li>
                {/* <li>
                  <Link to="/home" className="text-gray-400 hover:text-white">
                    Articles
                  </Link>
                </li> */}
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                Other
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to="/home" className="text-gray-400 hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link to="/home" className="text-gray-400 hover:text-white">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </nav>
            </div>
            {/* <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                SUBSCRIBE
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label
                    for="footer-field"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Placeholder
                  </label>
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-blue-900 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                  Button
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
                Bitters chicharrones fanny pack
                <br className="lg:block hidden" />
                waistcoat green juice
              </p>
            </div> */}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <p className="flex content-center justify-center text-xs mb-12 w-1/2 text-center text-gray-500 hover:text-white bg-opacity-75">
            Disclaimer: Random Capsule does not deal with medical/clinical
            emergencies. In case of extreme suicidal crisis please visit your
            nearest mental health professional or call the national mental
            helpline number 1800-599-0019.
          </p>
        </div>

        <div className="bg-gray-800 bg-opacity-75">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            {/* <Link className="flex title-font font-medium items-center md:justify-start justify-center text-white">
              <img
                className="block h-12 lg:h-16 w-auto"
                src={require("../../assets/img/logo.png")}
                alt="Random Capsule"
              />
              <span className="ml-3 text-xl">Tailblocks</span>
            </Link> */}
            <p className="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">
              © {new Date().getFullYear()} Random Capsule —
              <a
                href="https://www.linkedin.com/in/ramansharma96/"
                className="text-gray-500 ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                @Raman &nbsp;
                <LinkedIn className="w-4 mb-1 h-auto inline-block" />
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <Link
                className="ml-3 text-gray-400"
                to="/contact-us"
                target="_blank"
              >
                <PhoneIcon className="h-5 w-auto" />
              </Link>
              <Link
                to="https://www.instagram.com/random_capsule/"
                target="_blank"
                className="ml-3 text-gray-400"
              >
                <Instagram />
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
