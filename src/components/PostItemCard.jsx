import { motion } from "framer-motion";
import { FaRegComment, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import useComment from "../hooks/useComment";

const PostItemCard = ({ post }) => {
  const { authorImg, authorName, postTime, title, tags, downVote, upVote } =
    post;
  const [comments] = useComment(title);
  //   console.log(comments);
  return (
    <>
      <Link to={`/post/${post._id}`}>
        <motion.div
          className="bg-white shadow-md rounded-md p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4 border hover:shadow-xl transition-shadow duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Author Image */}
          <img
            src={authorImg}
            alt={authorName}
            className="w-16 h-16 rounded-full object-cover border-2 "
          />

          {/* Post Details */}
          <div className="flex-1">
            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200">
              {title}
            </h2>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 my-2">
              {tags?.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs font-medium bg-blue-100 text-blue-600 py-1 px-2 rounded-full hover:bg-blue-600 hover:text-white transition duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Author & Time */}
            <div className="text-sm text-gray-500">
              <p>
                By
                <span className="font-medium text-gray-700"> {authorName} </span>
                • {postTime}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 text-gray-600">
            {/* Comments */}
            <div className="flex items-center gap-1 text-blue-500">
              <FaRegComment className="text-xl" />
              <span className="text-lg font-medium">{comments?.length}</span>
            </div>

            {/* Upvotes */}
            <div className="flex items-center gap-1 text-green-500">
              <FaThumbsUp className="text-xl" />
              <span className="text-lg font-medium">{upVote}</span>
            </div>

            {/* Downvotes */}
            <div className="flex items-center gap-1 text-red-500">
              <FaThumbsDown className="text-xl" />
              <span className="text-lg font-medium">{downVote}</span>
            </div>
          </div>
        </motion.div>
      </Link>
    </>
  );
};

export default PostItemCard;
