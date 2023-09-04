import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import BookingsByDateTable from "../my-sessions/BookingsByDateTable";
import BookingsTable from "../my-sessions/BookingsTable";



const SessionsListings = () => {
  const currentDate = new Date();
  var tomorrowDate = new Date(currentDate);
  tomorrowDate.setDate(currentDate.getDate() + 1);

  // Format today's date as "YYYY-MM-DD"
  var todayFormatted = currentDate.toISOString().split("T")[0];

  // Format tomorrow's date as "YYYY-MM-DD"
  var tomorrowFormatted = tomorrowDate.toISOString().split("T")[0];

  const data = [
    {
      label: "Today",
      value: todayFormatted,
      desc: `It really matters and then like it really doesn't matter.
        What matters is the people who are sparked by it. And the people 
        who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Tomorrow",
      value: tomorrowFormatted,
      desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ];

  return (
    <div className="mt-12 w-full">
      <div className="py-2.5 flex justify-center">
        <span className="font-varela">Upcoming Sessions</span>
      </div>
      <div className="flex justify-center items-center">
        <Tabs value={todayFormatted}>
          <TabsHeader className="">
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                <BookingsByDateTable date={value} />
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
};

export default SessionsListings;
