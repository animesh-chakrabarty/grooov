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
    getAlbumDetails: builder.query({
      query: (params) => `albums?id=${params}`,
    }),
    getSongSearchResult: builder.query({
      query: (params) => `search/songs?query=${params}&page=1&limit=20`,
    }),
    getAlbumSearchResult: builder.query({
      query: (params) => `search/albums?query=${params}&page=1&limit=10`,
    }),
  }),
});

export const {
  useGetHomePageDataQuery,
  useGetPlaylistDetailsQuery,
  useGetAlbumDetailsQuery,
  useGetSongSearchResultQuery,
  useGetAlbumSearchResultQuery,
  useGetArtistSearchResultQuery,
} = saavnApi;
