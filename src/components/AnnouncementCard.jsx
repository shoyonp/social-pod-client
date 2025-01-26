import useAnnouncement from "../hooks/useAnnouncement";
import { useState } from "react";
import { FaBullhorn } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

const AnnouncementCard = () => {
  const [announcements] = useAnnouncement();
  const [showAnnouncements, setShowAnnouncements] = useState(false);

  if (announcements.length === 0) return null;

  return (
    <>
      <div className="w-full md:w-3/5 mx-auto p-4 rounded-lg shadow-md mt-10 bg-white text-black border border-gray-200">
        <div className="flex justify-between items-center p-1">
          <div className=" items-center gap-2 text-lg font-semibold">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <span>Announcement</span>
              <FaBullhorn className="text-blue-500" />
            </div>
            <span className="text-blue-600">{announcements?.length} new </span>
          </div>
          <button
            className="btn-ghost p-3 rounded-full"
            onClick={() => setShowAnnouncements(!showAnnouncements)}
          >
            <IoIosArrowDown
              className={`transition-transform text-lg ${
                showAnnouncements ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {showAnnouncements && (
          <div className="w-full bg-white p-4 rounded-lg overflow-hidden relative">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
              }}
            >
              {announcements.map((announcement, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-72 border border-gray-300 rounded-lg shadow-sm bg-white flex flex-col p-4">
                    <div className="flex items-center gap-3 border-b border-gray-200 pb-2">
                      <img
                        src={announcement.authorImage}
                        alt={announcement.authorName}
                        className="w-12 h-12 rounded-full border border-gray-300 object-cover"
                      />
                      <h4 className="text-lg font-bold text-gray-800">
                        {announcement.authorName}
                      </h4>
                    </div>
                    <p className="text-gray-600 mt-2 text-sm  md:text-base overflow-y-auto">
                      {announcement.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </>
  );
};

export default AnnouncementCard;
