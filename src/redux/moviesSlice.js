import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailorData: null,
    popularMoviesData: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action?.payload;
    },
    addTrailorData: (state, action) => {
      state.trailorData = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMoviesData = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailorData, addPopularMovies } =
  moviesSlice.actions;
export default moviesSlice.reducer;
