import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="text-white px-6 py-6 overflow-y-hidden"> 
      {/* Section Title */}
      <h2 className="text-lg md:text-2xl font-semibold mb-3 hover:text-gray-300 transition-all duration-200">
        {title}
      </h2>

      {/* Movie Row */}
      <div className="relative group overflow-y-hidden">
        <div className="flex overflow-x-scroll overflow-y-hidden scrollbar-hide space-x-3 md:space-x-4">
          {movies?.length > 0 ? (
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movieId={movie.id}
                posterPath={movie.poster_path}
                title={movie.title || movie.name}
              />
            ))
          ) : (
            <p className="text-gray-400">No movies available</p>
          )}
        </div>

        {/* Gradient fade on right side */}
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#141414] pointer-events-none"></div>
      </div>
    </div>
  );
};

export default MovieList;
