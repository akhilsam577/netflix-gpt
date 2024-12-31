import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSuggestions = () => {
  const { aiGeneratedResults, tmdbMovieResults } = useSelector(
    (store) => store.gpt
  );
  if (!aiGeneratedResults) return null;
  // console.log("aiGeneratedResults", aiGeneratedResults);
  // console.log("tmdbMovieResults", tmdbMovieResults);

  return (
    <div className="p-4 m-4 bg-black">
      <div className="bg-black">
        {aiGeneratedResults?.map((movieName, index) => (
          <MovieList
            key={index}
            title={movieName}
            movies={tmdbMovieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptSuggestions;
