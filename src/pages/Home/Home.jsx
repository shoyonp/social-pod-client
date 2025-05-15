import Banner from "../../components/Banner";
import PostItems from "../../components/PostItems";
import AnnouncementCard from "../../components/AnnouncementCard";
import Footer from "../../components/Footer";
import Testimonials from "../../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AnnouncementCard></AnnouncementCard>
      <div className="w-11/12 mx-auto">
        <PostItems></PostItems>
      </div>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
};

export default Home;
