import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../../redux/auth/authslice";
import { notification } from "antd";
import "../../assets/styles/views/login.scss";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isError, isSuccess, message } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isError) {
      notification.error({ message: "Error", description: message });
    }
    if (isSuccess) {
      notification.success({ message: "Success", description: message });
      setTimeout(() => {
        navigate("/profile");
      }, 2000);
    }
    dispatch(reset());
  }, [isError, isSuccess, message]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };
  return (
    <div className="login-container">
      <form onSubmit={onSubmit} className="login-form">
        <h2>Iniciar Sesión</h2>

        <label>
          Correo electrónico:
          <input
            type="email"
            name="email"
            value={email}
            placeholder="email"
            onChange={onChange}
            required
          />
        </label>

        <label>
          Contraseña:
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={onChange}
            required
          />
        </label>

        <button type="submit">Entrar</button>

        <p className="register-link">
          ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
        </p>
      </form>
    </div>
  );
};
export default Login;
