import React, { useEffect, useState } from "react";
import PostItemCard from "./PostItemCard";
import usePost from "../hooks/usePost";

const PostItems = () => {
  const [posts] = usePost()
  return (
    <div>
      <h2>Posts Here</h2>
      <div>
        {[...posts]?.reverse()?.map((post,index) => (
          <PostItemCard post={post} key={index}></PostItemCard>
        ))}
      </div>
    </div>
  );
};

export default PostItems;
