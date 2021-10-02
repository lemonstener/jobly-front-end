import { useContext, useState } from "react";
import JoblyApi from "../JoblyApi/JoblyApi";
import UserContext from "../UserContext";
import { v4 as uuidv4 } from "uuid";

const EditForm = () => {
  const { user, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const [updatedUser, setUpdatedUser] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await JoblyApi.updateUser(user.username, formData);
      setUser(res);
      setUpdatedUser(true);
    } catch (errors) {
      setErrors(errors);
    }
  };

  if (updatedUser) {
    return (
      <div>
        <img
          style={{ width: "10vw", marginTop: "30vh" }}
          alt="Mario"
          src="https://cdn2.scratch.mit.edu/get_image/gallery/26726579_170x100.png"
        />
        <p className="Forms-error" style={{ backgroundColor: "#1EA896" }}>
          Arigato {user.username}-San!!!
        </p>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="Forms-user-form">
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button>UPDATE</button>
      </form>
      <div>
        {errors.map((e) => {
          return (
            <p key={uuidv4()} className="Forms-error">
              {e}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default EditForm;
