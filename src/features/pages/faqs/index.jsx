import { useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../common/PageTitle";
import SEO from "../../seo";

const content = [
  {
    id: 1,
    question: "How long are the sessions?",
    answer:
      "Our sessions typically last for one hour. We believe this duration provides ample time for meaningful discussions, exploring your concerns, and working towards your goals.",
  },
  {
    id: 2,
    question: "What is the refund/cancellation/reschedule policy?",
    answer:
      "We understand that unexpected situations may arise, but unfortunately, we do not currently offer rescheduling, refunds or cancellations. However, we are committed to working with you to find alternative solutions and accommodate any necessary adjustments to your appointments.",
  },
  {
    id: 3,
    question: "How frequently can I schedule sessions?",
    answer:
      "The frequency of sessions can vary depending on your specific needs and goals. It is best to discuss this with your therapist or counselor to determine a schedule that works best for you. As a rule of thumb, it's best to keep a gap of at-least 3 days before booking a new session.",
  },
  {
    id: 4,
    question: "What types of issues do you specialize in?",
    answer:
      "We specialize in a wide range of issues including anxiety, depression, relationship problems, stress management, self-esteem, trauma, and more. Feel free to reach out to discuss your specific concerns.",
  },
  {
    id: 5,
    question: "Do you offer online therapy or counseling?",
    answer:
      "Yes, we offer online therapy or counseling sessions for individuals who prefer remote access or are unable to attend in-person sessions. Online sessions provide convenience and accessibility while maintaining the same level of professional support.",
  },
  {
    id: 6,
    question: "What can I expect during the first session?",
    answer:
      "During the initial session, your therapist or counselor will work with you to gather information about your background, current concerns, and goals for therapy. This helps them develop an understanding of your unique situation and create a tailored treatment plan.",
  },
  {
    id: 7,
    question: "How long does therapy or counseling usually last?",
    answer:
      "The duration of therapy or counseling can vary depending on individual needs and goals. Some people find benefit from short-term therapy, which may last a few weeks or months, while others may engage in longer-term therapy for ongoing support and personal growth.",
  },
  {
    id: 8,
    question: "Do you offer offline counselling sessions?",
    answer:
      "Please contact +91-7975897538 and based on your location the best option can be decided.",
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

  return (
    <div className={`${className}`}>
      <SEO title="FAQs" />
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-12">
            <PageTitle text="Frequently asked questions" className="mb-2" />
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              Please reach out to us{" "}
              <Link
                to="/contact-us"
                className="underline font-bold text-black hover:text-black/60"
              >
                here
              </Link>{" "}
              if you have any further questions.
            </p>
          </div>
          <div className="mx-auto flex max-w-screen-sm flex-col border-t">
            {content.map((item, index) => (
              <div className="border-b">
                <div
                  className="flex cursor-pointer justify-between gap-2 py-4 text-black hover:text-blue-500 active:text-blue-600"
                  onClick={
                    selectedIndex !== index
                      ? () => handleOnDrop(index)
                      : () => handleOnUnDrop(index)
                  }
                >
                  <span className="font-semibold transition duration-100 md:text-lg">
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
