import { useEffect, useState } from "react";
import JoblyApi from "../JoblyApi/JoblyApi";
import JobList from "./JobList";

const Jobs = () => {
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
    <div>
      <p>There are {jobs.length} jobs available on Jobly!</p>
      <JobList jobs={jobs} />
    </div>
  );
};

export default Jobs;
