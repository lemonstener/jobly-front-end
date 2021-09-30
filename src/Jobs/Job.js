import "./Job.css";

const Job = ({ title, salary, id, equity, name }) => {
  return (
    <div className="Job">
      <h3>{title}</h3>
      {name && <h4>{name}</h4>}
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
      <button>Apply</button>
    </div>
  );
};

export default Job;
