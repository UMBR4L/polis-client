import { Link } from "react-router-dom";
import PolisLogo from "../../assets/logo/logo.png";
import "./Header.scss";

export default function Header() {
	return (
		<div className="header">
			<Link to="/" className="navigation__logo">
				<img
					className="logo header__logo"
					src={PolisLogo}
					alt="Polis Logo"
				></img>
			</Link>
		</div>
	);
}