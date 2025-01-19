import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user,loading } = useAuth();
  if(loading){
    return(
    //     <div className="h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    //   <div className="relative w-16 h-16">
    //     {/* Outer Ring */}
    //     <div className="absolute inset-0 border-4 border-transparent border-t-indigo-300 border-b-pink-300 rounded-full animate-spin"></div>
    //     {/* Middle Ring */}
    //     <div className="absolute inset-2 border-4 border-transparent border-t-purple-300 border-b-indigo-500 rounded-full animate-spin-fast"></div>
    //     {/* Inner Dot */}
    //     <div className="absolute inset-4 bg-indigo-500 rounded-full animate-pulse"></div>
    //   </div>
    // </div>
    //     <div className="h-screen flex justify-center items-center bg-gray-100">
    //     <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    //   </div>
    <div className="h-screen flex justify-center items-center">
    <span className="loading loading-bars loading-lg"></span>
  </div>
    ) 
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
