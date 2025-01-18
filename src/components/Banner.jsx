import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="banner bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
        <h1 className="text-4xl font-bold mb-4">Search Posts</h1>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search by tags..."
            className="p-2 rounded-l-md w-1/2"
          />
          <button className="bg-blue-700 p-2 rounded-r-md text-white">
            Search
          </button>
        </div>
      </div>

      <div className="flex justify-center space-x-2 mt-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Tag1
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Tag2
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Tag3
        </button>
      </div>
    </div>
  );
};

export default Banner;
