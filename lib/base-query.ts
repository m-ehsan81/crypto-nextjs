import { fetchBaseQuery } from "@reduxjs/toolkit/query";


const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
});

export default baseQuery;
