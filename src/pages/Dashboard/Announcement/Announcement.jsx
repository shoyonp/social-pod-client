import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useAnnouncement from "../../../hooks/useAnnouncement";

const Announcement = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [, , refetch] = useAnnouncement();
  const onSubmit = async (data) => {
    console.log(data);
    const announcementData = {
      ...data,
      authorName: user?.displayName,
      authorImage: user?.photoURL,
    };
    const res = await axiosSecure.post("/announcement", announcementData);
    console.log(res.data);
    reset();
    if (res.data.insertedId) {
      toast.success("Your announcement has been published!");
      refetch();
    }
  };
  return (
    <>
      <motion.div
        className="max-w-2xl mx-auto bg-white p-8 rounded-md shadow-lg mt-3"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Make an Announcement
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col">
            <label className="text-gray-600 mb-2">Author Image URL</label>
            <input
              type="text"
              defaultValue={user.photoURL}
              className="input input-bordered w-full bg-gray-50 text-gray-700 border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-md"
              placeholder="Enter image URL"
              readOnly
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col">
            <label className="text-gray-600 mb-2">Author Name</label>
            <input
              type="text"
              defaultValue={user?.displayName}
              className="input input-bordered w-full bg-gray-50 text-gray-700 border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-md"
              placeholder="Enter your name"
              readOnly
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col">
            <label className="text-gray-600 mb-2">Title</label>
            <input
              type="text"
              {...register("title", { required: true })}
              className="input input-bordered w-full bg-gray-50 text-gray-700 border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-md"
              placeholder="Enter announcement title"
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col">
            <label className="text-gray-600 mb-2">Description</label>
            <textarea
              {...register("description", { required: true })}
              className="textarea textarea-bordered w-full bg-gray-50 text-gray-700 border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-md"
              placeholder="Enter detailed description"
              rows={5}
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <button
              type="submit"
              className="btn btn-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md shadow-md"
            >
              Submit Announcement
            </button>
          </motion.div>
        </form>
      </motion.div>
    </>
  );
};

export default Announcement;
