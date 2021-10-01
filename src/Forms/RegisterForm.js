import { useState } from "react";
import { useHistory } from "react-router";

const RegisterForm = ({ register }) => {
  const initialState = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  };
  const [formData, setFormData] = useState(initialState);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await register(formData);
    if (res.success) {
      history.push("/companies");
    } else {
      console.log(res.errors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="Forms-user-form">
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
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
      <button>REGISTER</button>
    </form>
  );
};

export default RegisterForm;
