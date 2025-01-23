import React from "react";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handeGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      toast.success("Login Succcess");
      navigate(from, { replace: true });
    });
  };
  return (
    <div>
      <div className="divider"></div>
      <div>
        <button onClick={handeGoogleSignIn} className="btn btn-neutral">
          Login With <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
