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
      <div className=" bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
        <h1 className="text-4xl font-bold mb-4">Search Posts</h1>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search by tags..."
            className="p-2 rounded-l-md w-1/2 text-gray-800"
            onBlur={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-blue-700 p-2 rounded-r-md text-white"
          >
            Search
          </button>
        </div>
      </div>

      <div className="flex justify-center space-x-2 mt-4 w-11/12 mx-auto">
        <Marquee pauseOnHover={true}>
          {tags?.map((tag) => (
            <span key={tag.value} className="text-gray-600 mx-2 ">
              #{tag.label}
            </span>
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default Banner;
