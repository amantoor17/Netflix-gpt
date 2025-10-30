import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ posterPath, title, movieId }) => {
  const navigate = useNavigate();

  if (!posterPath) return null;

  const handleClick = () => {
    navigate(`/watch/${movieId}`); // navigate to Watch Page
  };

  return (
    <div
      onClick={handleClick}
      className="w-36 md:w-44 lg:w-52 flex-shrink-0 cursor-pointer overflow-y-hidden transform transition duration-300 ease-in-out hover:scale-110 hover:z-10"
    >
      <img
        alt={title || "Movie Card"}
        src={IMG_CDN_URL + posterPath}
        className="rounded-md object-cover w-full h-full"
      />
    </div>
  );
};

export default MovieCard;



