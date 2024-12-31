import React from "react";
import MovieList from "./MovieList";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";

const SecondaryComponent = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMoviesData);

  console.log("nowPlayingMovies", movies);

  return (
    <div className="bg-black w-screen">
      <div className="-mt-56 relative z-22">
        <MovieList title="Now Playing" movies={movies} />
        <MovieList title="Popular" movies={popularMovies} />
        <MovieList title="Action" movies={movies} />
        <MovieList title="Popular" movies={popularMovies} />
        <MovieList title="Horror" movies={movies} />
        <MovieList title="Award Winning" movies={movies} />
      </div>
    </div>
  );
};

export default SecondaryComponent;
