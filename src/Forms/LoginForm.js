import { useState } from "react";
import { useHistory } from "react-router";
import "./Forms.css";

const LoginForm = ({ login }) => {
  const initialState = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState([]);
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
    const res = await login(formData);
    if (res.success) {
      history.push("/");
    } else {
      setErrors(res.errors);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="Forms-user-form">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button>LOGIN</button>
      </form>
      <div>
        {errors.map((e) => {
          return <p className="Forms-error">{e}</p>;
        })}
      </div>
    </>
  );
};

export default LoginForm;
