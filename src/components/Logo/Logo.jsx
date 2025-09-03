import "../../assets/styles/components/logo.scss";
import logoImage from "../../assets/images/Logo.jpg";

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logoImage} alt="Logo Elephant" />
    </div>
  );
};

export default Logo;
