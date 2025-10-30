import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trendingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    // 👇 Added this reducer to clear trailer when leaving page
    clearTrailerVideo: (state) => {
      state.trailerVideo = null;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTrendingMovies,
  addTrailerVideo,
  clearTrailerVideo, // 👈 export it
} = moviesSlice.actions;

export default moviesSlice.reducer;
