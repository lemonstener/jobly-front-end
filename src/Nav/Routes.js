import { Switch, Route, Redirect } from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import Companies from "../Companies/Companies";
import Company from "../Companies/Company";
import LoginForm from "../Forms/LoginForm";
import RegisterForm from "../Forms/RegisterForm";
import Homepage from "../Homepage/Homepage";
import JobList from "../Jobs/JobList";
import EditForm from "../Forms/EditForm";

const Routes = ({ login, register }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/signup">
        <RegisterForm register={register} />
      </Route>
      <Route exact path="/login">
        <LoginForm login={login} />
      </Route>
      <ProtectedRoute exact path="/companies">
        <Companies />
      </ProtectedRoute>
      <ProtectedRoute exact path="/companies/:handle">
        <Company />
      </ProtectedRoute>
      <ProtectedRoute exact path="/jobs">
        <JobList />
      </ProtectedRoute>
      <ProtectedRoute exact path="/profile">
        <EditForm />
      </ProtectedRoute>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
