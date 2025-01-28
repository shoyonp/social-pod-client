import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import { Helmet } from "react-helmet-async";

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
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  // custom shape bar chart
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  // pie chart
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
      <Helmet>
        <title>Social Pod | Admin Dashboard</title>
      </Helmet>
      <div className="bg-gray-100 min-h-screen md:p-8">
        {/* profile  */}
        <div className="w-full md:max-w-4xl mx-auto bg-white p-10 rounded-md shadow">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Admin Dashboard
          </h1>
          <div className="flex flex-col md:flex-row text-center md:text-left items-center gap-6">
            <img
              src={user?.photoURL}
              alt="Admin"
              className="w-28 h-28 rounded-full border-4 border-gray-200"
            />
            <div>
              <h2 className="text-2xl font-semibold text-gray-700">
                {user?.displayName}
              </h2>
              <p className="text-gray-600">{user?.email}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="bg-blue-50 p-6 rounded-md shadow text-center transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-bold text-blue-600">
                {stats?.posts}
              </h3>
              <p className="text-gray-500">Total Posts</p>
            </div>
            <div className="bg-green-50 p-6 rounded-md shadow text-center transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-bold text-green-600">
                {stats?.comments}
              </h3>
              <p className="text-gray-500">Total Comments</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-md shadow text-center transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-bold text-purple-600">
                {stats?.users}
              </h3>
              <p className="text-gray-500">Total Users</p>
            </div>
          </div>
        </div>

        {/* chart  */}
        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bar Chart */}
          <div className="bg-white p-8 rounded-md shadow">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Bar Chart
            </h2>
            <ResponsiveContainer width="100%" height={300}>
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
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="bg-white p-8 rounded-md shadow">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Pie Chart
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart width={400} height={400}>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={colors[index % colors.length]}
                    />
                  ))}
                </Pie>
                <Legend></Legend>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* form  */}
        <div className="max-w-lg mx-auto mt-12 bg-white p-8 rounded-md shadow">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
            Add New Tag
          </h2>
          <form onSubmit={handleAddTag}>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tag Name
              </label>
              <input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter tag name"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-block bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              Add Tag
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
