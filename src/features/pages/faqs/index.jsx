import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../common/PageTitle";
import SEO from "../../seo";

const content = [
  {
    index: 1,
    question: "How long are the sessions?",
    answer:
      "Our sessions typically last for one hour. We believe this duration provides ample time for meaningful discussions, exploring your concerns, and working towards your goals.",
  },
  {
    index: 2,
    question: "What is the refund/cancellation policy?",
    answer:
      "We understand that unexpected situations may arise and that's we provide you with the option to cancel the session. You will be refunded the paid amount at the earliest via the mode you have paid it.",
  },
  {
    index: 9,
    question: "How is a free follow-up session allocated?",
    answer:
      "To assess your progress and/or discuss assignments amongst other things, your psychologist will decide and grant you a free follow-up session after every few sessions. You can avail this option during checkout.",
  },
  {
    index: 3,
    question: "How frequently can I schedule sessions?",
    answer:
      "The frequency of sessions can vary depending on your specific needs and goals. It is best to discuss this with your therapist or counselor to determine a schedule that works best for you. As a rule of thumb, it's best to keep a gap of at-least 1 day before booking a new session.",
  },
  {
    index: 4,
    question: "What types of issues do you specialize in?",
    answer:
      "We specialize in a wide range of issues including anxiety, depression, relationship problems, stress management, self-esteem, trauma, and more. Feel free to reach out to discuss your specific concerns.",
  },
  {
    index: 5,
    question: "Do you offer online therapy or counseling?",
    answer:
      "Yes, we primarily offer online therapy or counseling sessions. Online sessions provide convenience and accessibility while maintaining the same level of professional support as of in-person counseling.",
  },
  {
    index: 6,
    question: "Do you offer offline counselling sessions?",
    answer:
      "Please contact +91-7975897538 and based on your location the best option can be decided.",
  },
  {
    index: 7,
    question: "How does the process of counselling work at Random Capsule?",
    answer:
      "The process of counselling is unique for every person. It is tailored differently for every client keeping in mind their issue and potentialities. However an eclectic approach, assignments and internal reflection are the key features of counselling at Random Capsule",
  },
  {
    index: 7,
    question: "What can I expect during the first session?",
    answer:
      "During the initial session, your therapist or counselor will work with you to gather information about your background, current concerns, and goals for therapy. This helps them develop an understanding of your unique situation and create a tailored treatment plan.",
  },
  {
    index: 8,
    question: "How long does therapy or counseling usually last?",
    answer:
      "The duration of therapy or counseling can vary depending on individual needs and goals. Some people find benefit from short-term therapy, which may last a few weeks or months, while others may engage in longer-term therapy for ongoing support and personal growth.",
  },
];

const FAQs = ({ className }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleOnDrop = (id) => {
    setSelectedIndex(id);
  };

  const handleOnUnDrop = (id) => {
    setSelectedIndex(null);
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.get("index"))
      setSelectedIndex(parseInt(queryParams.get("index")));
  }, []);

  return (
    <div className="py-2">
      <SEO title="FAQs" />
      <div className="bg-white">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-12">
            <PageTitle text="Frequently asked questions" className="mb-2" />
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg pt-2">
              Please reach out to us{" "}
              <Link
                to="/contact-us"
                className="underline font-bold text-black hover:text-black/60  highlight highlight-pink-50 highlight-spread-sm highlight-variant-5"
              >
                here
              </Link>{" "}
              if you have any further questions.
            </p>
          </div>
          <div className="mx-auto flex max-w-screen-md flex-col">
            {content.map((item, index) => (
              <div className="border-b rounded-xl px-5 bg-gray-50 mt-4">
                <div
                  className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-blue-500 active:text-blue-600"
                  onClick={
                    selectedIndex !== index
                      ? () => handleOnDrop(index)
                      : () => handleOnUnDrop(index)
                  }
                >
                  <span
                    className={`font-semibold transition duration-100 md:text-lg ${
                      selectedIndex === index ? "text-blue-500" : ""
                    } `}
                  >
                    {item.question}
                  </span>

                  {selectedIndex !== index ? (
                    <span className="text-blue-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  ) : (
                    <span className="text-blue-500 transform rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  )}
                </div>

                {selectedIndex === index && (
                  <p className="mb-4 text-gray-500">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
