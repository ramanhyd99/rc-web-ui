import { useState } from "react";
import ContactUsModal from "../../common/modals/ContactUsModal";
import { CustomToast } from "../../common/toast/CustomToast";
import SEO from "../../seo";
import BookNow from "./components/BookNow";
import CarouselComp from "./components/Carousel";
import Experience from "./components/Experience";
import HowItWorks from "./components/HowItWorks";
import ServicesProvided from "./components/ServicesProvided";
import Testimonials from "./components/Testimonials";
import WhyRandomCapsule from "./components/WhyRandomCapsule";

const Home = () => {
  const [onPhoneClick, setPhoneClick] = useState(false);

  const handlePhoneClick = () => {
    setPhoneClick(!onPhoneClick);
  };

  return (
    <div>
      <SEO title="Home" />
      {onPhoneClick && <ContactUsModal setOpen={handlePhoneClick} />}
      <div>
        <CarouselComp />
      </div>
      <div>
        <WhyRandomCapsule className={"mt-5 sm:px-14 px-4"} />
      </div>
      <div
        style={{
          backgroundColor: "red",
          backgroundImage:
            "-webkit-linear-gradient(100deg, #013A6B 60%, white 50%)",
        }}
      >
        {/* 013A6B */}
        <div>
          <BookNow className={"mt-8 sm:px-14 px-4"} />
        </div>
        <div>
          <ServicesProvided className={"mt-8 sm:px-14 px-4"} />
        </div>
      </div>
      <div>
        <Experience className={"mt-0 sm:px-14 px-4"} />
      </div>
      <div>
        <HowItWorks className={"mt-0 sm:mt-8 sm:px-14 px-4"} />
      </div>
      <div>
        <Testimonials className={"mt-12 sm:mt-12"} />
      </div>
      <div>
        {/* Add promotional stuff like world mental health day here. */}
        {/* <CustomToast/> */}
      </div>
    </div>
  );
};

export default Home;
