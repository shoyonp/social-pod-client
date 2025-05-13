import Marquee from "react-fast-marquee";
import useTag from "../hooks/useTag";
import { useState } from "react";
import usePost from "../hooks/usePost";

const Banner = () => {
  const [tags, loading] = useTag();
  const [search, setSearch] = useState("");
  const [posts] = usePost(search);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-32">
        <p>Loading tags...</p>
      </div>
    );
  }

  const handleSearch = () => {
    // console.log("Searching for", search);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-blue-400 to-blue-500 p-6 md:p-12 text-white shadow-md  w-full mx-auto ">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
          Search Posts
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            placeholder="Search by tags..."
            className="p-3 w-11/12 md:w-1/2 rounded-md shadow-md focus:outline-none focus:ring-2 text-gray-800 transition transform duration-300 ease-in-out hover:scale-105"
            onBlur={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 p-3 w-11/12 md:w-auto rounded-md text-white shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Search
          </button>
          <button className="bg-gradient-to-r from-blue-400 to-blue-600 p-3 w-11/12 md:w-auto rounded-md text-white shadow-md hover:from-blue-500 hover:to-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
            Sort by Popularity
          </button>
        </div>
      </div>

      <div className="flex justify-center space-x-3 mt-8 w-full mx-auto">
        <Marquee pauseOnHover={true}>
          {tags?.map((tag) => (
            <span
              key={tag.value}
              className="text-gray-600 mx-2 text-sm md:text-base"
            >
              #{tag.label}
            </span>
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default Banner;
