import { Switch, Route, Redirect } from "react-router";
import App from "../App";
import Companies from "../Companies/Companies";
import Company from "../Companies/Company";
import LoginForm from "../Forms/LoginForm";
import RegisterForm from "../Forms/RegisterForm";
import Homepage from "../Homepage/Homepage";
import JobList from "../Jobs/JobList";

const Routes = ({ login, register }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/companies">
        <Companies />
      </Route>
      <Route exact path="/companies/:handle">
        <Company />
      </Route>
      <Route exact path="/jobs">
        <JobList />
      </Route>
      <Route exact path="/signup">
        <RegisterForm register={register} />
      </Route>
      <Route exact path="/login">
        <LoginForm login={login} />
      </Route>
      <Route exact path="/profile">
        <h1>Profile page</h1>
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
