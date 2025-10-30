import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies);
  console.log("SECONDARY CONTAINER POPULAR: ",movies.popularMovies);

  return (
    <div className=' bg-black'>
    <div className='-mt-20 relative z-10 pl-4'>
      <MovieList title={"Trending"} movies={movies.trendingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Favorites"} movies={movies.trendingMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.popularMovies}/>
    </div>
    </div>
  )
}

export default SecondaryContainer
