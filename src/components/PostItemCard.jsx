import React from "react";
import { FaRegComment, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const PostItemCard = ({ post }) => {
//   console.log(post);
  return (
    <>
      <Link to={`/post/${post._id}`}>
        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
          {/* Author Image */}
          <img
            src={post.authorImg}
            alt={`${post.authorName}'s profile`}
            className="w-16 h-16 rounded-full object-cover"
          />

          {/* Post Details */}
          <div className="flex-1">
            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-800">
              {post.title}
            </h2>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 my-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs font-medium bg-blue-100 text-blue-600 py-1 px-2 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Author & Time */}
            <div className="text-sm text-gray-500">
              <p>
                By <span className="font-medium">{post.authorName}</span> •{" "}
                {post.postTime}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 text-gray-600">
            {/* Comments */}
            <div className="flex items-center gap-1">
              <FaRegComment className="text-xl text-blue-500" />
              <span className="text-lg font-medium">
                {post.comments.length}
              </span>
            </div>

            {/* Upvotes */}
            <div className="flex items-center gap-1">
              <FaThumbsUp className="text-xl text-green-500" />
              <span className="text-lg font-medium">{post.upVote}</span>
            </div>

            {/* Downvotes */}
            <div className="flex items-center gap-1">
              <FaThumbsDown className="text-xl text-red-500" />
              <span className="text-lg font-medium">{post.downVote}</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PostItemCard;
