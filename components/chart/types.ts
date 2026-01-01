import { GetCoinRes } from "@/lib/features/crypto/types";

export interface ChartProps {
  selectedCoin: GetCoinRes;
  onClose: () => void;
}
