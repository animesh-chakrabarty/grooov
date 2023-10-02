import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

import { saavnApi } from "./saavn";

export const store = configureStore({
  reducer: {
    [saavnApi.reducerPath]: saavnApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saavnApi.middleware),
});
