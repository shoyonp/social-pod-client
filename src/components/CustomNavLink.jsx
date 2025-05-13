import { NavLink } from "react-router-dom";

const CustomNavLink = ({ to, text }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block px-3 py-2 my-1 rounded-md font-medium transition duration-300
         ${
           isActive
             ? "bg-gray-700 text-white"
             : "text-gray-300 hover:bg-gray-700 hover:text-white"
         }`
      }
    >
      {text}
    </NavLink>
  );
};

export default CustomNavLink;
