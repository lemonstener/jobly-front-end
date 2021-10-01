import { useState } from "react";
import JoblyApi from "../JoblyApi/JoblyApi";

const SearchForm = (props) => {
  const initialState = {
    name: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const searchDB = async () => {
    if (props.type === "company") {
      const res = await JoblyApi.searchCompany(formData.name);
      props.setCompanies(res.companies);
    } else {
      const res = await JoblyApi.searchJob(formData.name);
      props.setJobs(res);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchDB();
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Search for a specific {props.type}</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      ></input>
      <button>SEARCH</button>
    </form>
  );
};

export default SearchForm;
