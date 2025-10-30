import { useSelector, useDispatch } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useEffect } from 'react';
import { clearTrailerVideo } from '../utils/moviesSlice';

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  // Clear trailer when unmounted
  useEffect(() => {
    return () => {
      dispatch(clearTrailerVideo());
    };
  }, [dispatch]);

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      {trailerVideo?.key ? (
        <iframe
          className="w-full h-full object-cover"
          src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}`}
          title="YouTube trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      ) : (
        // Optional fallback background
        <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black" />
      )}
    </div>
  );
};

export default VideoBackground;
