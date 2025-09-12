import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../redux/auth/authslice";
import { useNavigate } from "react-router-dom";

import { notification } from "antd";
import "../../assets/styles/views/register.scss";

const Register = () => {
  const navigate = useNavigate();
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
    <div className="register-container">
      <form
        className="register-form"
        onSubmit={onSubmit}
        encType="multipart/form-data"
      >
        <h2>Registro</h2>

        <label>
          Usuario:
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            placeholder="Ej.: Jon"
            required
          />
        </label>

        <label>
          Correo electrónico:
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Ej.: jon@mail.com"
            required
          />
        </label>

        <label>
          Contraseña:
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Contraseña"
            required
          />
        </label>

        <label>
          Repita la contraseña:
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
            placeholder="Repita contraseña"
            required
          />
        </label>

        <label>
          Edad:
          <input
            type="number"
            name="age"
            value={age}
            onChange={onChange}
            required
          />
        </label>

        <label>
          Imagen de perfil (opcional):
          <input
            type="file"
            name="avatar"
            accept="image/*"
            onChange={onFileChange}
          />
        </label>

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
