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

  useEffect(
    function loadUserInfo() {
      async function getCurrentUser() {
        if (token) {
          try {
            const { username } = jwt.decode(token);
            JoblyApi.token = token;
            let currentUser = await JoblyApi.getUser(username);
            setUser(currentUser);
          } catch (err) {
            setUser(null);
          }
        }
      }
      getCurrentUser();
    },
    [token]
  );

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

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <Nav logout={logout} />
          <Routes login={login} register={register} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
