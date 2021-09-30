import { useEffect, useState } from "react";
import { useParams } from "react-router";
import JoblyApi from "../JoblyApi/JoblyApi";
import JobList from "../Jobs/JobList";
import "./Company.css";

const Company = () => {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await JoblyApi.getCompany(handle);
      setCompany(data);
      setLoading(false);
    };
    getData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="Company">
      <h1>{company.name}</h1>
      <p>{company.description}</p>
      <p>{company.numEmployees} people work here.</p>
      <p>{company.jobs.length} jobs available: </p>
      <JobList jobs={company.jobs} />
    </div>
  );
};

export default Company;
