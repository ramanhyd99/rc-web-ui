import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const moods = {
  "😶": {
    desc: "Other",
    msg: "Please let us know how are you feeling by connecting to us. We do have a safe space for anything that isn't usually mentioned or talked about.",
  },
  "😞": {
    desc: "Sad",
    msg: "We understand how terrible it might feel when you are hurt. Hope you find some peace here with us.",
  },
  "🤔": {
    desc: "Not Sure",
    msg: "We understand you could have endless moods/feelings that cannot be named. Feeling clueless, numb, hopeless might be more challenging and annoying as you don't know what exactly you are feeling. We hope to help you understand yourself better.",
  },
  "😄": {
    desc: "Happy",
    msg: "Hey, hi-5! We are glad you are happy. Hope you spread happiness today!",
  },
  "😤": {
    desc: "Angry",
    msg: "We understand that anger needs a space to be heard. We hope you release your anger at the right place.",
  },
};

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [showTracker, setShowTracker] = useState(false);

  const handleOnMoodClick = (val) => {
    setSelectedMood(val);
  };

  const handleClose = () => {
    setShowTracker(false);
  };

    useEffect(() => {
      const delay = 5000;

      const timer = setTimeout(() => {
        const moodRecorded = Cookies.get("rc_mood_recorded");
        if (!showTracker && !moodRecorded) {
          setShowTracker(true);
          Cookies.set("rc_mood_recorded", true, { expires: 3 / 24 }); // every 3 hours it's asked
        } else {
          setShowTracker(false);
        }
      }, delay);

      return () => {
        clearTimeout(timer);
      };
    }, []);

  return (
    <>
      {showTracker && (
        <div className="flex justify-center">
          <div className="bg-teal-50 rounded-2xl z-10 fixed bottom-3 max-w-[32rem] max-h-[20rem] mx-2">
            <div className="mx-auto max-w-screen-2xl flex items-center">
              {!selectedMood ? (
                <div className="relative flex justify-center flex-wrap rounded-2xl p-4 pb-6 sm:flex-nowrap sm:items-center sm:justify-center sm:gap-3 sm:pr-8 md:px-8">
                  <div className="p-3 order-0 mb-4 inline-block w-11/12 max-w-screen-sm text-sm text-black sm:order-none sm:mb-0 sm:w-auto md:text-base">
                    <div className="flex justify-center mb-2">
                      <p>
                        <div className="text-center text-2xl text-gray-800 mb-4">
                          Hey! How are you feeling today?
                        </div>
                      </p>
                    </div>
                    <div className="flex justify-around space-x-2 sm:space-x-6">
                      {Object.keys(moods).map((mood) => (
                        <div>
                          <div className="flex justify-center">
                            <button
                              onClick={() => handleOnMoodClick(mood)}
                              className="text-3xl flex items-center justify-center"
                            >
                              {mood}
                            </button>
                          </div>
                          <div className="font-semibold font-quicksand text-center ">
                            {moods[mood].desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="sm:flex sm:flex-col flex space-x-4 sm:space-x-0 sm:space-y-4 sm:mt-4">
                    <button
                      onClick={handleClose}
                      className="inline-block w-full whitespace-nowrap rounded-lg bg-white px-4 py-2 text-center text-xs font-semibold text-black outline-none transition duration-100 hover:bg-gray-100 border-blue-500 focus-visible:ring sm:order-none sm:w-auto md:text-sm"
                    >
                      Skip
                    </button>
                    {/* <button className="inline-block w-full whitespace-nowrap rounded-lg bg-black px-4 py-2 text-center text-xs font-semibold text-white outline-none  transition duration-100 hover:bg-gray-700 focus-visible:ring  sm:order-none sm:w-auto md:text-sm">
                Submit
              </button> */}
                  </div>
                </div>
              ) : (
                <div className="text-center flex-col w-full items-center justify-center py-2">
                  <div className="p-6 font-quicksand">
                    {moods[selectedMood].msg}
                  </div>
                  <button
                    onClick={handleClose}
                    className="inline-block w-1/3 whitespace-nowrap rounded-lg bg-white px-4 py-2 text-center text-xs font-semibold text-black outline-none transition duration-100 hover:bg-gray-100 border-blue-500 focus-visible:ring sm:order-none sm:w-auto md:text-sm"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MoodTracker;
