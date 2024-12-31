import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    toggleGptButton: false,
    aiGeneratedResults: null,
    tmdbMovieResults: null,
  },
  reducers: {
    toggleGptPage: (state, action) => {
      state.toggleGptButton = !state.toggleGptButton;
    },
    gptMovies: (state, action) => {
      const { aiMovies, tmdbResultMovieData } = action.payload;
      state.aiGeneratedResults = aiMovies;
      state.tmdbMovieResults = tmdbResultMovieData;
    },
  },
});

export const { toggleGptPage, gptMovies } = gptSlice.actions;
export default gptSlice.reducer;
