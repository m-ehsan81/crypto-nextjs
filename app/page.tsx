"use client";

import CoinGrid from "@/components/coin-grid";
import { useGetCoinsQuery } from "@/lib/features/crypto/crypto-api";

function page() {
  const { data } = useGetCoinsQuery({ currency: "usd", page: 1 });

  return <div>{data && <CoinGrid coins={data} currency="usd" />}</div>;
}

export default page;
