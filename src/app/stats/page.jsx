'use client'
import { useDataContext } from "@/context/dataContext";
import { Pie, PieChart, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";

const COLORS = ["#244D3F", "#64748B", "#4CAF50"];

 const Stats = () => {
  const { timeline } = useDataContext();

  // count each status from your timeline array
  const data = [
    { name: "Audio Call", value: timeline.filter(t => t.status === "audioCall").length },
    { name: "Message", value: timeline.filter(t => t.status === "message").length },
    { name: "Video Call", value: timeline.filter(t => t.status === "videoCall").length },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={120}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Stats;