import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "@/lib/base-query";
import type {
  GetCoinsParams,
  GetCoinRes,
  GetCoinChartParams,
  GetCoinChartRes,
  GetSearchCoin,
  GetCoinIdRes,
} from "./types";

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery,
  endpoints: (build) => ({
    getCoins: build.query<GetCoinRes[], GetCoinsParams>({
      query: ({ currency, page }) =>
        `/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&sparkline=false&locale=en`,
    }),
    getCoinChart: build.query<GetCoinChartRes, GetCoinChartParams>({
      query: ({ currency, coinId }) =>
        `/coins/${coinId}/market_chart?vs_currency=${currency}&days=7`,
    }),
    searchCoin: build.query<GetSearchCoin, string>({
      query: (searchTerm) => `/search?query=${searchTerm}`,
    }),
    getCoinData: build.query<GetCoinIdRes, string>({
      query: (coinId) => `/coins/${coinId}`,
    }),
    getCurrencies: build.query<string[], void>({
      query: () => "simple/supported_vs_currencies",
    }),
  }),
});

export const {
  useGetCoinsQuery,
  useGetCoinChartQuery,
  useLazySearchCoinQuery,
  useGetCoinDataQuery,
  useGetCurrenciesQuery,
} = cryptoApi;
