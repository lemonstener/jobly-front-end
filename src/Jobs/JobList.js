import { useEffect, useState } from "react";
import SearchForm from "../Forms/SearchForm";
import JoblyApi from "../JoblyApi/JoblyApi";
import Job from "./Job";
import "./JobList.css";

const JobList = () => {
  const [jobs, setJobs] = useState(null);
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

  return (
    <div className="JobList">
      <SearchForm type="job" setJobs={setJobs} />
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
