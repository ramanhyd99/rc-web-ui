import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  Input,
  Rating,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import SEO from "../../seo";

export function FeedBack({ className }) {
  return (
    <div className={`${className}`}>
      <SEO title="FAQs" />
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mb-10 md:mb-12 flex justify-center">
          <Card className="w-full max-w-4xl flex sm:flex-row">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-1/2 sm:w-2/5 shrink-0 rounded-r-none"
            >
              <img
                src={require("../../../assets/backgrounds/feedback.jpg")}
                alt="feedback"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody className="w-full sm:w-1/2">
              <Typography variant="h6" color="blue" className="mb-4 uppercase">
                Feedback
              </Typography>
              <Typography variant="h4" color="blue-gray" className="mb-2">
                Your Opinion Matters To Us!
              </Typography>
              <CardBody className="flex flex-col gap-3">
                <Input label="Name" size="lg" />
                <div className="mt-2.5">
                  <Rating value={4} />
                </div>
                <div className="mt-2.5">
                  <Textarea size="lg" color="blue" label="Your feedback" />
                </div>
                <div className="mt-2.5">
                  <Textarea
                    size="lg"
                    color="green"
                    label="What we can improve"
                  />
                </div>
                <div className="-ml-2.5">
                  <Checkbox label="Share my name" />
                </div>
              </CardBody>
              <span className="inline-block">
                <Button variant="text" className="flex items-center gap-2">
                  Submit review
                </Button>
              </span>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default FeedBack;
