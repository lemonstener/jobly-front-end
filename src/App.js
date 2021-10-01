import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import UserContext from "./UserContext";
import JoblyApi from "./JoblyApi/JoblyApi";
import Nav from "./Nav/Nav";
import Routes from "./Nav/Routes";

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  async function login(data) {
    try {
      const token = await JoblyApi.loginUser(data);
      setToken(token);
      return { success: true };
    } catch (errors) {
      return { success: false, errors };
    }
  }

  async function register(data) {
    try {
      const token = await JoblyApi.registerUser(data);
      setToken(token);
      return { success: true };
    } catch (errors) {
      return { success: false, errors };
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <Nav />
          <Routes login={login} register={register} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
