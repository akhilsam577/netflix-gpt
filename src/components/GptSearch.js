import React from "react";
import GptSuggestions from "./GptSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <>
      {" "}
      <div className="absolute -z-10">
        <img
          alt="BG-IMAGE"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4690cab8-243a-4552-baef-1fb415632f74/web/IN-en-20241118-TRIFECTA-perspective_0b813abc-8365-4a43-a9d8-14c06e84c9f3_large.jpg"
        ></img>
      </div>
      <div>
        <GptSearchBar />
        <GptSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
