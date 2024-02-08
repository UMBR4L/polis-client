import { Link } from "react-router-dom";
import PolisLogo from "../../assets/images/logo2.png";
import "./Header.scss";

export default function Header({ pageHeading }) {
  return (
    <div className="header">
      <Link to="/" className="navigation__logo">
        <img
          className="logo header__logo"
          src={PolisLogo}
          alt="Polis Logo"
        ></img>

        <h1 className="header__text">{pageHeading}</h1>
		<img
          className="logo header__logo"
          src={PolisLogo}
          alt="Polis Logo"
        ></img>
      </Link>
    </div>
  );
}
