import { Link, NavLink } from "react-router-dom";
import logo from "../assets/assets/icons8-communicate-pieces-96.png";
import { IoNotificationsOutline } from "react-icons/io5";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import useAnnouncement from "../hooks/useAnnouncement";
import useAdmin from "../hooks/useAdmin";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [announcements] = useAnnouncement();
  const [isAdmin] = useAdmin();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout done");
      })
      .catch((err) => console.log(err));
  };
  const links = (
    <>
      <NavLink
        className={({ isActive }) =>
          `py-2 rounded-md transition ${
            isActive ? "active" : "hover:bg-gray-100"
          }`
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `py-2 rounded-md transition ${
            isActive ? "active" : "hover:bg-gray-100"
          }`
        }
        to="/membership"
      >
        Membership
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `py-2 rounded-md transition ${
            isActive ? "active" : "hover:bg-gray-100"
          }`
        }
        to="/guidelines"
      >
        Guidelines
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `py-2 rounded-md transition ${
            isActive ? "active" : "hover:bg-gray-100"
          }`
        }
        to="/contact"
      >
        Contact Us
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `py-2 rounded-md transition ${
            isActive ? "active" : "hover:bg-gray-100"
          }`
        }
        to="/faq"
      >
        FAQ
      </NavLink>
      {user && user.email ? (
        ""
      ) : (
        <NavLink
          className={({ isActive }) =>
            `py-2 rounded-md transition ${
              isActive ? "active" : "hover:bg-gray-100"
            }`
          }
          to="/login"
        >
          Join US
        </NavLink>
      )}
    </>
  );
  return (
    <>
      <div className="navbar fixed top-0 left-0 w-full z-50 bg-white shadow-md px-4 md:px-8 ">
        {/* Logo */}
        <div className="flex-1 flex items-center gap-4">
          <img src={logo} className="w-8 md:w-9" alt="Logo" />
          <Link to="/" className="title text-gray-700">
            <span>S</span>ocial <span>P</span>od
          </Link>
        </div>
        <div className="flex items-center gap-3">
          {/* links */}
          <div className="hidden md:flex">
            <ul className="flex gap-4 text-gray-600 font-medium">{links}</ul>
          </div>
          {/* Notifications */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="p-1 border border-gray-300 hover:border-blue-400 rounded-full transition-all duration-300 shadow-sm "
            >
              <IoNotificationsOutline className="text-[26px] text-gray-600 group-hover:text-blue-600 transition" />
              {announcements?.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow animate-bounce">
                  {announcements.length}
                </span>
              )}
            </div>
            {/* notification content */}
            <div
              tabIndex={0}
              className="dropdown-content z-[100] mt-4 w-80 max-h-96 overflow-y-auto bg-white border border-gray-200 rounded-2xl shadow-lg p-4 transition-all duration-300 origin-top-right animate-fade-in"
            >
              <p className="font-semibold text-gray-800 mb-3">
                📢 Announcements
              </p>
              {announcements.length === 0 ? (
                <p className="text-sm text-gray-500">No new announcements.</p>
              ) : (
                announcements.map((announcement, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 hover:bg-blue-50 px-3 py-2 rounded-xl text-sm text-gray-700 mb-2 shadow-sm transition"
                  >
                    <div className="flex items-start gap-2">
                      <span className="text-blue-500 text-lg">🔔</span>
                      <span>
                        {announcement?.title || "New announcement available!"}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* after user login content */}
          {user && user.email ? (
            <div className="dropdown dropdown-end text-center z-10">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full border border-gray-300">
                  <img alt="User Avatar" src={user?.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white rounded-lg shadow-lg mt-3 w-52 p-2 "
              >
                <li className="text-gray-700 mb-2">{user?.displayName}</li>
                <li className="sm:block md:hidden">{links}</li>
                {isAdmin ? (
                  <li>
                    <NavLink
                      to="/dashboard/adminProfile"
                      className="hover:bg-blue-100"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                ) : (
                  <li>
                    <NavLink
                      to="/dashboard/myProfile"
                      className="hover:bg-blue-100"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                )}
                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-sm w-full bg-blue-500 text-white hover:bg-blue-600"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="dropdown dropdown-end text-center z-10">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <FaUserAlt className="text-xl text-gray-600" />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white md:bg-none rounded-lg shadow-lg mt-3 w-52 p-2 "
              >
                <li className="sm:block md:hidden">{links}</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
