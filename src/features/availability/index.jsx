import { useState } from "react";
import BookingComponent from "../pages/booking/BookingComponent";
import SetAvailabilityComponent from "./SetAvailabilityComponent";

const Availability = () => {
  const [date] = useState(null);

  return (
    <>
      <BookingComponent />
      <div className="border-t border-gray-200">
        <SetAvailabilityComponent date={date} />
      </div>
    </>
  );
};

export default Availability;
