import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <div className="flex">
      <div className="flex flex-col w-64 bg-slate-500 h-screen">
        <NavLink to="/dashboard/myProfile">My Profile</NavLink>
        <NavLink to="/dashboard/addPost">Add Post</NavLink>
        <NavLink to="/dashboard/myPost">My Post</NavLink>
        <div className="divider"></div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      </div>
    </>
  );
};

export default DashboardLayout;
