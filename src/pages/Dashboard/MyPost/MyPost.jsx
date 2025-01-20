import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaComment, FaTrashAlt } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";

const MyPost = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: myPosts = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["myPosts", user.email],
    queryFn: async () => {
      const result = await axiosSecure.get(`/mypost/${user.email}`);
      refetch();
      return result?.data;
    },
  });
  if (loading) {
    return <span className="loading loading-ring loading-lg"></span>;
  }
  console.log(myPosts);
  return (
    <div className="overflow-x-auto shadow-lg rounded-lg max-w-4xl mx-auto mt-6">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-6 py-3 text-left">Post Title</th>
            <th className="px-6 py-3 text-left">Votes</th>
            <th className="px-6 py-3 text-center">Actions</th>
            <th className="px-6 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-800">
          {myPosts?.map((myPost) => (
            <tr
              key={myPost._id}
              className="bg-white border-b hover:bg-gray-100 transition-all duration-300"
            >
              <td className="px-6 py-4">{myPost?.title}</td>
              <td className="px-6 py-4">{myPost?.upVote}</td>
              <td className="px-6 py-4 text-center">
                <button className="btn btn-primary p-2 rounded-full hover:scale-110 transform transition-all duration-300">
                  <FaComment size={20} />
                </button>
              </td>
              <td className="px-6 py-4 text-center">
                <button className="btn btn-error p-2 rounded-full hover:scale-110 transform transition-all duration-300">
                  <FaTrashAlt size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyPost;
