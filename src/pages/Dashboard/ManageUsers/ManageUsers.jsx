import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import useUsers from "../../../hooks/useUsers";
import { FaUserShield } from "react-icons/fa";

const ManageUsers = () => {
  const [search, setSearch] = useState("");
  const [users, refetch] = useUsers(search);
  const axiosSecure = useAxiosSecure();
  console.log(users);

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success(`Admin privileges activated for ${user.name}`);
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Social Pod | Manage Users</title>
      </Helmet>

      <div className="container mx-auto mt-3 p-6 bg-white shadow-md rounded-md max-w-5xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          User Management
        </h2>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search users..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300 text-sm lg:text-base">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="p-4 border">#</th>
                <th className="p-4 border">User Name</th>
                <th className="p-4 border">User Email</th>
                <th className="p-4 border">Subscription Status</th>
                <th className="p-4 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr
                  key={user._id}
                  className="hover:bg-gray-50 transition duration-300"
                >
                  <td className="p-4 border text-gray-700 text-center">
                    {index + 1}
                  </td>

                  <td className="p-4 border text-gray-700">{user?.name}</td>

                  <td className="p-4 border text-gray-700">{user?.email}</td>

                  <td className="p-4 border text-center">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        user?.badge === "Gold"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {user?.badge}
                    </span>
                  </td>
                  <td className="p-4 border text-center">
                    {user.role === "admin" ? (
                      <span className="inline-flex items-center px-4 py-2 bg-green-200 text-green-800 font-medium rounded-md">
                        <FaUserShield className="mr-2" />
                        Admin
                      </span>
                    ) : (
                      <button
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition transform hover:scale-105"
                        onClick={() => handleMakeAdmin(user)}
                      >
                        <FaUserShield className="mr-2" />
                        Make Admin
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageUsers;
