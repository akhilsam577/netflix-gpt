import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // if (!movies) return null;
  console.log("title", title);
  console.log("movies", movies);

  return (
    <div className="">
      <h2 className="text-2xl font-medium p-3 text-white">{title}</h2>
      <div className=" flex overflow-x-scroll">
        <div className="flex ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
