import { useEffect } from "react";
import { API_OPTIONS, POPULAR_MOVIES_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../redux/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const browsePopularMovies = async () => {
    const movieData = await fetch(POPULAR_MOVIES_URL, API_OPTIONS);
    const json = await movieData.json();

    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    browsePopularMovies();
  }, []);
};

export default usePopularMovies;
