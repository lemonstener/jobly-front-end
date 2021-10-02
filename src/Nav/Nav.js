import { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../UserContext";
import "./Nav.css";

const Nav = ({ logout }) => {
  const { user } = useContext(UserContext);
  const loggedInUser = () => {
    return (
      <>
        <NavLink to="/companies">Companies</NavLink>
        <NavLink to="/jobs">Jobs</NavLink>
        <NavLink to="/profile">{user.username}</NavLink>
        <NavLink
          className="Nav-logout"
          onClick={logout}
          to="/logout"
          exact={true}
        >
          Logout
        </NavLink>
      </>
    );
  };

  const guestUser = () => {
    return (
      <>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
      </>
    );
  };

  return (
    <nav className="Nav">
      <NavLink className="Nav-logo" to="/" exact={true}>
        Jobly
      </NavLink>
      {user ? loggedInUser() : guestUser()}
    </nav>
  );
};

export default Nav;
