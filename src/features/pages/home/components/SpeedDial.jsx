import {
  FaceSmileIcon,
  InformationCircleIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import {
  IconButton,
  SpeedDial,
  SpeedDialAction,
  SpeedDialContent,
  SpeedDialHandler,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactUsModal from "../../../common/modals/ContactUsModal";

const SpeedDialComp = () => {
  const [onPhoneClick, setPhoneClick] = useState(false);
  const navigate = useNavigate();

  const handlePhoneClick = () => {
    setPhoneClick(!onPhoneClick);
  };

  const handleFeedbackClick = () => {
    navigate("/feedback");
  };

  const labelProps = {
    variant: "small",
    color: "blue-gray",
    className:
      "absolute top-2/4 left-2/4 -translate-y-2/4 translate-x-3/4 font-normal",
  };

  return (
    <SpeedDial>
      <SpeedDialHandler>
        <IconButton size="lg" className="rounded-full">
          <InformationCircleIcon className="h-8 w-8 transition-transform group-hover:rotate-45" />
        </IconButton>
      </SpeedDialHandler>
      <SpeedDialContent>
        <SpeedDialAction className="relative">
          <FaceSmileIcon className="h-5 w-5" onClick={handleFeedbackClick} />
          <Typography {...labelProps}>Feedback</Typography>
        </SpeedDialAction>
        <SpeedDialAction className="relative">
          <PhoneIcon className="h-5 w-5" onClick={handlePhoneClick} />
          <Typography {...labelProps}>Contact Us</Typography>
        </SpeedDialAction>
      </SpeedDialContent>
      {onPhoneClick && <ContactUsModal setOpen={handlePhoneClick} />}
    </SpeedDial>
  );
};

export default SpeedDialComp;
