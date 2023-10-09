import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import playerReducer from "./playerSlice";
import { saavnApi } from "./saavn";

export const store = configureStore({
  reducer: {
    [saavnApi.reducerPath]: saavnApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saavnApi.middleware),
});
