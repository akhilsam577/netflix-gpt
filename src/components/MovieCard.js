import React from "react";
import { MOVIE_IMAGE_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return;
  return (
    <div className="w-44 mx-3">
      <img alt="movie poster h-50" src={MOVIE_IMAGE_URL + posterPath}></img>
    </div>
  );
};

export default MovieCard;
