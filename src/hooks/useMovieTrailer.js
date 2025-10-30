// import { useDispatch } from "react-redux";
// import { addTrailerVideo } from "../utils/moviesSlice";
// import { API_OPTIONS } from "../utils/constants";
// import { useEffect } from "react";

// const useMovieTrailer = (movieId) => {
//     const dispatch = useDispatch();

//   //Fetch Movie Trailer && updating the store with trailer video data
//   const getMovieVideos = async () => {
//     const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTIONS);
//     const json = await data.json();
//     console.log(json);

//     const filterData = json.results.filter(video => video.type == 'Trailer');
//     const trailer = filterData.length ? filterData[0] : json.results[0];
//     dispatch(addTrailerVideo(trailer));
//   }

//   useEffect(() => {
//     getMovieVideos();
//   }, []);
// }

// export default useMovieTrailer;


import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    if (!movieId) return; // 🚫 No movie selected yet
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
    // eslint-disable-next-line
  }, [movieId]); // ✅ re-run when movieId changes
};

export default useMovieTrailer;
