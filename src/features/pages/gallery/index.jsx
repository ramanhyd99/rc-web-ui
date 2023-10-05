const Gallery = () => {
  return (
    <div className="flex flex-col items-center">
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-14 mx-auto flex flex-wrap">
          <div class="flex w-full mb-20 flex-wrap">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
              Catch a glimpse of various capsules!
            </h1>
            <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base flex items-center">
              From mental health meet-ups to career counseling and emotional
              well-being of students we have been catering to every need!
            </p>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-2 ">
            <div class="grid gap-4">
              <div>
                <img
                  class="h-auto max-w-full hover:scale-125 transition-all duration-500 cursor-pointer"
                  src={require("../../../assets/img/gallery/a.jpeg")}
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full hover:scale-125 transition-all duration-500 cursor-pointer rounded-lg"
                  src={require("../../../assets/img/gallery/b.jpeg")}
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full hover:scale-125 transition-all duration-500 cursor-pointer rounded-lg"
                  src={require("../../../assets/img/gallery/c.jpeg")}
                  alt=""
                />
              </div>
            </div>
            <div class="grid gap-4">
              <div>
                <img
                  class="h-auto max-w-full hover:scale-125 transition-all duration-500 cursor-pointer rounded-lg"
                  src={require("../../../assets/img/gallery/d.jpeg")}
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full hover:scale-125 transition-all duration-500 cursor-pointer rounded-lg"
                  src={require("../../../assets/img/gallery/e.jpeg")}
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full hover:scale-125 transition-all duration-500 cursor-pointer rounded-lg"
                  src={require("../../../assets/img/gallery/f.jpeg")}
                  alt=""
                />
              </div>
            </div>
            <div class="grid gap-4">
              <div>
                <img
                  class="h-auto max-w-full hover:scale-125 transition-all duration-500 cursor-pointer rounded-lg"
                  src={require("../../../assets/img/gallery/g.jpeg")}
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full hover:scale-125 transition-all duration-500 cursor-pointer rounded-lg"
                  src={require("../../../assets/img/gallery/h.jpeg")}
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full hover:scale-125 transition-all duration-500 cursor-pointer rounded-lg"
                  src={require("../../../assets/img/gallery/i.jpeg")}
                  alt=""
                />
              </div>
            </div>
            <div class="grid gap-4">
              <div>
                <img
                  class="h-auto max-w-full hover:scale-125 transition-all duration-500 cursor-pointer rounded-lg"
                  src={require("../../../assets/img/gallery/j.jpeg")}
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full hover:scale-125 transition-all duration-500 cursor-pointer rounded-lg"
                  src={require("../../../assets/img/gallery/k.jpeg")}
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full hover:scale-125 transition-all duration-500 cursor-pointer rounded-lg"
                  src={require("../../../assets/img/gallery/l.jpeg")}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="my-7 w-full flex justify-center items-center">
            <video className="rounded-lg w-[36rem] h-[24rem]" controls>
              <source
                src={require("../../../assets/img/gallery/vid1.mp4")}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-2 ">
            <div class="grid gap-4">
              <div>
                <img
                  class="h-auto max-w-full hover:scale-125 transition-all duration-500 cursor-pointer rounded-lg"
                  src={require("../../../assets/img/gallery/m.jpeg")}
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full hover:scale-125 transition-all duration-500 cursor-pointer rounded-lg"
                  src={require("../../../assets/img/gallery/n.jpeg")}
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full hover:scale-125 transition-all duration-500 cursor-pointer rounded-lg"
                  src={require("../../../assets/img/gallery/o.jpeg")}
                  alt=""
                />
              </div>
            </div>
            <div class="grid gap-4">
              <div>
                <img
                  class="h-auto max-w-full hover:scale-125 transition-all duration-500 cursor-pointer rounded-lg"
                  src={require("../../../assets/img/gallery/p.jpeg")}
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full hover:scale-125 transition-all duration-500 cursor-pointer rounded-lg"
                  src={require("../../../assets/img/gallery/q.jpeg")}
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full hover:scale-125 transition-all duration-500 cursor-pointer rounded-lg"
                  src={require("../../../assets/img/gallery/r.jpeg")}
                  alt=""
                />
              </div>
            </div>
            <div class="grid gap-4">
              <div>
                <img
                  class="h-auto max-w-full hover:scale-125 transition-all duration-500 cursor-pointer rounded-lg"
                  src={require("../../../assets/img/gallery/s.jpeg")}
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full hover:scale-125 transition-all duration-500 cursor-pointer rounded-lg"
                  src={require("../../../assets/img/gallery/t.jpeg")}
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full hover:scale-125 transition-all duration-500 cursor-pointer rounded-lg"
                  src={require("../../../assets/img/gallery/u.jpeg")}
                  alt=""
                />
              </div>
            </div>
            <div class="grid gap-4">
              <div>
                <img
                  class="h-auto max-w-full hover:scale-125 transition-all duration-500 cursor-pointer rounded-lg"
                  src={require("../../../assets/img/gallery/v.jpeg")}
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full hover:scale-125 transition-all duration-500 cursor-pointer rounded-lg"
                  src={require("../../../assets/img/gallery/w.jpeg")}
                  alt=""
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full hover:scale-125 transition-all duration-500 cursor-pointer rounded-lg"
                  src={require("../../../assets/img/gallery/x.jpeg")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
