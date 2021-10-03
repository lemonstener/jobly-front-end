import { useEffect, useState } from "react";
import SearchForm from "../Forms/SearchForm";
import JoblyApi from "../JoblyApi/JoblyApi";
import Job from "./Job";
import "./JobList.css";

const JobList = () => {
  const [jobs, setJobs] = useState(null);
  const [filteredJobs, setFilteredJobs] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await JoblyApi.getAllJobs();
      setJobs(data);
      setLoading(false);
    };
    getData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!filteredJobs) {
    return (
      <div className="JobList">
        <SearchForm type="job" setFilteredJobs={setFilteredJobs} />
        {jobs.map((j) => {
          return (
            <Job
              key={j.id}
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
  } else {
    return (
      <div className="JobList">
        <SearchForm type="job" setFilteredJobs={setFilteredJobs} />
        <button
          className="Forms-clear-button"
          onClick={() => setFilteredJobs(null)}
        >
          CLEAR
        </button>
        {filteredJobs.map((j) => {
          return (
            <Job
              key={j.id}
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
  }
};

export default JobList;
