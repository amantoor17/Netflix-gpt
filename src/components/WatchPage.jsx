import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
import { ArrowLeft } from "lucide-react"; // optional icon

const WatchPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  useMovieTrailer(movieId); // fetch trailer

  const trailer = useSelector((store) => store.movies.trailerVideo);

  return (
    <div className="w-screen h-screen bg-black flex flex-col justify-center items-center relative">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-5 left-5 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
      >
        <ArrowLeft size={24} />
      </button>

      {/* Trailer Player */}
      {trailer ? (
        <iframe
          className="w-[90%] h-[80%] rounded-lg shadow-lg"
          src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=0`}
          title="Movie Trailer"
          allow="autoplay; encrypted-media"
        ></iframe>
      ) : (
        <p className="text-white text-lg">Loading trailer...</p>
      )}
    </div>
  );
};

export default WatchPage;
