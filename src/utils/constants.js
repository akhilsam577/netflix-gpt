export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + REACT_APP_AUTHORIZATION,
  },
};
export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_LOGO =
  "https://occ-0-6216-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e";

export const MOVIES_API =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const MOVIE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export const POPULAR_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/upcoming?page=1";

export const SUPPORTED_LANGUAGES = [
  { identifer: "en", name: "English" },
  { identifer: "hindi", name: "Hindi" },
  { identifer: "telugu", name: "Telugu" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
