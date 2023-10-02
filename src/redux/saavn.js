import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const saavnApi = createApi({
  reducerPath: "saavnApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://saavn.me/",
  }),
  endpoints: (builder) => ({
    getHomePageData: builder.query({
      query: () => `modules?language=hindi,english`,
    }),
    getPlaylistDetails: builder.query({
      query: (params) => `playlists?id=${params}`,
    }),
    getSearchResult: builder.query({
      query: (params) => `search/songs?query=${params}&page=1&limit=20`,
    }),
  }),
});

export const {
  useGetHomePageDataQuery,
  useGetPlaylistDetailsQuery,
  useGetSearchResultQuery,
} = saavnApi;
