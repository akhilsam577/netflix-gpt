import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailorData } from "../redux/moviesSlice";
import { screen } from "@testing-library/react";

const VideoComponent = ({ id }) => {
  const trailorDetails = useSelector((store) => store?.movies?.trailorData);
  const dispatch = useDispatch();
  const getMovieKey = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      API_OPTIONS
    );
    const movieVideos = await data?.json();
    const filterTrailors = movieVideos.results?.filter(
      (video) => video.type === "Trailer"
    );
    const trailor = filterTrailors?.length ? filterTrailors[0] : movieVideos[0];
    dispatch(addTrailorData(trailor));
  };
  useEffect(() => {
    getMovieKey();
  }, []);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailorDetails?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoComponent;
