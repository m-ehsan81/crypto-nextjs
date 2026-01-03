import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "@/lib/base-query";
import type {
  GetCoinsParams,
  GetCoinRes,
  GetCoinChartParams,
  GetCoinChartRes,
  GetSearchCoin,
} from "./types";

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery,
  endpoints: (build) => ({
    getCoins: build.query<GetCoinRes[], GetCoinsParams>({
      query: ({ currency, page }) =>
        `/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&sparkline=false&locale=en&x_cg_demo_api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    }),
    getCoinChart: build.query<GetCoinChartRes, GetCoinChartParams>({
      query: ({ currency, coinId }) =>
        `/coins/${coinId}/market_chart?vs_currency=${currency}&days=7`,
    }),
    searchCoin: build.query<GetSearchCoin, string>({
      query: (searchTerm) =>
        `/search?query=${searchTerm}&x_cg_demo_api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    }),
  }),
});

export const {
  useGetCoinsQuery,
  useGetCoinChartQuery,
  useLazySearchCoinQuery,
} = cryptoApi;
