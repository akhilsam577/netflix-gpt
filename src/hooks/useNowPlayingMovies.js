import { useEffect } from "react";
import { API_OPTIONS, MOVIES_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const browseMovies = async () => {
    try {
      const movieData = await fetch(MOVIES_API, API_OPTIONS);
      const json = movieData.json();
      dispatch(addNowPlayingMovies(json.results));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    browseMovies();
  }, []);
};

export default useNowPlayingMovies;
