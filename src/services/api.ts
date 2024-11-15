import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Game } from "../models/Game";
import { Purchase } from "../models/Purchase";

type PurchaseResponse = {
  orderId: string;
};

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fake-api-tau.vercel.app/api/eplay",
  }),
  endpoints: (builder) => ({
    getFeatured: builder.query<Game, void>({
      query: () => "destaque",
    }),
    getOnSale: builder.query<Game[], void>({
      query: () => "promocoes",
    }),
    getSoon: builder.query<Game[], void>({
      query: () => "em-breve",
    }),
    getAction: builder.query<Game[], void>({
      query: () => "acao",
    }),
    getSports: builder.query<Game[], void>({
      query: () => "esportes",
    }),
    getSimulation: builder.query<Game[], void>({
      query: () => "simulacao",
    }),
    getFight: builder.query<Game[], void>({
      query: () => "luta",
    }),
    getRPG: builder.query<Game[], void>({
      query: () => "rpg",
    }),
    getGame: builder.query<Game, string>({
      query: (id) => `jogos/${id}`,
    }),
    purchase: builder.mutation<PurchaseResponse, Purchase>({
      query: (body) => ({
        url: "checkout",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetFeaturedQuery,
  useGetOnSaleQuery,
  useGetSoonQuery,
  useGetActionQuery,
  useGetSportsQuery,
  useGetFightQuery,
  useGetSimulationQuery,
  useGetRPGQuery,
  useGetGameQuery,
  usePurchaseMutation,
} = api;
export default api;
