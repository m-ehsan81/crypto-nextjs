import type { GetCoinRes } from "@/lib/features/crypto/types";

export interface CoinGridProps {
  coins: GetCoinRes[];
  currency: string;
  page: number;
  onPaginationChange: (page: number) => void;
  onClickCoin: (id: string) => void;
}

export interface GridRowType
  extends GetCoinRes,
    Omit<CoinGridProps, "coins" | "onPaginationChange" | "page"> {}
