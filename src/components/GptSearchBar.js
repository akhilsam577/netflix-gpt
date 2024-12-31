import React, { useRef } from "react";
import language from "../utils/languageConstants";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import clientAi from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { gptMovies } from "../redux/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const currentlanguage = useSelector((store) => store.config.lang);
  const searchText = useRef("");

  const searchTmdbMovie = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const movie = await data.json();
    return await movie.results;
  };

  const handleSearchClick = async () => {
    const searchQuery =
      "Act as movie recomondation system and suggest some movies besed on the following query:" +
      searchText.current.value +
      ". only give me 5 movie suggestions,comma seperated like the example result given ahead: Bahubali, Arjun reddy, Animal, Orange, Jathi ratnalu";
    const chatCompletion = await clientAi.chat.completions.create({
      messages: [{ role: "user", content: searchQuery }],
      model: "gpt-3.5-turbo",
    });

    const aiMovieList = chatCompletion?.choices[0]?.message?.content.split(",");
    console.log("aiMovieList", aiMovieList);

    const movieListDataPromises = await aiMovieList?.map((movie) =>
      searchTmdbMovie(movie)
    );
    const resovedMoviePromise = await Promise.all(movieListDataPromises);
    // console.log("resovedMoviePromise", resovedMoviePromise);
    dispatch(
      gptMovies({
        aiMovies: aiMovieList,
        tmdbResultMovieData: resovedMoviePromise,
      })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <div className=" flex ">
        <div className=" mt-3  container mx-auto bg-black bg-opacity-20 rounded-lg p-10">
          <form onSubmit={(e) => e.preventDefault()}>
            <h1 className="mb-6 px-48 text-center font-bold text-red-700 text-4xl">
              Netflix AI{" "}
            </h1>
            <p className="text-white mx-auto ml-6 font-medium text-sm my-6 max-w-lg">
              {language[currentlanguage].subText}
            </p>
            <div className="sm:flex items-center  bg-red-700 rounded-lg overflow-hidden px-2 py-1 justify-between">
              <input
                className="  bg-red-700 text-white flex-grow outline-none px-2 placeholder-white"
                ref={searchText}
                type="text"
                placeholder={language[currentlanguage].getSearchplaceholder}
              />
              <div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
                {/* <select
                  id="Com"
                  className="text-base text-gray-800 outline-none border-2 px-4 py-2 rounded-lg"
                >
                  <option value="com" selected>
                    com
                  </option>
                  <option value="net">net</option>
                  <option value="org">org</option>
                  <option value="io">io</option>
                </select> */}
                <button
                  onClick={handleSearchClick}
                  className="bg-black bg-opacity-50 text-white text-lg border-red-50 rounded-lg px-4 py-2 font-thin"
                >
                  {language[currentlanguage].search}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GptSearchBar;
