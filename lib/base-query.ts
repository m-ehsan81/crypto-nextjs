import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    x_cg_demo_api_key: process.env.NEXT_PUBLIC_API_KEY || "",
  },
});

export default baseQuery;
