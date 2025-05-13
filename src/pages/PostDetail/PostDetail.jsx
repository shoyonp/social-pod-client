import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaComment,
  FaShareAlt,
  FaThumbsDown,
  FaThumbsUp,
} from "react-icons/fa";
import { useState } from "react";
import {
  FacebookShareButton,
  WhatsappIcon,
  FacebookIcon,
  WhatsappShareButton,
} from "react-share";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useComment from "../../hooks/useComment";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const PostDetail = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const [commentText, setCommentText] = useState("");

  const {
    data: post = [],
    isLoading,
    refetch: rfc,
  } = useQuery({
    queryKey: ["post", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/post/${id}`);
      return res.data;
    },
  });

  const {
    _id,
    authorImg,
    authorName,
    postTime,
    title,
    tags,
    description,
    downVote,
    upVote,
  } = post;

  //   getting data by custom hook
  const [comments, , refetch] = useComment(title || "");

  // submit a comment
  const handleCommentSubmit = async () => {
    if (user && user.email) {
      const newComment = {
        comment: commentText,
        title,
        postId: _id,
        commenterName: user.displayName,
        commenterEmail: user.email,
      };

      try {
        const res = await axiosSecure.post("/comments", newComment);
        if (res.data.insertedId) {
          toast.success("Comment added successfully!");
          setCommentText("");
          refetch();
        }
      } catch (error) {
        toast.error("Failed to add comment. Try again!");
      }
    } else {
      toast.error("You need to login to comment");
    }
  };

  // update vote
  const handleUpdateVote = async (type) => {
    const res = await axiosSecure.patch(`/post/${_id}`, { type });
    if (res.data.modifiedCount > 0 && type) {
      toast.success(`${type === "upVote" ? "Upvote" : "Downvote"} updated!`);
    }
    rfc();
    // console.log(res.data);
  };

  return (
    <>
      <Helmet>
        <title>Social Pod | Post Details</title>
      </Helmet>
      <div className="pt-0 lg:pt-16">
        <motion.div
          className="max-w-3xl mx-auto bg-white shadow-md rounded-md p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* author info */}
          <div className="flex items-center gap-4 border-b pb-4 mb-4">
            <img
              src={authorImg}
              alt="Author"
              className="w-14 h-14 rounded-full object-cover border border-gray-300"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-800">{authorName}</h3>
              <p className="text-sm text-gray-500">{postTime}</p>
            </div>
          </div>

          {/* post content */}
          <h1 className="text-2xl font-bold text-gray-900 mb-3">{title}</h1>
          <p className="text-gray-700 mb-4">{description}</p>

          {/* tags */}
          <div className="mb-4 flex gap-2">
            {tags?.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium  hover:bg-blue-600 hover:text-white transition duration-300 hover:scale-105"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* action buttons */}
          <div className="flex items-center gap-6 border-t pt-4">
            {/* upVote */}
            <button
              onClick={() => handleUpdateVote("upVote")}
              className="flex items-center gap-2 text-gray-600 hover:text-blue-500"
            >
              <FaThumbsUp className="text-xl" />
              <span>{upVote}</span>
            </button>
            {/* downVote */}
            <button
              onClick={() => handleUpdateVote("downVote")}
              className="flex items-center gap-2 text-gray-600 hover:text-red-500"
            >
              <FaThumbsDown className="text-xl" />
              <span>{downVote}</span>
            </button>

            <div className="flex items-center gap-2 text-gray-600 hover:text-green-500">
              <FaShareAlt className="text-xl" />
              <span>Share to</span>
              <FacebookShareButton
                url={`${window.location.origin}/post/${_id}`}
                hashtag={`#${tags}`}
              >
                <FacebookIcon size={35} round={true}></FacebookIcon>
              </FacebookShareButton>
              <WhatsappShareButton
                url={`${window.location.origin}/post/${_id}`}
                title={`${title} - ${description}`}
                separator=" | "
              >
                <WhatsappIcon size={35} round={true}></WhatsappIcon>
              </WhatsappShareButton>
            </div>

            <button className="flex items-center gap-2 text-gray-600 hover:text-yellow-500">
              <FaComment className="text-xl" />
              <span>{comments?.length}</span>
            </button>
          </div>

          {/* comment section */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Comments</h3>
            <div className="flex flex-col md:flex-row   gap-2 mb-4">
              <input
                type="text"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Write a comment..."
                className="flex-grow p-2 border border-gray-300 rounded-lg"
              />
              <button
                onClick={handleCommentSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 hover:scale-105 transition"
              >
                Comment
              </button>
            </div>

            {/* render comments */}
            <div className="space-y-3">
              {comments?.length > 0 ? (
                comments?.reverse()?.map((cmt, index) => (
                  <div
                    key={index}
                    className="p-3 border border-gray-200 rounded-lg"
                  >
                    <p className="text-gray-800 font-medium">
                      {cmt.commenterName}
                    </p>
                    <p className="text-gray-600">{cmt.comment}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">
                  No comments yet. Be the first to comment!
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default PostDetail;
