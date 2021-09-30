import { Switch, Route, Redirect } from "react-router";
import Companies from "../Companies/Companies";
import Company from "../Companies/Company";
import Homepage from "../Homepage/Homepage";
import Jobs from "../Jobs/Jobs";

const Routes = () => {
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
        <Jobs />
      </Route>
      <Route exact path="/signup">
        <h1>Signup page</h1>
      </Route>
      <Route exact path="/login">
        <h1>Login page</h1>
      </Route>
      <Route exact path="/profile">
        <h1>Profile page</h1>
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
