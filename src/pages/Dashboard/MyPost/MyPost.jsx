import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaComment, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useMyPost from "../../../hooks/useMyPost";
import { Link } from "react-router-dom";

const MyPost = () => {
  const axiosSecure = useAxiosSecure();
  const [myPosts, loading, refetch] = useMyPost();

  //   delete a data
  const handleDelete = (myPost) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/deletePost/${myPost._id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  //   console.log(myPosts);
  //   if (loading) {
  //     return (
  //       <div className="flex justify-center items-center h-screen">
  //         <span className="loading loading-ring loading-lg text-primary"></span>
  //       </div>
  //     );
  //   }

  return (
    <>
      <Helmet>
        <title>Social Pod | My Post</title>
      </Helmet>
      <div className="overflow-x-auto shadow-md rounded-md max-w-4xl mx-auto mt-4">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-3 text-left">Post Title</th>
              <th className="px-6 py-3 text-left">Votes</th>
              <th className="px-6 py-3 text-center">Comments</th>
              <th className="px-6 py-3 text-center">Delete</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {myPosts?.length > 0 ? (
              myPosts?.map((myPost) => (
                <tr
                  key={myPost._id}
                  className="bg-white border-b hover:bg-gray-100 transition-all duration-300"
                >
                  <td className="px-6 py-4">{myPost?.title}</td>
                  <td className="px-6 py-4">{myPost?.upVote}</td>
                  <td className="px-6 py-4 text-center">
                    <Link
                      to={`/dashboard/comments/${myPost._id}`}
                      className="btn bg-green-500 hover:bg-green-600 hover:scale-110 transform transition-all duration-300"
                    >
                      <FaComment size={20} className="text-gray-100" />
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => handleDelete(myPost)}
                      className="btn bg-red-500 hover:bg-red-600 hover:scale-110 transform transition-all duration-300"
                    >
                      <FaTrashAlt size={20} className="text-gray-100" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                  No posts available. Please add some posts.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyPost;
