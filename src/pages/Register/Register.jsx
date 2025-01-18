import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser } = useAuth();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      toast.success("Register Success");
      console.log("logged user", loggedUser);
    });
  };

  return (
    <div>
      <Helmet>
        <title>Social Pod | Register</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"></div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              {/* name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <p className="text-red-500">Name is required</p>
                )}
              </div>
              {/* photo url */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  placeholder="Photo URL"
                  {...register("photoURL", { required: true })}
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <p className="text-red-500">Photo URL is required</p>
                )}
              </div>
              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
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
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="Password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-500">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    Password must have one uppercase, one lowercase and one
                    number
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p>
              Already have an account ? <Link className="text-blue-400" to="/login">login</Link> here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
