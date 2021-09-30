import Job from "./Job";
import "./JobList.css";

const JobList = ({ jobs }) => {
  return (
    <div className="JobList">
      {jobs.map((j) => {
        return (
          <Job
            name={j.companyName || null}
            id={j.id}
            salary={j.salary}
            title={j.title}
            equity={j.equity}
          />
        );
      })}
    </div>
  );
};

export default JobList;
