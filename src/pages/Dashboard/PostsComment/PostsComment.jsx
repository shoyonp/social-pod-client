import { useParams } from "react-router-dom";
import useCommentById from "../../../hooks/useCommentById";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const PostsComment = () => {
  const { postId } = useParams();
  const [comments] = useCommentById(postId);

  const [selectedFeedback, setSelectedFeedback] = useState({});
  const [reported, setReported] = useState({});
  const [modalContent, setModalContent] = useState(null);

  const handleFeedback = (commentId, value) => {
    setSelectedFeedback({ ...selectedFeedback, [commentId]: value });
  };

  // console.log("selected report",selectedFeedback);
  // console.log("report ",reported);

  const handleReportClick = (commentId) => {
    setReported({ ...reported, [commentId]: true });
  };

  const handleReadMore = (comment) => {
    setModalContent(comment);
  };

  // console.log(comments);
  return (
    <>
      <Helmet>
        <title>Social Pod | Feedback Comment</title>
      </Helmet>

      <div className="container mx-auto mt-10 p-5 bg-white shadow-2xl rounded-lg max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Comments Management
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="p-4 border">Email</th>
                <th className="p-4 border">Comment</th>
                <th className="p-4 border">Feedback</th>
                <th className="p-4 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {comments.map((comment) => (
                <tr
                  key={comment._id}
                  className="hover:bg-gray-100 transition duration-300"
                >
                  <td className="p-4 border text-gray-700">
                    {comment?.commenterEmail}
                  </td>
                  <td className="p-4 border text-gray-700">
                    {comment?.comment?.length > 20 ? (
                      <>
                        {comment.comment.substring(0, 20)}...
                        <button
                          className="text-blue-500 ml-2 underline"
                          onClick={() => handleReadMore(comment?.comment)}
                        >
                          Read More
                        </button>
                      </>
                    ) : (
                      comment?.comment
                    )}
                  </td>
                  <td className="p-4 border">
                    <select
                      className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                      onChange={(e) =>
                        handleFeedback(comment._id, e.target.value)
                      }
                    >
                      <option value="" disabled selected>
                        Select feedback
                      </option>
                      <option value="Inappropriate content">
                        Inappropriate content
                      </option>
                      <option value="Spam or advertisement">
                        Spam or advertisement
                      </option>
                      <option value="Harassment or bullying">
                        Harassment or bullying
                      </option>
                    </select>
                  </td>
                  <td className="p-4 border">
                    <button
                      className={`px-4 py-2 rounded text-white transition duration-300 w-full text-center ${
                        selectedFeedback[comment._id]
                          ? "bg-red-500 hover:bg-red-600"
                          : "bg-gray-400 cursor-not-allowed"
                      }`}
                      onClick={() => handleReportClick(comment._id)}
                      disabled={
                        !selectedFeedback[comment._id] || reported[comment._id]
                      }
                    >
                      {reported[comment._id] ? "Reported" : "Report"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {modalContent && (
          <dialog open className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Full Comment</h3>
              <p className="py-4">{modalContent}</p>
              <div className="modal-action">
                <form method="dialog">
                  <button
                    className="btn btn-primary"
                    onClick={() => setModalContent(null)}
                  >
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        )}
      </div>
    </>
  );
};

export default PostsComment;
