"use client";
import { useDataContext } from "@/context/dataContext";
import {
  Pie,
  PieChart,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

const Stats = () => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  const { timeline } = useDataContext();

  const data = [
    {
      name: "Audio Call",
      value: timeline.filter((t) => t.status === "audioCall").length,
      fill: "#0088FE",
    },
    {
      name: "Message",
      value: timeline.filter((t) => t.status === "message").length,
      fill: "#00C49F",
    },
    {
      name: "Video Call",
      value: timeline.filter((t) => t.status === "videoCall").length,
      fill: "#FFBB28",
    },
  ];

  return (
    <>
      <article className="bg-gray-100">
        <h3 className="text-4xl text-primary font-semibold wrapper py-10 ">
          Friendship Analytics
        </h3>
        <div className="wrapper flex w-full flex-col  justify-center py-10  mb-10 shadow-xl  border border-gray-300 rounded-xl bg-white">
          <p className="text-3xl mt-10 text-primary">By Interaction Type:</p>
          <PieChart
            className="mx-auto pb-10 text-2xl  "
            style={{
              width: "100%",
              maxWidth: "500px",
              maxHeight: "80vh",
              aspectRatio: 1,
            }}
            responsive
          >
            <Pie
              data={data}
              innerRadius="80%"
              outerRadius="100%"
              cornerRadius="10%"
              fill="#8884d8"
              paddingAngle={4}
              dataKey="value"
              isAnimationActive={true}
            />
            <Legend className="" />

            <Tooltip />
          </PieChart>
        </div>
      </article>
    </>
  );
};

export default Stats;
