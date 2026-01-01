"use client";

import CoinGrid from "@/components/coin-grid";
import { useGetCoinsQuery } from "@/lib/features/crypto/crypto-api";
import { useState } from "react";

function page() {
  const [page, setPage] = useState(1);

  const { data } = useGetCoinsQuery({ currency: "usd", page });

  return (
    <div>
      {data && (
        <CoinGrid
          coins={data}
          currency="usd"
          page={page}
          onPaginationChange={(page) => setPage(page)}
        />
      )}
    </div>
  );
}

export default page;
