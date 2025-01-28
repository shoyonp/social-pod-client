import PostItemCard from "./PostItemCard";
import usePost from "../hooks/usePost";
import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";

const PostItems = () => {
  const axiosPublic = useAxiosPublic();
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 5;
  const [count, setCount] = useState(0);
  const [posts, loading] = usePost(currentPage, postsPerPage);

  useEffect(() => {
    const res = axiosPublic.get("/postCount").then((res) => setCount(res.data));
  }, [axiosPublic]);

  const numberOfPages = Math.ceil(count.count / postsPerPage);
  const pages = [];
  for (let i = 0; i < numberOfPages; i++) {
    pages.push(i);
  }

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  return (
    <div>
      <div>
        {[...posts]?.reverse()?.map((post) => (
          <PostItemCard post={post} key={post._id}></PostItemCard>
        ))}
      </div>
      <div className="items-center mx-auto text-center my-4">
        {pages.map((page) => (
          <button
            onClick={() => setCurrentPage(page)}
            className={
              currentPage === page
                ? "btn px-5 py-1 mr-3 bg-blue-600 text-white hover:bg-blue-700 transition "
                : "btn  px-5 py-1 mr-3"
            }
            key={page}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PostItems;
