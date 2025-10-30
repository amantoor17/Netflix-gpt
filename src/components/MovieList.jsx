import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="text-white px-6 py-6">
      <h2 className="text-lg md:text-2xl font-semibold mb-3 hover:text-gray-300 transition-all duration-200">
        {title}
      </h2>

      <div className="relative group">
        <div className="flex overflow-x-scroll scrollbar-hide space-x-3 md:space-x-4">
          {movies?.length > 0 ? (
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                posterPath={movie.poster_path}
                title={movie.title || movie.name}
                movieId={movie.id}
              />
            ))
          ) : (
            <p className="text-gray-400">No movies available</p>
          )}
        </div>

        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#141414] pointer-events-none"></div>
      </div>
    </div>
  );
};

export default MovieList;
