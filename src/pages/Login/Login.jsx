import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import SocialLogin from "../../components/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    signIn(data.email, data.password).then((result) => {
      const user = result.user;
      toast.success("Login Succcess");
      console.log(user);
      navigate(from, { replace: true });
    });
  };
  return (
    <>
      <Helmet>
        <title>Social Pod | Login</title>
      </Helmet>
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                {/* email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: true })}
                    name="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <p className="text-red-500">Email is required</p>
                  )}
                </div>
                {/* password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                      required: true,
                      // minLength: 6,
                      // maxLength: 20,
                      // pattern: /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    name="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                {/* button */}
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    className="btn btn-neutral"
                    value="Login"
                  />
                </div>
              </form>
              <p>
                New Here?
                <Link to="/register" className="text-blue-400">
                  Register
                </Link>
                Here
              </p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
