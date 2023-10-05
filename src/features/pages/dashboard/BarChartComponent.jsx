// import {
//   Bar,
//   BarChart,
//   Cell,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const BarChartComponent = (props) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        width={730}
        height={250}
        data={props.data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* <Line type="monotone" dataKey="count" stroke="#8884d8" name="Confirmed Bookings" /> */}
        <Line
          type="monotone"
          dataKey="count"
          stroke={props.color}
          name={props.name}
        />
        {/* Add more <Line> components for other lines if needed */}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
