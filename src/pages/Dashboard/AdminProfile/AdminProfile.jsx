import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import usePost from "../../../hooks/usePost";
import useUsers from "../../../hooks/useUsers";
import { useQuery } from "@tanstack/react-query";

const AdminProfile = () => {
  const [newTag, setNewTag] = useState("");
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [posts] = usePost();
  const [users] = useUsers();
  console.log(users);

  const {
    data: comments = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/comments");
      return res.data;
    },
  });

  const handleAddTag = async (e) => {
    e.preventDefault();

    const formattedTag = { value: newTag.toLowerCase(), label: newTag };
    const res = await axiosSecure.post("/tags", formattedTag);
    // console.log(res.data);
    // console.log(formattedTag);
    toast.success("Tag added successfully!");
  };
  return (
    <>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mt-10">
        <h1 className="text-3xl font-bold text-center mb-6">Admin Dashboard</h1>
        <div className="flex flex-col items-center">
          <img
            src={user?.photoURL}
            alt="Admin"
            className="w-32 h-32 rounded-full mb-4 border-4 border-blue-500"
          />
          <h2 className="text-2xl font-semibold">{user?.displayName}</h2>
          <p className="text-gray-600 mb-4">{user?.email}</p>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center mt-6">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-blue-700">{posts?.length}</h3>
            <p className="text-gray-600">Total Posts</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-green-700">
              {comments?.length}
            </h3>
            <p className="text-gray-600">Total Comments</p>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-purple-700">
              {users?.length}
            </h3>
            <p className="text-gray-600">Total Users</p>
          </div>
        </div>
      </div>
      {/* form */}
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Add New Tag</h2>
        <form onSubmit={handleAddTag}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tag Name
            </label>
            <input
              type="text"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter tag name"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
          >
            Add Tag
          </button>
        </form>
      </div>
    </>
  );
};

export default AdminProfile;
