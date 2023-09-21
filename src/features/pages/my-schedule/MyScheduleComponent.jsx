import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import AdminSessionsTable from "./AdminSessionsTable";

const MyScheduleComp = () => {
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
    },
    {
      label: "Tomorrow",
      value: tomorrowFormatted,
    },
  ];

  return (
      <div className="flex justify-center w-full items-center">
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
                <AdminSessionsTable date={value} />
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
    </div>
  );
};

export default MyScheduleComp;
