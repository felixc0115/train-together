import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";

const LoginPage = () => {
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(authActions.login());
  };

  return (
    <div className="flex w-full justify-center">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
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
            <button className="btn btn-primary mb-3" onClick={loginHandler}>
              Login
            </button>
            <button className="btn btn-secondary">
              <NavLink to="/createAccount">Create Account</NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
