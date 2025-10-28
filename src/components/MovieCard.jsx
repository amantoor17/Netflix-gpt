import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ posterPath, title }) => {
  if (!posterPath) return null;

  return (
    <div className="w-36 md:w-44 lg:w-52 flex-shrink-0 cursor-pointer transform transition duration-300 ease-in-out hover:scale-110 hover:z-10">
      <img
        alt={title || "Movie Card"}
        src={IMG_CDN_URL + posterPath}
        className="rounded-md object-cover w-full h-full"
      />
    </div>
  );
};

export default MovieCard;

