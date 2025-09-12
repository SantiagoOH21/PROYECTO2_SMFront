import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/authslice.jsx";
import { useState } from "react";

import Logo from "../Logo/Logo.jsx";
import "../../assets/styles/components/header.scss";

const TheHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
    if (e.key === "Enter") {
      console.log(text);
      navigate(`/search/${text}`);
    }
  };

  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/login");
  };
  return (
    <nav>
      <Link to="/">
        <Logo />
      </Link>

      <input
        onKeyUp={handleChange}
        placeholder="Busca post por título"
        name="text"
      />

      <div className="nav-actions">
        <Link to="/">Home</Link>

        {user ? (
          <>
            <Link to="/profile" className="profile-link">
              Perfil
            </Link>
            <button onClick={onLogout} className="logout-btn">
              Salir
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="login-link">
              Iniciar sesión
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};
export default TheHeader;
