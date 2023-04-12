import { useState } from "react";
import { sendUserSignupData } from "../store/user-actions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const CreateAccountPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const createAccountHandler = (e) => {
    e.preventDefault();
    dispatch(sendUserSignupData({ email, password, username }));
    navigate("/my-programs");
  };
  return (
    <div className="flex w-full justify-center">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              type="text"
              placeholder="username"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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
          </div>
          <div className="form-control mt-6">
            <button
              className="btn btn-secondary"
              onClick={createAccountHandler}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;
