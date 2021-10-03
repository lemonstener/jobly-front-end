import { useEffect, useState } from "react";
import SearchForm from "../Forms/SearchForm";
import JoblyApi from "../JoblyApi/JoblyApi";
import "./Companies.css";
import CompanyCard from "./CompanyCard";

const Companies = () => {
  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState(null);
  const [filteredCompanies, setFilteredCompanies] = useState(null);
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

  if (!filteredCompanies) {
    return (
      <div className="Companies">
        <SearchForm
          setCompanies={setCompanies}
          setFilteredCompanies={setFilteredCompanies}
          type="company"
        />
        {companies.map((c) => {
          return (
            <CompanyCard
              key={c.handle}
              name={c.name}
              description={c.description}
              numEmployees={c.numEmployees}
              handle={c.handle}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="Companies">
        <SearchForm
          setFilteredCompanies={setFilteredCompanies}
          type="company"
        />
        <button
          className="Forms-clear-button"
          onClick={() => setFilteredCompanies(null)}
        >
          CLEAR
        </button>
        {filteredCompanies.map((c) => {
          return (
            <CompanyCard
              key={c.handle}
              name={c.name}
              description={c.description}
              numEmployees={c.numEmployees}
              handle={c.handle}
            />
          );
        })}
      </div>
    );
  }
};

export default Companies;
