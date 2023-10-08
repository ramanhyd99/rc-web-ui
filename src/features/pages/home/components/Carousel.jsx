import { Button, Carousel } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import AnimatedHomeTitle from "../../../common/AnimatedHomeTitle";

const CarouselComp = () => {
  return (
    <div className="">
      <Carousel autoplay="false" loop="false" autoplayDelay="20000">
        {/* Slide 1 */}
        <div className="bg-gradient-to-r from-blue-100 to-blue-50">
          <div className="block sm:grid grid-cols-2 grid-rows-1 gap-0 min-h-screen max-h-screen  ">
            <div className="flex justify-center items-center py-1">
              <img
                style={{
                  "border-radius": "46% 43% 47% 53% / 40% 34% 64% 61%",
                }}
                width="100%"
                height="auto"
                className="w-1/2 sm:w-2/3 bg-blue-50"
                src={require("../../../../assets/img/pooja.png")}
                alt="Pooja Gupta"
              />
            </div>

            <div className="flex justify-center items-center mt-6 md:mt-5">
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <div className="flex justify-center ">
                  <AnimatedHomeTitle />
                </div>
                <p className="py-2 sm:py-12 leading-relaxed sm:mr-20">
                  Hello! I'm <b>Pooja Gupta</b>, a psychologist specialising in
                  Clinical Psychology. <br /> <br /> My mission is to bring
                  afforadable and the best possible mental healthcare to
                  everyone. I am with you in this journey of healing and loving
                  yourself a little bit more. Don't worry, I've got your back!
                </p>
                <div className="flex justify-center mt-2 sm:mt-4">
                  {/* <Link
                    to="/your-psychologist"
                    className="inline-flex text-white bg-gray-900 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded text-lg"
                  >
                    Know more &#8594;
                  </Link> */}
                  <Link to="/your-psychologist">
                    <Button className="bg-black"> Know more &#8594;</Button>
                  </Link>
                  <Link to="/contact-us" className="ml-4">
                    <Button className="bg-gray-200 text-gray-700">
                      {" "}
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Slide 2 */}
        <div>
          <div className="block sm:grid grid-cols-2 grid-rows-1 gap-0 min-h-screen max-h-screen bg-gradient-to-r from-green-200 via-green-100 to-green-50">
            <div className="flex justify-center items-center py-1">
              <img
                width="100%" // set this to avoid layout shifts https://pagespeed.web.dev/analysis/https-www-randomcapsule-in/k4ripcl3of?form_factor=mobile
                height="auto"
                style={{
                  "border-radius": "46% 43% 47% 53% / 40% 34% 64% 61%",
                }}
                className="w-2/3 sm:w-2/3 bg-green-50 "
                src={
                  require("../../../../assets/backgrounds/spotify_bg.svg")
                    .default
                }
                alt="Spotify"
              />
            </div>
            <div className="flex justify-center sm:justify-start items-center mt-6 md:mt-5 w-full">
              <div className="block w-2/3 sm:w-3/4">
                <div className="text-2xl sm:text-4xl font-quicksand text-center">
                  Checkout Random Capsule's Podcast!
                </div>
                <div>
                  <iframe
                    title="Random Capsule Spotify Podcast"
                    className="leading-relaxed mt-8 md:mt-8 mr:20 sm:mr-36"
                    style={{ "border-radius": "12px" }}
                    src="https://open.spotify.com/embed/show/6RcZys27bOqkHuiWVrR6zO?utm_source=generator&theme=0"
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              {/* <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <div className="flex justify-center ">
                  <AnimatedHomeTitle />
                </div>
                <p className="my-2 sm:mb-8 leading-relaxed sm:mr-20">
                  Hello! I'm <b>Pooja Gupta</b>, a psychologist specialising in
                  Clinical Psychology. <br /> <br /> My mission is to bring
                  afforadable and the best possible mental healthcare to
                  everyone. I am with you in this journey of healing and loving
                  yourself a little bit more. Don't worry, I've got your back!
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
                    Contact Us
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* Slide 3 */}
        <div>
          <div className="block sm:grid grid-cols-2 grid-rows-1 gap-0 min-h-screen max-h-screen bg-gradient-to-r from-pink-200 via-purple-100 to-pink-50">
            <div className="flex justify-center items-center py-12 sm:py-1">
              <div className="my-7 w-full flex justify-center items-center">
                <video className="rounded-lg w-[32rem] h-[20rem]" controls>
                  <source
                    src={require("../../../../assets/img/gallery/vid1.mp4")}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              {/* <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
                <div class="-m-1 flex flex-wrap md:-m-2">
                  <div class="flex w-1/2 flex-wrap">
                    <div class="w-1/2 p-1 md:p-2">
                      <img
                        class="h-auto max-w-full hover:scale-125 transition-all duration-500 cursor-pointer rounded-lg"
                        src={require("../../../../assets/img/gallery/c.jpeg")}
                        alt=""
                      />
                    </div>
                    <div class="w-1/2 p-1 md:p-2">
                      <img
                        class="h-auto max-w-full hover:scale-125 transition-all duration-500 cursor-pointer rounded-lg"
                        src={require("../../../../assets/img/gallery/u.jpeg")}
                        alt=""
                      />
                    </div>
                    <div class="w-full p-1 md:p-2">
                      <img
                        class="h-auto max-w-full hover:scale-125 transition-all duration-500 cursor-pointer rounded-lg"
                        src={require("../../../../assets/img/gallery/q.jpeg")}
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="flex w-1/2 flex-wrap">
                    <div class="w-full p-1 md:p-2">
                      <img
                        class="h-auto max-w-full hover:scale-125 transition-all duration-500 cursor-pointer rounded-lg"
                        src={require("../../../../assets/img/gallery/r.jpeg")}
                        alt=""
                      />
                    </div>
                    <div class="w-1/2 p-1 md:p-2">
                      <img
                        class="h-auto max-w-full hover:scale-125 transition-all duration-500 cursor-pointer rounded-lg"
                        src={require("../../../../assets/img/gallery/o.jpeg")}
                        alt=""
                      />
                    </div>
                    <div class="w-1/2 p-1 md:p-2">
                      <img
                        class="h-auto max-w-full hover:scale-125 transition-all duration-500 cursor-pointer rounded-lg"
                        src={require("../../../../assets/img/gallery/e.jpeg")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="flex justify-center sm:justify-start items-center mt-6 md:mt-5 w-full">
              <div className="block w-2/3 sm:w-3/4">
                <div className="text-2xl sm:text-4xl font-quicksand text-center">
                  Checkout Random Capsule's Gallery!
                </div>
                <div className="flex justify-center mt-12">
                  <Link to="/gallery">
                    <Button className="bg-black">Gallery &rarr;</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
