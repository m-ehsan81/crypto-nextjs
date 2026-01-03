import { GetCoinRes } from "@/lib/features/crypto/types";

export interface ChartProps {
  selectedCoin: string;
  onClose: () => void;
}

export interface TypeButtonProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}
