import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import PrimaryComponent from "./PrimaryComponent";
import SecondaryComponent from "./SecondaryComponent";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  const showGptSearch = useSelector((store) => store.gpt.toggleGptButton);

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          {" "}
          <PrimaryComponent />
          <SecondaryComponent />
        </>
      )}
    </div>
  );
};

export default Browse;
