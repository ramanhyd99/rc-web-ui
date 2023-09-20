import { PhoneIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { Instagram, LinkedIn } from "../common/svgs";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 pt-24 py-12 mx-auto">
          <div className="flex flex-wrap md:text-center text-center order-first justify-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                About
              </h2>
              <nav className="list-none mb-10 space-y-1">
                <li>
                  <Link
                    to="/your-psychologist"
                    className="text-gray-400 hover:text-white py-2"
                  >
                    Your Psychologist
                  </Link>
                </li>
                <li>
                  <Link
                    to="/our-team"
                    className="text-gray-400 hover:text-white py-2"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link to="/faqs" className="text-gray-400 hover:text-white py-2">
                    FAQS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className="text-gray-400 hover:text-white py-2"
                  >
                    Contact Us
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 py-2">
                Quick Links
              </h2>
              <nav className="list-none mb-10 space-y-1">
                {/* <li>
                  <Link to="/home" className="text-gray-400 hover:text-white">
                    Assessments
                  </Link>
                </li> */}
                <li>
                  <Link
                    to="https://ijcspub.org/viewfull.php?&p_id=IJCSP23A1290"
                    className="text-gray-400 hover:text-white py-2"
                    target={"_blank"}
                  >
                    My Publications
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="text-gray-400 hover:text-white py-2">
                    Gallery
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                Other
              </h2>
              <nav className="list-none mb-10 space-y-1">
                <li>
                  <Link to="/privacy-policy" className="text-gray-400 hover:text-white py-2">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-and-conditions" className="text-gray-400 hover:text-white py-2">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-gray-400 hover:text-white py-2"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/feedback"
                    className="text-gray-400 hover:text-white"
                  >
                    Feedback 🌻
                  </Link>
                </li>
              </nav>
            </div>
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
