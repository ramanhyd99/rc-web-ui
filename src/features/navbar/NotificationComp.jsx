import {
  ArrowUpTrayIcon,
  BellIcon,
  CheckCircleIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { NewspaperIcon } from "@heroicons/react/24/outline";
import { Badge, Menu, MenuHandler, MenuList } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

class NotificationHandler {
  constructor(type, subtype) {
    this.type = type;
    this.subtype = subtype ? subtype : "";
  }

  generateNotification() {
    let icon = "";
    let message = "";
    let css = "h-7 w-7 flex mt-4";
    let link = null;

    switch (this.type + "." + this.subtype) {
      case "booking.confirmation":
        icon = CheckCircleIcon;
        message = "Your booking for 15th Aug 2024 10:00 AM is confirmed";
        css = css + " text-green-500";
        link = "/my-sessions";
        break;
      case "booking.cancellation":
        icon = XMarkIcon;
        message = "Booking #RC-0046 for client ramanhyd99@gmail.com was cancelled.";
        css = css + " text-red-500";
        link = "/my-sessions";
        break;
      case "assignment.upload":
        icon = ArrowUpTrayIcon;
        message = "ramanhyd99@gmail.com has uploaded a new assignment.";
        css = css + " text-blue-500";
        link = "/client?id=2";
        break;
      case "general.":
        icon = NewspaperIcon;
        message = "Discount on mental health day. 100% off.";
        css = css + " text-blue-500";
        break;
      default:
        icon = NewspaperIcon;
        message = "You have a new notification.";
        css = css + " text-blue-500";
    }

    return {
      icon,
      message,
      css,
      link,
    };
  }
}

const NotificationRow = ({ type, subtype, data }) => {
  const notification = new NotificationHandler(
    type,
    subtype,
    data
  ).generateNotification();

  const content = (
    <>
      <div className="flex justify-center items-center space-x-4 space-y-4 mb-2">
        <div className={notification.css}>
          <notification.icon />
        </div>
        <div className="w-full sm:w-2/3">{notification.message}</div>
      </div>
      <div className="flex justify-end text-gray-700 pr-1 text-xs">1d</div>
    </>
  );

  return (
    <div className="bg-blue-50 rounded-xl p-2">
      {notification.link ? (
        <Link to={notification.link} className="focus:outline-none">
          <div className="hover:bg-gray-50 rounded-xl">{content}</div>
        </Link>
      ) : (
        <div>{content}</div>
      )}
    </div>
  );
};
const NotificationComp = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [badgeValue, setBadgeValue] = useState(5);
  const location = useLocation();

  const clearBadge = () => {
    setBadgeValue(null);
  };

  const handleBellClick = () => {
    if (openMenu === true) {
      clearBadge();
    }
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    setOpenMenu(false);
  }, [location]);

  return (
    <div className="p-1">
      <Menu open={openMenu} handler={handleBellClick}>
        <MenuHandler>
          <div className="flex items-baseline">
            {badgeValue ? (
              <Badge
                content={badgeValue}
                overlap="circular"
                placement="top-end"
              >
                <BellIcon
                  className="h-7 w-7 rounded-full text-blue-500 hover:cursor-pointer"
                  alt="notifications"
                />
              </Badge>
            ) : (
              <BellIcon
                className="h-7 w-7 rounded-full text-blue-500 hover:cursor-pointer"
                alt="notifications"
              />
            )}
          </div>
        </MenuHandler>

        <MenuList className="space-y-4 mt-4 w-[18rem] sm:w-[24rem] max-h-[32rem]">
          {/* <NotificationRow type={"booking"} subtype={"confirmation"} /> */}
          <NotificationRow type={"assignment"} subtype={"upload"} />
          <NotificationRow type={"booking"} subtype={"cancellation"} />
        {/*  <NotificationRow type={"booking"} subtype={"cancellation"} />
          <NotificationRow type={"booking"} subtype={"cancellation"} /> */}
          {/* <NotificationRow type={"general"} /> */}

          {/* <div className="flex justify-center focus:outline-none">
            All set. You have no new notifications.
          </div> */}
        </MenuList>
      </Menu>
    </div>
  );
};

export default NotificationComp;
