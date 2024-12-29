import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import PrimaryComponent from "./PrimaryComponent";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <PrimaryComponent />
    </div>
  );
};

export default Browse;
