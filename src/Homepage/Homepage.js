import { useContext } from "react";
import UserContext from "../UserContext";
import "./Homepage.css";

const Homepage = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="Homepage">
      <h1>Jobly</h1>
      {user && (
        <p>
          Welcome back, <b>{user.username}</b>!
        </p>
      )}
      {!user && <p>Get a job, loser</p>}
    </div>
  );
};

export default Homepage;
