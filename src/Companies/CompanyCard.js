import { useHistory } from "react-router";
import "./CompanyCard.css";

const CompanyCard = ({ name, handle }) => {
  const history = useHistory();

  const goToHandle = (company) => {
    history.push(`companies/${company}`);
  };
  return (
    <div onClick={() => goToHandle(handle)} className="CompanyCard">
      <p>{name}</p>
    </div>
  );
};

export default CompanyCard;
