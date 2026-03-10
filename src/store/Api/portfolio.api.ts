import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetPortfolioResponse } from "./portfolio.apiTypes";

const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1";

export const portfolioApi = createApi({
  reducerPath: "portfolioApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ["Portfolio"],
  endpoints: (builder) => ({
    getSinglePortfolio: builder.query<GetPortfolioResponse, string>({
      query: (id: string) => ({
        url: `/portfolio/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "Portfolio", id }],
    }),
  }),
});

export const { useGetSinglePortfolioQuery } = portfolioApi;
