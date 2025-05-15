import Marquee from "react-fast-marquee";
import useTag from "../hooks/useTag";
import { useState } from "react";
import usePost from "../hooks/usePost";

const Banner = () => {
  const [tags, loading] = useTag();
  const [inputText, setInputText] = useState("");
  const [search, setSearch] = useState("");
  const [posts] = usePost(0, 10, search);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-32">
        <p>Loading tags...</p>
      </div>
    );
  }

  const handleSearch = () => {
    setSearch(inputText);
  };

  return (
    <>
      {/* Banner with Gradient Background and Wave */}
      <div className="relative bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-600 p-6 md:p-12 md:pt-16 text-white shadow-md w-full h-[320px] flex flex-col justify-center items-center">
        <div className="relative z-10 px-4 w-full max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 animate-bounce">
            Search Posts
          </h1>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left Content Text */}
            <div className="text-center md:text-left w-full md:w-1/2">
              <h2 className="text-xl md:text-2xl font-semibold mb-2">
                Find what matters
              </h2>
              <p className="text-sm md:text-base text-white/90">
                Explore trending topics and tags from our community.
              </p>
            </div>

            <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-4 w-full max-w-6xl mx-auto">
              {/* Search  Button */}
              <div className="flex flex-grow md:flex-grow-0 w-full md:w-2/3 rounded-md shadow-md overflow-hidden">
                <input
                  type="text"
                  placeholder="Search by tags..."
                  className="p-3 flex-1 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
                  onChange={(e) => setInputText(e.target.value)}
                  value={inputText}
                />
                <button
                  onClick={handleSearch}
                  className="bg-blue-600 px-5 text-white hover:bg-blue-700 transition duration-300"
                >
                  Search
                </button>
              </div>

              {/* Sort Button */}
              <button className="bg-gradient-to-r from-blue-400 to-blue-600 px-5 py-3 md:py-1 lg:py-3 rounded-full text-white shadow-md hover:from-blue-500 hover:to-blue-700 transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg w-full md:w-auto mb-6 md:mb-0">
                Sort by Popularity
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="flex justify-center w-full mx-auto mt-[-20px] px-2 z-20 relative">
        <div className=" md:w-11/12 lg:max-w-6xl  rounded-xl border border-gray-200 bg-white shadow-lg py-2 px-4 overflow-hidden">
          <Marquee pauseOnHover={true} gradient={false} speed={50}>
            {tags?.map((tag) => (
              <span
                key={tag.value}
                className="inline-block bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 text-sm md:text-base font-medium px-4 py-1.5 rounded-full shadow-sm mx-2 transition-all duration-200 cursor-pointer"
              >
                #{tag.label}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Banner;
