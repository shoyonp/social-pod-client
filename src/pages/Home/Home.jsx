import React from "react";
import Banner from "../../components/Banner";
import PostItems from "../../components/PostItems";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="w-11/12 mx-auto">
        <PostItems></PostItems>
      </div>
    </div>
  );
};

export default Home;
