import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = ({ user }) => {
  const loggedInUser = () => {
    return (
      <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/companies">Companies</NavLink>
        <NavLink to="/jobs">Jobs</NavLink>
        <NavLink to="/profile">Profile</NavLink>
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

  return <nav className="Nav">{user ? loggedInUser() : guestUser()}</nav>;
};

export default Nav;
