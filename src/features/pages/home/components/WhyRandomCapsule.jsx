import { StarIcon } from "@heroicons/react/20/solid";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { motion } from "framer-motion";

const WhyRandomCapsule = ({ className }) => {
  return (
    <>
      <h5>
        <div className="mt-6 md:mt-12 lg:text-3lg py-6 sm:py-8 lg:py-12">
          <h4 className="text-center text-3xl lg:text-4xl font-bold text-gray-800">
            {" "}
            Why Random Capsule?
          </h4>
          <h6 className="pt-3 text-center text-md lg:text-md font-varela text-gray-500 ">
            Random Capsule has been made with the sole aim to bring afforadable
            and better mental health-care closer to you!
          </h6>
        </div>
      </h5>
      <div className="flex flex-col sm:flex sm:flex-row items-center justify-center space-y-6 sm:space-x-12">
        <motion.div whileHover={{ scale: 1.1 }}>
          <div className="border-t-4 rounded-t-xl border-green-500 mt-6">
            <Card className="mt-6 w-64 min-h-[20rem]">
              <CardBody>
                <Typography
                  variant="h5"
                  className="mb-5 text-green-500  border-gray-200"
                >
                  Payment After Session
                </Typography>
                <Typography>
                  You can avail the services without any financial commitments
                  until after the session. It's all about trust, transparency,
                  and putting you, the client, first.
                </Typography>
              </CardBody>
              {/* <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter> */}
            </Card>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <div className="border-t-4 rounded-t-xl border-blue-500">
            <Card className="mt-6 w-64 min-h-[20rem]">
              <CardBody>
                <Typography
                  variant="h5"
                  className="mb-8 text-blue-500  border-gray-200"
                >
                  Afforadable Pricing @ ₹329 only
                </Typography>
                <Typography>
                  Prioritizing affordability without compomising quality, we aim
                  to ensure that you can receive the support you deserve without
                  financial barriers standing in the way.
                </Typography>
              </CardBody>
              {/* <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter> */}
            </Card>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <div className="border-t-4 rounded-t-xl border-pink-500">
            {/* <div className="border-t-4 rounded-t-xl border-pink-500"> */}
            <Card className="mt-6 w-64 min-h-[20rem]">
              <CardBody>
                <Typography
                  variant="h5"
                  className="mb-5 text-pink-500  border-gray-200"
                >
                  Extensive Practical Experience
                </Typography>
                <Typography>
                  Experience the valuable expertise and extensive practical
                  knowledge of Ms. Pooja, empowering her to offer you impactful
                  strategies that can truly help transform your life.
                </Typography>
              </CardBody>
              {/* <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter> */}
            </Card>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <div className="border-t-4 rounded-t-xl border-orange-500">
            <Card className="mt-6 w-64 min-h-[20rem]">
              <CardBody>
                <Typography
                  variant="h5"
                  className="mb-5 text-orange-500  border-gray-200"
                >
                  Personalized Support
                </Typography>
                <Typography>
                  We understand that everyone's journey is different, and we're
                  here to provide you with the guidance and assistance that fits
                  your specific goals
                </Typography>
              </CardBody>
              {/* <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter> */}
            </Card>
          </div>
        </motion.div>
        {/* <motion.div whileHover={{ scale: 1.1 }}>
          <div className="border-t-4 rounded-t-xl border-orange-500">
            <Card className="mt-6 w-64 min-h-[20rem]">
              <CardBody>
                <Typography
                  variant="h5"
                  className="mb-5 text-orange-500  border-gray-200"
                >
                  Ease of Booking
                </Typography>
                <Typography>
                  Whether you prefer a phone call, online video sessions, or
                  prefer to chat, our platform offers convenient options that
                  allow you to receive the support you need from the comfort of
                  your own environment.
                </Typography>
              </CardBody>
              {/* <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter> 
            </Card>
          </div>
        </motion.div> */}
      </div>
    </>
  );
};

export default WhyRandomCapsule;
