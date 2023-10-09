import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import playerReducer from "./playerSlice";
import { saavnApi } from "./saavn";
import searchReducer from "./searchSlice";

export const store = configureStore({
  reducer: {
    [saavnApi.reducerPath]: saavnApi.reducer,
    player: playerReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saavnApi.middleware),
});
