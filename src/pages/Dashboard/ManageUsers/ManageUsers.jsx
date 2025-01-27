import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import useUsers from "../../../hooks/useUsers";

const ManageUsers = () => {
  const [search, setSearch] = useState("");
  const [users,refetch] = useUsers(search)
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
      <div className="container mx-auto mt-10 p-5 bg-white shadow-2xl rounded-lg max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          User Management
        </h2>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Search users..."
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
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
                  className="hover:bg-gray-100 transition duration-300"
                >
                  <td className="p-4 border text-gray-700">{index + 1}</td>
                  <td className="p-4 border text-gray-700">{user?.name}</td>
                  <td className="p-4 border text-gray-700">{user?.email}</td>
                  <td className="p-4 border text-gray-700">{user?.badge}</td>
                  <td className="p-4 border">
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        className="btn btn-primary"
                        onClick={() => handleMakeAdmin(user)}
                      >
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
