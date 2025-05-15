import { NavLink, Outlet } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
  const [isAdmin] = useAdmin();
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout done");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />

        {/* Main Content */}
        <div className="drawer-content flex flex-col">
          {/* navbar */}
          <div className="bg-blue-600 text-white flex justify-between items-center px-4 py-3 shadow-md lg:hidden">
            <h1 className="text-xl font-bold">
              {isAdmin ? "Admin Dashboard" : "User Dashboard"}
            </h1>
            <label htmlFor="drawer-toggle" className="">
              <FiMenu className="text-2xl cursor-pointer" />
            </label>
          </div>

          {/* Page content here */}
          <div className="p-6 bg-gray-100 min-h-screen">
            <Outlet />
          </div>
        </div>

        {/* Sidebar */}
        <div className="drawer-side">
          <label htmlFor="drawer-toggle" className="drawer-overlay"></label>
          <aside
            className="w-64 text-white p-4 h-full relative"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #9333ea)",
            }}
          >
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] z-0"></div>

            <div className="relative z-10 ">
              <h2 className="text-lg font-bold mb-4">Menu</h2>

              {isAdmin ? (
                <>
                  <NavLink
                    to="/dashboard/adminProfile"
                    className="block p-2 rounded-md hover:bg-white hover:text-blue-600 transition mb-3"
                  >
                    Admin Profile
                  </NavLink>
                  <NavLink
                    to="/dashboard/manageUser"
                    className="block p-2 rounded-md hover:bg-white hover:text-blue-600  transition mb-3"
                  >
                    Manage Users
                  </NavLink>
                  <NavLink
                    to="/dashboard/activities"
                    className="block p-2 rounded-md hover:bg-white hover:text-blue-600  transition mb-3"
                  >
                    Activities
                  </NavLink>
                  <NavLink
                    to="/dashboard/makeAnnouncement"
                    className="block p-2 rounded-md hover:bg-white hover:text-blue-600  transition mb-3"
                  >
                    Make Announcement
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink
                    to="/dashboard/myProfile"
                    className="block p-2 rounded-md hover:bg-white hover:text-blue-600  transition mb-3"
                  >
                    My Profile
                  </NavLink>
                  <NavLink
                    to="/dashboard/addPost"
                    className="block p-2 rounded-md hover:bg-white hover:text-blue-600  transition mb-3"
                  >
                    Add Post
                  </NavLink>
                  <NavLink
                    to="/dashboard/myPost"
                    className="block p-2 rounded-md hover:bg-white hover:text-blue-600  transition mb-3"
                  >
                    My Post
                  </NavLink>
                </>
              )}

              <div className="border-t border-blue-500 my-4"></div>

              <NavLink
                to="/"
                className="block p-2 rounded-md hover:bg-white hover:text-blue-600  transition mb-3"
              >
                Home
              </NavLink>
              <NavLink
                to="/guidelines"
                className="block p-2 rounded-md hover:bg-white hover:text-blue-600  transition mb-3"
              >
                Guidelines
              </NavLink>
              <NavLink
                to="/aboutpage"
                className="block p-2 rounded-md hover:bg-white hover:text-blue-600  transition mb-3"
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact"
                className="block p-2 rounded-md hover:bg-white hover:text-blue-600  transition mb-3"
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/faq"
                className="block p-2 rounded-md hover:bg-white hover:text-blue-600  transition mb-3"
              >
                FAQ
              </NavLink>
              <button
                onClick={handleLogOut}
                className="btn btn-sm w-full border-none bg-red-500 text-white hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
