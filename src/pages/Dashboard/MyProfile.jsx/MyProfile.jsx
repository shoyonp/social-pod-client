import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { FaAward } from "react-icons/fa";
import { motion } from "framer-motion";
import useMyPost from "../../../hooks/useMyPost";
const MyProfile = () => {
  const { user } = useAuth();
  const [myPosts] = useMyPost();

  return (
    <div>
      <Helmet>
        <title>Social Pod | My Profile</title>
      </Helmet>
      <h2>my profile</h2>
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          {/* profile info section */}
          <motion.div
            className="flex-shrink-0 w-full md:w-1/3 p-6 flex flex-col items-center bg-gray-100"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={user?.photoURL}
              alt="User Profile"
              className="w-32 h-32 rounded-full border-4 border-gray-300 mb-4"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.h2
              className="text-2xl font-semibold text-gray-800 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {user?.displayName}
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {user?.email}
            </motion.p>

            {/* Badge Section */}
            <motion.div
              className="mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="flex items-center justify-center">
                <FaAward className="text-yellow-500 mr-2" size={24} />
                <span className="font-bold text-lg">Bronze Badge</span>
              </div>
            </motion.div>
          </motion.div>

          {/* recent posts section */}
          <motion.div
            className="w-full md:w-2/3 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.h3
              className="text-xl font-semibold text-gray-800 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Recent Posts
            </motion.h3>
            <ul className="space-y-4">
              {myPosts?.slice(0, 3)?.map((post, index) => (
                <motion.li
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="text-lg font-medium text-gray-800">
                    {post.title}
                  </h4>
                  <p className="text-sm text-gray-600">Date: {post.postTime}</p>
                  <p className="text-sm text-gray-600">
                    Upvotes: {post.upVote}
                  </p>
                  <Link
                    to={`/post/${post._id}`}
                    className="text-indigo-600 hover:text-indigo-800 mt-2 inline-block"
                  >
                    View Post
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
