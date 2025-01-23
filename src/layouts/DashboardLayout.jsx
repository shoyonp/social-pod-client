import React from "react";
import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  // TODO: get isAdmin value from the database
  const isAdmin = true;
  return (
    <>
      <Helmet>
        <title>Social Pod | Dashboard</title>
      </Helmet>
      <div className="flex">
        <div className="flex flex-col w-64 bg-slate-500 min-h-screen">
          {isAdmin ? (
            <>
            <NavLink to="/dashboard/adminProfile">Admin Profile</NavLink>
          <NavLink to="/dashboard/manageUser">Manage Users</NavLink>
          <NavLink to="/dashboard/activities">Activities</NavLink>
          <NavLink to="/dashboard/makeAnnouncement">Make Announcement</NavLink>
          </>
          ) : (
            <>
              <NavLink to="/dashboard/myProfile">My Profile</NavLink>
              <NavLink to="/dashboard/addPost">Add Post</NavLink>
              <NavLink to="/dashboard/myPost">My Post</NavLink>
            </>
          )}
          <div className="divider"></div>
          {/* shared routes */}
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
        {/* iitial text */}
        {/* <div className="flex flex-col items-center justify-center h-[50vh] text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Welcome to Your Dashboard
          </h2>
          <p className="text-lg text-gray-500 mt-2">
            No posts available yet. Start by creating your first post!
          </p>
        </div> */}
      </div>
    </>
  );
};

export default DashboardLayout;
