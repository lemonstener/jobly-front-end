import { useContext } from "react";
import UserContext from "../UserContext";
import "./Job.css";

const Job = ({ title, salary, id, equity, name }) => {
  const { apply, applications } = useContext(UserContext);
  return (
    <div className="Job">
      <h3>{title}</h3>
      {name && <h4 className="Job-company">{name}</h4>}
      <p>Salary: ${salary || 0}</p>
      <p>Equity: {equity || "none"}</p>
      {!applications.includes(id) && (
        <button onClick={() => apply(id)}>APPLY</button>
      )}
      {applications.includes(id) && (
        <p className="Job-applied">✓ You applied!</p>
      )}
    </div>
  );
};

export default Job;
