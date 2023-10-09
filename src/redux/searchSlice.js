import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    setSearchInput: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setSearchInput } = searchSlice.actions;
export default searchSlice.reducer;
