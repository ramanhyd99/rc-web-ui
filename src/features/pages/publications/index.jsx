import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import PageTitle from "../../common/PageTitle";
import SEO from "../../seo";

const MyPublications = () => {
  return (
    <div>
      <SEO title="Library" />
      <div>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <PageTitle text="Publications" className="mb-0 sm:font-md" />

          <div>
            <div className="flex justify-center items-center mb-4 font-quicksand text-pink-200">
              Checkout my publications to some national and international journals.
            </div>
            {/* <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
            </div> */}
            <div>
              <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                  <div class="flex flex-wrap justify-around sm:-m-4 -mx-4 -mb-10 md:space-y-0 space-y-6">
                    <div class="p-2 md:w-1/3 flex flex-col text-center items-center">
                      <div class=" inline-flex items-center justify-centermb-5 flex-shrink-0">
                        <img
                          className="hover:scale-150 transition-all"
                          src={require("../../../assets/img/publication1.jpeg")}
                          alt="Publication 1"
                        />
                      </div>
                      <div class="flex-grow">
                        <h2 class="text-gray-900 text-lg title-font font-medium mb-3 mt-2">
                          Association Between Trimesters With Levels of Stress
                          in Pregnant Women
                        </h2>
                        <div className="flex justify-center">
                          <a
                            href="https://www.ijcspub.org/papers/IJCSP23A1290.pdf"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <ArrowDownTrayIcon className="h-7 text-black" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="p-2 md:w-1/3 flex flex-col text-center items-center">
                      <div class=" inline-flex items-center justify-centermb-5 flex-shrink-0">
                        <img
                          className="hover:scale-150 transition-all"
                          src={require("../../../assets/img/publication2.jpeg")}
                          alt="Publication 1"
                        />
                      </div>
                      <div class="flex-grow">
                        <h2 class="text-gray-900 text-lg title-font font-medium mb-3 mt-2">
                          STRESS IN PREGNANT WOMEN RESIDING IN RURAL FIELD
                          PRACTICE AREA OF PHC KANKUMBI, BELAGAVI
                        </h2>
                        <div className="flex justify-center">
                          <a
                            href="https://ijcspub.org/papers/IJCSP23A1287.pdf"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <ArrowDownTrayIcon className="h-7 text-black" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="p-2  flex flex-col text-center items-center">
                  <div class="md:w-1/3 inline-flex items-center justify-centermb-5 flex-shrink-0">
                    <img
                      className="h-4/5 hover:scale-150 transition-all"
                      src={require("../../../assets/img/publication3.jpeg")}
                      alt="Publication 1"
                    />
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3 mt-2">
                      Relationship Between Social Media and Personality Among
                      Youth
                    </h2>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MyPublications;
