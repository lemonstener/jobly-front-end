import "./Job.css";

const Job = ({ title, salary, id, equity, name }) => {
  return (
    <div className="Job">
      <h3>{title}</h3>
      {name && <h4 className="Job-company">{name}</h4>}
      <p>Salary: ${salary || 0}</p>
      <p>Equity: {equity || "none"}</p>
      <button>APPLY</button>
    </div>
  );
};

export default Job;
