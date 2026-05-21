import {
  BarChart,
  LineChart,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
  Line,
  Pie,
  Cell
} from "recharts";
//import { BarChart, LineChart, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
function RechartSetUp({ charts }) {
  if (!charts || charts.length === 0) return null;
  const COLORS = [
  "#6366f1", // indigo
  "#22c55e", // green
  "#f59e0b", // amber
  "#ef4444", // red
  "#3b82f6", // blue
  "#a855f7", // purple
];
  return (
    <div className='space-y-8'>
      {charts.map((chart, index) => (
        <div key={index} className='border border-gray-200 rounded-xl p-4 bg-white'>
          <h4 className='font font-semibold text-gray-800 mb-3'>
            📊 {chart.title}
          </h4>
          <div className='h-72'>
            <ResponsiveContainer width="100%" height="100%">

              {chart.type === "bar" && (
                <BarChart data={chart.data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                    {chart.data.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Bar>

                </BarChart>
              )}
              {chart.type === "line" && (
                <LineChart data={chart.data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone"
                    dataKey="value"
                    stroke="#6366f1"
                    strokeWidth={3} />

                </LineChart>
              )}
              {chart.type === "pie" && (
                <PieChart>
  <Tooltip />
  <Pie
    data={chart.data}
    dataKey="value"
    nameKey="name"
    outerRadius={100}
    label
  >
    {chart.data.map((_, i) => (
      <Cell key={i} fill={COLORS[i % COLORS.length]} />
    ))}
  </Pie>
</PieChart>
              )}


            </ResponsiveContainer>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RechartSetUp
