import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn } = useAuth();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
    .then((result) => {
      const user = result.user;
      toast.success("Login Succcess")
      console.log(user);
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
              <form onSubmit={handleLogin} className="card-body">
                {/* email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="input input-bordered"
                    required
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
                New Here?{" "}
                <Link to="/register" className="text-blue-400">
                  Register
                </Link>{" "}
                Here
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
