import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const loginHandler = () => {};

  // const loginHandler = async (e) => {
  //   e.preventDefault();
  //   console.log(email, password);
  //   const validateUser = async () => {
  //     const response = await fetch("/api/users/login", {
  //       method: "POST",
  //       body: JSON.stringify({ email, password }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //   };
  //   try {
  //     await validateUser();
  //     dispatch(authActions.login(user));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div className="flex w-full justify-center">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="text"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button
              to="/my-programs"
              className="btn mb-3"
              onClick={loginHandler}
            >
              Login
            </button>
            <button className="btn btn-secondary" to="/create-account">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
