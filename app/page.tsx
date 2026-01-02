"use client";

import Chart from "@/components/chart";
import CoinGrid from "@/components/coin-grid";
import Loader from "@/components/loader";
import SearchBar from "@/components/search-bar";
import { useGetCoinsQuery } from "@/lib/features/crypto/crypto-api";
import { GetCoinRes } from "@/lib/features/crypto/types";
import { useState } from "react";

function page() {
  const [page, setPage] = useState(1);
  const [selectedCoin, setSelectedCoin] = useState<GetCoinRes>();

  const { data, isLoading, error } = useGetCoinsQuery({
    currency: "usd",
    page,
  });

  if (error) {
    throw error;
  }

  return (
    <div>
      <SearchBar />

      {isLoading || !data ? (
        <Loader />
      ) : (
        <CoinGrid
          coins={data}
          currency="usd"
          page={page}
          onPaginationChange={(page) => setPage(page)}
          onClickCoin={(coin) => setSelectedCoin(coin)}
        />
      )}

      {selectedCoin && (
        <Chart
          selectedCoin={selectedCoin}
          onClose={() => setSelectedCoin(undefined)}
        />
      )}
    </div>
  );
}

export default page;
