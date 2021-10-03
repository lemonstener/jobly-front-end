import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import jwt from "jsonwebtoken";
import "./App.css";
import UserContext from "./UserContext";
import JoblyApi from "./JoblyApi/JoblyApi";
import Nav from "./Nav/Nav";
import Routes from "./Nav/Routes";

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.jobly);
  const [applications, setApplications] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(
    function loadUserInfo() {
      async function getCurrentUser() {
        if (token) {
          try {
            const { username } = jwt.decode(token);
            JoblyApi.token = token;
            const currentUser = await JoblyApi.getUser(username);
            setUser(currentUser);
            setApplications(currentUser.applications);
          } catch (err) {
            setUser(null);
          }
        }
        setLoadingUser(false);
      }
      getCurrentUser();
    },
    [token]
  );

  const apply = async (id) => {
    if (applications.includes(id)) {
      return;
    }
    await JoblyApi.applyToJob(user.username, id);
    setApplications([...applications, id]);
  };

  const login = async (data) => {
    try {
      const token = await JoblyApi.loginUser(data);
      setToken(token);
      localStorage.setItem("jobly", token);
      return { success: true };
    } catch (errors) {
      return { success: false, errors };
    }
  };

  const register = async (data) => {
    try {
      const token = await JoblyApi.registerUser(data);
      setToken(token);
      return { success: true };
    } catch (errors) {
      return { success: false, errors };
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.clear();
  };

  if (loadingUser) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser, apply, applications }}>
          <Nav logout={logout} />
          <Routes login={login} register={register} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
