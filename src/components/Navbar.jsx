import { NavLink } from "react-router-dom";
import logo from "../assets/assets/icons8-forum-96.png";
import { IoNotifications } from "react-icons/io5";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import useAnnouncement from "../hooks/useAnnouncement";
import useAdmin from "../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [announcements] = useAnnouncement();
  const [isAdmin] = useAdmin();
  const handleLOgOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout done");
      })
      .catch((err) => console.log(err));
  };
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/membership">Membership</NavLink>
      {user && user.email ? "" : <NavLink to="/login">Join US</NavLink>}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <img src={logo} className="w-8" alt="" />
          <a className="btn btn-ghost text-xl">
            <span>S</span>ocial <span>P</span>od
          </a>
        </div>
        <div className="flex">
          <div>
            <ul className="flex gap-3">{links}</ul>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <IoNotifications className="text-2xl"></IoNotifications>
                <span className="badge badge-sm indicator-item">
                  {announcements?.length}
                </span>
              </div>
            </div>
          </div>
          {/* after user login content */}
          {user && user.email ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>{user?.displayName}</li>
                {user && isAdmin && (
                  <li>
                    <NavLink to="/dashboard/adminProfile">Dashboard</NavLink>
                  </li>
                )}
                {user && !isAdmin && (
                  <li>
                    <NavLink to="/dashboard/myProfile">Dashboard</NavLink>
                  </li>
                )}
                <li>
                  <button onClick={handleLOgOut} className="btn">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            "no"
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
