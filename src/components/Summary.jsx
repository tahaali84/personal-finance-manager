import { PieChart, Pie, Tooltip, Cell } from "recharts";

const COLORS = [
  "#6366f1",
  "#22c55e",
  "#f97316",
  "#ef4444",
  "#06b6d4",
  "#a855f7",
];

function Summary({ expenses }) {
  const data = expenses.reduce((acc, cur) => {
    const found = acc.find((a) => a.name === cur.category);
    if (found) {
      found.value += cur.amount;
    } else {
      acc.push({ name: cur.category, value: cur.amount });
    }
    return acc;
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <PieChart width={350} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={120}
          label
        >
          {data.map((_, index) => (
            <Cell
              key={index}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default Summary;
