import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useSelector } from "react-redux";
import TitleComponent from "./TitleComponent";
import VideoComponent from "./VideoComponent";

const PrimaryComponent = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  console.log("movies", movies);

  if (!movies) return;

  const mainMovie = movies[0];
  // console.log("movies", movies);

  const { original_title, overview, id } = mainMovie;
  // const getVideosList = () => {
  //   const videosList = fetch(
  //     "https://api.themoviedb.org/3/movie/" +
  //       videoMovieId +
  //       "/videos?language=en-US",
  //     API_OPTIONS
  //   );
  //   const json = videosList.json();
  //   console.log("json", json);
  // };

  // useEffect(() => {
  //   getVideosList();
  // }, []);
  console.log("original_title", original_title, overview);
  return (
    <div>
      <TitleComponent title={original_title} overview={overview} />
      <VideoComponent id={id} />
    </div>
  );
};

export default PrimaryComponent;
