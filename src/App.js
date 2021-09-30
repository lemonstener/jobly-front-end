import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import JoblyApi from "./JoblyApi/JoblyApi";
import Nav from "./Nav/Nav";
import Routes from "./Nav/Routes";

function App() {
  const [user, setUser] = useState("deyan");
  const [token, setToken] = useState(JoblyApi.token);
  return (
    <div className="App">
      <BrowserRouter>
        <Nav user={user} />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
