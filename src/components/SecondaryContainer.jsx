import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies);
  console.log("SECONDARY CONTAINER: ",movies);

  return (
    <div className=' bg-black'>
    <div className='-mt-60 relative z-10 pl-4'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Favorites"} movies={movies.nowPlayingMovies}/>
    </div>
    </div>
  )
}

export default SecondaryContainer
