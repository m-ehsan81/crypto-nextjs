import { GetCoinChartRes } from "@/lib/features/crypto/types";

export const typeOptions: { value: keyof GetCoinChartRes; label: string }[] = [
  { value: "prices", label: "Prices" },
  { value: "market_caps", label: "Market Caps" },
  { value: "total_volumes", label: "Total Volumes" },
];

export const daysOptions: { value: number; label: string }[] = [
  { value: 1, label: "24H" },
  { value: 7, label: "7D" },
  { value: 30, label: "1M" },
  { value: 365, label: "1Y" },
];
