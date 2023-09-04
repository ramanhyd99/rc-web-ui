// import {
//   Bar,
//   BarChart,
//   Cell,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const data = [
  {
    "date": "Jun 2023",
    "count": 2
  },
  {
    "date": "Jul 2023",
    "count": 12
  },
  {
    "date": "Aug 2023",
    "count": 9
  },
  {
    "date": "Sept 2023",
    "count": 1
  },
  {
    "date": "Oct 2023",
    "count": 10
  }
  // Add more data points as needed
];

const BarChartComponent = (props) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart width={730} height={250} data={props.data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      {/* <Line type="monotone" dataKey="count" stroke="#8884d8" name="Confirmed Bookings" /> */}
      <Line type="monotone" dataKey="count" stroke={props.color} name={props.name} />
      {/* Add more <Line> components for other lines if needed */}
    </LineChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
