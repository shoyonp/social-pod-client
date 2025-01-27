import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";

const AdminProfile = () => {
  const [newTag, setNewTag] = useState("");
  const axiosSecure = useAxiosSecure();

  const handleAddTag = async (e) => {
    e.preventDefault();

    const formattedTag = { value: newTag.toLowerCase(), label: newTag };
    const res = await axiosSecure.post("/tags", formattedTag);
    console.log(res.data);
    console.log(formattedTag);
    toast.success("Tag added successfully!");
  };
  return (
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
  );
};

export default AdminProfile;
