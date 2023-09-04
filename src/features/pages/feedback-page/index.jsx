import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  Input,
  Option,
  Rating,
  Select,
  Spinner,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import SEO from "../../seo";
import ReCAPTCHA from "react-google-recaptcha";
import { useEffect, useState } from "react";
import {
  isValidAge,
  isValidEmail,
  isValidText,
} from "../checkout/FormValidations";
import SubmittedComponent from "./SubmittedComponent";
import { useUploadReviewMutation } from "../../../apis/rtk-apis";

export function FeedBack({ className }) {
  const [isCaptchaSuccessfull, setIsCaptchaSuccessfull] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [uploadMutation, { isLoading, isError, isSuccess }] =
    useUploadReviewMutation();

  const [formData, setFormData] = useState({
    email: null,
    age: null,
    gender: "female",
    city: "",
    rating: 4,
    feedback: null,
    improve: "",
    verified: false,
  });

  const handleEmailChange = (event) => {
    setFormData({
      ...formData,
      ["email"]: event.target.value,
    });
  };

  const handleAgeChange = (event) => {
    setFormData({
      ...formData,
      ["age"]: event.target.value,
    });
  };

  const handleCityChange = (event) => {
    setFormData({
      ...formData,
      ["city"]: event.target.value,
    });
  };

  const handleGenderChange = (value) => {
    setFormData({
      ...formData,
      ["gender"]: value,
    });
  };

  const handleRatingChange = (value) => {
    setFormData({
      ...formData,
      ["rating"]: value,
    });
  };

  const handleFeedbackChange = (event) => {
    setFormData({
      ...formData,
      ["feedback"]: event.target.value,
    });
  };

  const handleImproveChange = (event) => {
    setFormData({
      ...formData,
      ["improve"]: event.target.value,
    });
  };

  const handleCaptchaChange = (value) => {
    if (value != null) {
      setFormData({
        ...formData,
        ["verified"]: true,
      });
      setIsCaptchaSuccessfull(true);
    } else setIsCaptchaSuccessfull(false);
  };

  const handleSubmitForm = () => {
    uploadMutation({ form: formData });

    // setIsSubmitted(true); //TODO api call to submit review
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <SEO title="Feedback" />
      <div className="bg-white sm:py-4">
        <div className="mb-10 md:mb-12 flex justify-center">
          <Card className="w-full max-w-5xl flex justify-start items-center sm:flex-row sm:justify-none">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-full h-1/6 sm:h-full sm:w-2/5 shrink-0 rounded-none sm:rounded-r-none "
            >
              <img
                src={require("../../../assets/backgrounds/feedback.jpg")}
                alt="feedback"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            {!isSubmitted ? (
              <CardBody className="w-full sm:w-1/2">
                <div
              
                  className="mb-2 uppercase flex justify-center sm:justify-start font-quicksand text-xl text-blue-500"
                >
                  Feedback
                </div>
                <Typography
                  variant="h5"
                  color=""
                  className="mb-2 flex justify-center sm:justify-start text-pink-200"
                >
                  Your Opinion Matters To Us!
                </Typography>
                <CardBody className="flex flex-col gap-1">
                  {formData.email != null && !isValidEmail(formData.email) ? (
                    <Input
                      onChange={handleEmailChange}
                      name="email"
                      label="Email"
                      size="lg"
                      error
                    />
                  ) : (
                    <Input
                      onChange={handleEmailChange}
                      name="email"
                      label="Email"
                      size="lg"
                      color="blue"
                    />
                  )}
                  <div className="mt-2.5 flex justify-between items-center">
                    <div className="">
                      {formData.age != null && !isValidAge(formData.age) ? (
                        <Input
                          onChange={handleAgeChange}
                          name="age"
                          label="Age"
                          size="sm"
                          error
                        />
                      ) : (
                        <Input
                          onChange={handleAgeChange}
                          name="age"
                          label="Age"
                          size="sm"
                          color="blue"
                        />
                      )}
                    </div>
                    <div>
                      <div className="w-34">
                        <Select
                          label="Gender"
                          color="blue"
                          onChange={handleGenderChange}
                          value={formData.gender ? formData.gender : ""}
                        >
                          <Option value="female">Female</Option>
                          <Option value="male">Male</Option>
                          <Option value="transgender">Transgender</Option>
                          <Option value="non-binary">Non-binary</Option>
                          <Option value="">Prefer not to say</Option>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2.5 flex justify-between items-center">
                    <div>
                      <Input
                        onChange={handleCityChange}
                        name="city"
                        label="City"
                        size="sm"
                        color="blue"
                      />
                    </div>
                    <div className="items-center flex">
                      {/* <div className="text-xs font-varela font-bold">rating</div> */}
                      <Rating
                        value={4}
                        onChange={handleRatingChange}
                        name="rating"
                      />
                    </div>
                  </div>
                  <div className="mt-2.5">
                    {formData.feedback != null &&
                    !isValidText(formData.feedback) ? (
                      <Textarea
                        size="lg"
                        label="Your feedback"
                        onChange={handleFeedbackChange}
                        error
                      />
                    ) : (
                      <Textarea
                        size="lg"
                        color="blue"
                        label="Your feedback"
                        onChange={handleFeedbackChange}
                      />
                    )}
                  </div>
                  <div className="mt-2.5">
                    <Textarea
                      size="sm"
                      color="blue"
                      label="What we can improve"
                      onChange={handleImproveChange}
                    />
                  </div>
                  {/* <div className="-ml-2.5">
                  <Checkbox label="Share my name" />
                </div> */}
                  <span className="flex justify-start">
                    <ReCAPTCHA
                      sitekey={"6LcTNIknAAAAALjBN2CVyCXS87u8wnkD5xmmmR8k"}
                      onChange={handleCaptchaChange}
                    />
                  </span>
                  {isCaptchaSuccessfull &&
                  isValidEmail(formData.email) &&
                  isValidText(formData.feedback) &&
                  isValidAge(formData.age) ? (
                    <span className="mt-2.5">
                      {!isLoading && !isSuccess ? (
                        <Button
                          variant="text"
                          className="flex items-center gap-2"
                          type="submit"
                          onClick={handleSubmitForm}
                        >
                          Submit review
                        </Button>
                      ) : (
                        <>
                          {!isSuccess ? (
                            <Spinner className="h-12" />
                          ) : (
                            setIsSubmitted(true)
                          )}
                        </>
                      )}
                    </span>
                  ) : (
                    isCaptchaSuccessfull && (
                      <div className="text-red-400 text-xs">
                        Mandatory fields: email, age, feedback
                      </div>
                    )
                  )}
                </CardBody>
              </CardBody>
            ) : (
              <div className="w-full flex justify-center items-center">
                <SubmittedComponent />
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}

export default FeedBack;
