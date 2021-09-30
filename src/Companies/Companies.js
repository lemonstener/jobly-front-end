import { useEffect, useState } from "react";
import JoblyApi from "../JoblyApi/JoblyApi";
import "./Companies.css";
import CompanyCard from "./CompanyCard";

const Companies = () => {
  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const data = await JoblyApi.getAllCompanies();
      setCompanies(data);
      setLoading(false);
    };
    getData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="Companies">
      {companies.map((c) => {
        return <CompanyCard name={c.name} handle={c.handle} />;
      })}
    </div>
  );
};

export default Companies;
