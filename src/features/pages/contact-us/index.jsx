import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";
import SEO from "../../seo";

const ContactUsPage = () => {
  return (
    <div>
      <SEO title="Contact Us"/>
      <section className="text-gray-600 body-font h-full">
        <div className="absolute inset-0 bg-gray-300 pt-20">
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="map"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Bangalore, Karnataka - 590006&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
            // style="filter: grayscale(1) contrast(1.2) opacity(0.4);"
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h1 className="text-gray-900 text-2xl mb-4 font-medium title-font">
              Feel free to reach out!
            </h1>
            <div className="flex mt-4">
              <PhoneIcon className="h-7 w-7 text-blue-300" />
              <div className="ml-4 text-lg">+91-7975897538</div>
            </div>

            <div className="flex mt-4">
              <EnvelopeIcon className="h-7 w-7 text-blue-300" />
              <div className="ml-4 ">session.randomcapsule@gmail.com</div>
            </div>

            <div className="flex mt-4 ">
              <MapPinIcon className="h-8 w-8 text-blue-300" />
              <div className="ml-4">Bangalore, Karnataka</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
