import { SearchCoinItem } from "@/lib/features/crypto/types";
import { Dispatch, SetStateAction } from "react";

export interface SearchBarProps {
  currency: string;
  onCurrencyChange: (value: string) => void;
  setSelectedCoin: Dispatch<SetStateAction<string>>;
}

export interface ResultModalProps {
  open: boolean;
  coins?: SearchCoinItem[];
  isError?: boolean;
  isLoading?: boolean;
  onCoinClicked: (coin: string) => void;
}
