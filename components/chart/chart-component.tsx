import { GetCoinChartRes } from "@/lib/features/crypto/types";
import { useAppSelector } from "@/lib/hooks";
import {
  AreaChart,
  Area,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function ChartComponent({
  data,
  type,
}: {
  data: {
    [key: string]: number;
    date: number;
  }[];
  type: keyof GetCoinChartRes;
}) {
  const theme = useAppSelector((state) => state.theme.theme);

  const formatDate = (value: number) => {
    const date = new Date(value);
    return date.toLocaleString("en-GB", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart width={400} height={400} data={data}>
        <defs>
          <linearGradient id={`gradient${type}`} x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-blue-500)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="var(--color-blue-500)"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>

        <CartesianGrid
          stroke={
            theme === "dark" ? "var(--color-gray-800)" : "var(--color-gray-300)"
          }
        />

        <Area
          type="monotone"
          dataKey={type}
          stroke="var(--color-blue-500)"
          strokeWidth={2}
          fill={`url(#gradient${type})`}
          fillOpacity={1}
        />

        <YAxis dataKey={type} domain={["auto", "auto"]} />
        <XAxis dataKey="date" hide />
        <Legend />
        <Tooltip
          labelFormatter={(value) => formatDate(value as number)}
          contentStyle={{
            backgroundColor:
              theme === "dark"
                ? "rgba(15, 23, 42, 0.70)"
                : "rgba(255, 255, 255, 0.7)",
            border: "1px solid rgba(148, 163, 184, 0.5)",
            borderRadius: 8,
            padding: "8px 10px",
          }}
          labelStyle={{
            color: theme === "dark" ? "var(--color-gray-100)" : "var(--color-gray-900)",
            fontSize: 12,
            marginBottom: 4,
          }}
          itemStyle={{
            color: "var(--color-blue-500)",
            fontSize: 12,
          }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default ChartComponent;
