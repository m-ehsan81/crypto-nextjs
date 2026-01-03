import { SearchCoinItem } from "@/lib/features/crypto/types";
import { CurrencyItemsType } from "../coin-grid/types";

export interface SearchBarProps {
  currency: CurrencyItemsType;
  onCurrencyChange: (value: CurrencyItemsType) => void;
}

export interface ResultModalProps {
  open: boolean;
  coins?: SearchCoinItem[];
  isError?: boolean;
  isLoading?: boolean;
}
