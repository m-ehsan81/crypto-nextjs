"use client";

import Chart from "@/components/chart";
import CoinGrid from "@/components/coin-grid";
import Loader from "@/components/loader";
import SearchBar from "@/components/search-bar";
import { useGetCoinsQuery } from "@/lib/features/crypto/crypto-api";
import { useState } from "react";

function page() {
  const [page, setPage] = useState(1);
  const [selectedCoin, setSelectedCoin] = useState<string>("");
  const [currency, setCurrency] = useState<string>("usd");

  const { data, isLoading, error } = useGetCoinsQuery({
    currency: currency,
    page,
  });

  if (error) {
    throw error;
  }

  return (
    <div>
      <SearchBar
        currency={currency}
        onCurrencyChange={(cur) => setCurrency(cur)}
      />

      {isLoading || !data ? (
        <Loader />
      ) : (
        <CoinGrid
          coins={data}
          currency={currency}
          page={page}
          onPaginationChange={(page) => setPage(page)}
          onClickCoin={(coin) => setSelectedCoin(coin)}
        />
      )}

      {selectedCoin && (
        <Chart
          currency={currency}
          selectedCoin={selectedCoin}
          onClose={() => setSelectedCoin("")}
        />
      )}
    </div>
  );
}

export default page;
