import { NavLink } from "react-router-dom";

const CreateAccountPage = () => {
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
          </div>
          <div className="form-control mt-6">
            <NavLink className="btn btn-secondary" to="/create-account">
              Create Account
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;
