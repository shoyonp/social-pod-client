import React from "react";
import Banner from "../../components/Banner";
import PostItems from "../../components/PostItems";
import AnnouncementCard from "../../components/AnnouncementCard";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AnnouncementCard></AnnouncementCard>
      <div className="w-11/12 mx-auto">
        <PostItems></PostItems>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
