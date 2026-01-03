import { SearchCoinItem } from "@/lib/features/crypto/types";

export interface SearchBarProps {
  currency: string;
  onCurrencyChange: (value: string) => void;
}

export interface ResultModalProps {
  open: boolean;
  coins?: SearchCoinItem[];
  isError?: boolean;
  isLoading?: boolean;
}
