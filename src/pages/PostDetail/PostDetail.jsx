import { useLoaderData } from "react-router-dom";
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

const PostDetail = () => {
  const post = useLoaderData();
  const [comment, setComment] = useState("");
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
    comments,
  } = post;

  const handleCommentSubmit = () => {
    console.log(comment);
  };

  console.log(post);
  return (
    <div>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* author info */}
        <div className="flex items-center gap-4 border-b pb-4 mb-4">
          <img
            src={authorImg}
            alt="Author"
            className="w-14 h-14 rounded-full object-cover border border-gray-300"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              {authorName}
            </h3>
            <p className="text-sm text-gray-500">{postTime}</p>
          </div>
        </div>

        {/* post content */}
        <h1 className="text-2xl font-bold text-gray-900 mb-3">{title}</h1>
        <p className="text-gray-700 mb-4">{description}</p>

        {/* tags */}
        <div className="mb-4">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm mr-2"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* action buttons */}
        <div className="flex items-center gap-6 border-t pt-4">
          <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500">
            <FaThumbsUp className="text-xl" />
            <span>{upVote}</span>
          </button>

          <button className="flex items-center gap-2 text-gray-600 hover:text-red-500">
            <FaThumbsDown className="text-xl" />
            <span>{downVote}</span>
          </button>

          <button className="flex items-center gap-2 text-gray-600 hover:text-green-500">
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
          </button>

          <button className="flex items-center gap-2 text-gray-600 hover:text-yellow-500">
            <FaComment className="text-xl" />
            <span>{comments.length}</span>
          </button>
        </div>

        {/* comment section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Comments</h3>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write a comment..."
              className="flex-grow p-2 border border-gray-300 rounded-lg"
            />
            <button
              onClick={handleCommentSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Comment
            </button>
          </div>

          {/* render comments */}
          <div className="space-y-3">
            {comments.length > 0 ? (
              comments?.map((cmt, index) => (
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
      </div>
    </div>
  );
};

export default PostDetail;
