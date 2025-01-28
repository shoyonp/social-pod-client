import React from "react";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosPublic from "../hooks/useAxiosPublic";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handeGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);

      const userInfo = {
        name: result.user?.displayName,
        email: result.user?.email,
        image: result.user?.photoURL,
        badge: "Bronze",
      };

      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        toast.success("Login Succcess");
        navigate(from, { replace: true });
      });
    });
  };
  return (
    <div>
  <div className="divider text-gray-500">OR</div>
  <div className="mt-2">
    <button
      onClick={handeGoogleSignIn}
      className="btn btn-block flex items-center justify-center gap-2 text-white font-semibold py-3 rounded-md shadow-md bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500 transition-all"
    >
      <FaGoogle className="text-lg" /> Login with Google
    </button>
  </div>
</div>
  );
};

export default SocialLogin;
