import { useContext } from "react";
import { Redirect, Route } from "react-router";
import UserContext from "../UserContext";

const ProtectedRoute = ({ exact, path, children }) => {
  const { user } = useContext(UserContext);
  if (!user) {
    return <Redirect to="/login" />;
  }
  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  );
};

export default ProtectedRoute;
