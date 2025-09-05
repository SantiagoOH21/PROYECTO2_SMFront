import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../redux/auth/authslice";

import { notification } from "antd";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: 60,
    password: "",
    password2: "",
  });

  const [avatar, setAvatar] = useState(null); // para el archivo
  const { name, email, age, password, password2 } = formData;

  const dispatch = useDispatch();
  const { isSuccess, message, isError } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: "Success",
        description: message,
      });
      navigate("/login");
    }
    if (isError) {
      notification.error({ message: "Error", description: message });
    }

    dispatch(reset());
  }, [isSuccess, isError, message]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const onFileChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      return notification.error({
        message: "Error",
        description: "Passwords do not match",
      });
    }

    notification.success({
      message: "Success",
      description: "User registered!",
    });

    const formToSend = new FormData();
    formToSend.append("name", name);
    formToSend.append("email", email);
    formToSend.append("age", age);
    formToSend.append("password", password);
    if (avatar) formToSend.append("avatar", avatar);

    console.log("Sending form:", formToSend);
    dispatch(register(formToSend));
  };

  return (
    <form onSubmit={onSubmit} encType="multipart/form-data">
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        placeholder="Name"
        required
      />

      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="Email"
        required
      />

      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="Password"
        required
      />

      <input
        type="password"
        name="password2"
        value={password2}
        onChange={onChange}
        placeholder="Confirm Password"
        required
      />

      <input
        type="number"
        name="age"
        value={age}
        onChange={onChange}
        placeholder="Age"
        required
      />

      <input
        type="file"
        name="avatar"
        accept="image/*"
        onChange={onFileChange}
      />

      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
