import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: { nowPlayingMovies: null, trailorData: null },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action?.payload;
    },
    addTrailorData: (state, action) => {
      state.trailorData = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailorData } = moviesSlice.actions;
export default moviesSlice.reducer;
