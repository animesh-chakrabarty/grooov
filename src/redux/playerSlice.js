// src/redux/playerSlice.js
import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    isPlaying: false,
    currentSongIndex: 0,
    data: [],
  },
  reducers: {
    play: (state) => {
      state.isPlaying = true;
    },
    pause: (state) => {
      state.isPlaying = false;
    },
    prevSong: (state) => {
      if (state.currentSongIndex > 0) {
        state.currentSongIndex -= 1;
      }
    },
    nextSong: (state, action) => {
      if (state.currentSongIndex < action.payload - 1) {
        state.currentSongIndex += 1;
      }
    },
    setCurrentSongIndex: (state, action) => {
      state.currentSongIndex = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { play, pause, prevSong, nextSong, setCurrentSongIndex, setData } =
  playerSlice.actions;

export default playerSlice.reducer;
