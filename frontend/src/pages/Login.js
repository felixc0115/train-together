import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { sendUserLoginData } from "../store/user-actions";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(sendUserLoginData({ email, password }));
  };

  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      navigate("/programs");
    }
  }, [user, navigate]);

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
              type="password"
              placeholder="password"
              className="input input-bordered"
            />
            {/* <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label> */}
          </div>
          <div className="form-control mt-6">
            <button
              to="/my-programs"
              className="btn mb-3"
              onClick={loginHandler}
            >
              Login
            </button>
            <NavLink className="btn btn-secondary" to="/create-account">
              Create Account
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
