import { useEffect } from "react";
import { API_OPTIONS, MOVIES_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const browseMovies = async () => {
    const movieData = await fetch(MOVIES_API, API_OPTIONS);
    const json = await movieData.json();
    // console.log(json.results);

    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    browseMovies();
  }, []);
};

export default useNowPlayingMovies;
