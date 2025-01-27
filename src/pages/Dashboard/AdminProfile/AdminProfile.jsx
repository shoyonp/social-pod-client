import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AdminProfile = () => {
  const [newTag, setNewTag] = useState("");
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: stats = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["states"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
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

  const chartData = [
    { name: "Users", value: stats?.users || 0 },
    { name: "Posts", value: stats?.posts || 0 },
    { name: "Comments", value: stats?.comments || 0 },
  ];

  // custom shape bar chart
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };

  return (
    <>
      {/* profile data */}
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
            <h3 className="text-xl font-bold text-blue-700">{stats?.posts}</h3>
            <p className="text-gray-600">Total Posts</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-green-700">
              {stats?.comments}
            </h3>
            <p className="text-gray-600">Total Comments</p>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-purple-700">
              {stats?.users}
            </h3>
            <p className="text-gray-600">Total Users</p>
          </div>
        </div>
      </div>

      {/* chart */}
      <div>
        <BarChart
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="value"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 6]} />
            ))}
          </Bar>
        </BarChart>
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
