import { NavLink, Outlet } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

import useAdmin from "../hooks/useAdmin";

const DashboardLayout = () => {
  const [isAdmin] = useAdmin();

  return (
    <>
      <div className="drawer drawer-mobile h-screen">
      
      <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="drawer-content flex flex-col">
        {/* navbar  */}
        <div className="bg-blue-600 text-white flex justify-between items-center px-4 py-3 shadow-md">
          <h1 className="text-xl font-bold">{ isAdmin ? "Admin Dashboard" : "User Dashboard"}</h1>
          <label htmlFor="drawer-toggle" className="">
            <FiMenu className="text-2xl" />
          </label>
        </div>

        {/* Page content here */}
        <div className="p-6 bg-gray-100 min-h-screen">
          <Outlet />
        </div>
      </div>

      {/* Sidebar content here */}
      <div className="drawer-side">
        <label htmlFor="drawer-toggle" className="drawer-overlay"></label>
        <aside className="w-64 bg-blue-600 text-white flex flex-col gap-4 p-4 h-full">
          <h2 className="text-lg font-bold mb-4">Menu</h2>

          {/* admin routes */}
          {isAdmin ? (
            <>
              <NavLink
                to="/dashboard/adminProfile"
                className="block p-2 rounded-md hover:bg-blue-500 transition"
              >
                Admin Profile
              </NavLink>
              <NavLink
                to="/dashboard/manageUser"
                className="block p-2 rounded-md hover:bg-blue-500 transition"
              >
                Manage Users
              </NavLink>
              <NavLink
                to="/dashboard/activities"
                className="block p-2 rounded-md hover:bg-blue-500 transition"
              >
                Activities
              </NavLink>
              <NavLink
                to="/dashboard/makeAnnouncement"
                className="block p-2 rounded-md hover:bg-blue-500 transition"
              >
                Make Announcement
              </NavLink>
            </>
          ) : (
            <>
            {/* user routes */}
              <NavLink
                to="/dashboard/myProfile"
                className="block p-2 rounded-md hover:bg-blue-500 transition"
              >
                My Profile
              </NavLink>
              <NavLink
                to="/dashboard/addPost"
                className="block p-2 rounded-md hover:bg-blue-500 transition"
              >
                Add Post
              </NavLink>
              <NavLink
                to="/dashboard/myPost"
                className="block p-2 rounded-md hover:bg-blue-500 transition"
              >
                My Post
              </NavLink>
            </>
          )}

          <div className="border-t border-blue-500 my-4"></div>

          {/* shared link */}
          <NavLink
            to="/"
            className="block p-2 rounded-md hover:bg-blue-500 transition"
          >
            Home
          </NavLink>
        </aside>
      </div>
    </div>
    </>
  );
};

export default DashboardLayout;
