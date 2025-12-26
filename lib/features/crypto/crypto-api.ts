import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "@/lib/base-query";
import type { GetCoinsParams, GetCoinRes } from "./types";

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery,
  endpoints: (build) => ({
    getCoins: build.query<GetCoinRes[], GetCoinsParams>({
      query: ({ currency, page }) =>
        `/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&sparkline=false&locale=en&x_cg_demo_api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    }),
  }),
});

export const { useGetCoinsQuery } = cryptoApi;
