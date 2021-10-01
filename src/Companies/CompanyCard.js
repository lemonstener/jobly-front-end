import { useHistory } from "react-router";
import "./CompanyCard.css";

const CompanyCard = ({ name, description, numEmployees, handle }) => {
  const history = useHistory();

  const goToHandle = (company) => {
    history.push(`companies/${company}`);
  };
  return (
    <div onClick={() => goToHandle(handle)} className="CompanyCard">
      <h3>{name}</h3>
      <p>
        <small>{numEmployees} people work here</small>
      </p>
      <p>{description}</p>
    </div>
  );
};

export default CompanyCard;
