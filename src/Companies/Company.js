import { useEffect, useState } from "react";
import { useParams } from "react-router";
import JoblyApi from "../JoblyApi/JoblyApi";
import Job from "../Jobs/Job";
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
  }, [handle]);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="Company">
      <h1>{company.name}</h1>
      <p>{company.description}</p>
      <p>{company.numEmployees} people work here.</p>
      <p>{company.jobs.length} jobs available: </p>
      {company.jobs.map((j) => {
        return (
          <Job title={j.title} id={j.id} salary={j.salary} equity={j.equity} />
        );
      })}
    </div>
  );
};

export default Company;
