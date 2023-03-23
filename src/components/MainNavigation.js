import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth-slice";

const MainNavigation = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const totalPrograms = useSelector((state) => state.allPrograms.totalPrograms);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {user && (
              <li>
                <NavLink to="programs">explore({totalPrograms})</NavLink>
              </li>
            )}
            {user && (
              <li>
                <NavLink to="my-programs">my programs</NavLink>
              </li>
            )}

            <li>
              <NavLink to="add-program">add program</NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="" className="font-mono normal-case text-2xl">
          train together
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {user && (
            <li>
              <NavLink className="font-mono" to="programs">
                explore({totalPrograms})
              </NavLink>
            </li>
          )}

          {user && (
            <li>
              <NavLink className="font-mono" to="my-programs">
                my programs
              </NavLink>
            </li>
          )}
          {user && (
            <li>
              <NavLink className="font-mono" to="add-program">
                add program
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <span className="font-mono">welcome, {user.username}!</span>
        ) : (
          ""
        )}
        {user ? (
          <NavLink
            to="/programs"
            onClick={logoutHandler}
            className="btn ml-5 font-mono"
          >
            logout{" "}
          </NavLink>
        ) : (
          <NavLink to="login" className="btn mr-1">
            Login
          </NavLink>
        )}
        {!user ? (
          <NavLink className="btn btn-secondary" to="create-account">
            Sign up
          </NavLink>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MainNavigation;
