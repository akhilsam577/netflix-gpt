import React from "react";

const TitleComponent = ({ title, overview }) => {
  return (
    <>
      <div className="w-screen aspect-video pt-80 px-16 absolute text-white bg-gradient-to-r from-black">
        <h2 className="text-4xl font-bold py-2">{title}</h2>
        <p className="text-lg w-1/3">{overview}</p>
        <div className="my-3">
          <button className="bg-red-700 text-black font-medium w-28 h-10 rounded-md hover:bg-red-500">
            Play
          </button>
          <button className="bg-gray-300 text-black font-medium w-28 h-10 mx-6 rounded-md hover:bg-gray-100">
            More info
          </button>
        </div>
      </div>
    </>
  );
};

export default TitleComponent;
