import type { GetCoinRes } from "@/lib/features/crypto/types";

export interface CoinGridProps {
  coins: GetCoinRes[];
  currency: CurrencyItemsType;
  page: number;
  onPaginationChange: (page: number) => void;
  onClickCoin: (id: GetCoinRes) => void;
}

export type CurrencyItemsType = "usd" | "eur" | "jpy";

export interface GridRowType
  extends GetCoinRes,
    Omit<CoinGridProps, "coins" | "onPaginationChange" | "page"> {}
