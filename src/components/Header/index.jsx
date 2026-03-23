import React from "react";
import { useLocation, Link } from "react-router-dom";
import Logo from "../../assets/logo pro gaby-02.svg";
import MobileMenu from "../MenuBurger";
import "./style.scss";

function Header() {
  const location = useLocation();

  return (
    <div className="NavContainer">
      <div>
        <Link
          to="/"
          className={`NavContainer__link ${
            location.pathname === "/" ? "active__link" : ""
          }`}
        >
          <img src={Logo} alt="Logo pro" className="LogoPro"></img>
        </Link>
      </div>
      <div>
        <nav className="NavBar">
          <li>
            <Link
              to="/"
              className={`NavContainer__link ${
                location.pathname === "/" ? "active__link" : ""
              }`}
            >
              Accueil{" "}
            </Link>
          </li>
          <li>
            <Link
              to="/realisation"
              className={`NavContainer__link ${
                location.pathname === "/realisation" ? "active__link" : ""
              }`}
            >
              Réalisations
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`NavContainer__link ${
                location.pathname === "/about" ? "active__link" : ""
              }`}
            >
              À propos
            </Link>
          </li>
        </nav>
        <MobileMenu />
        <nav className="NavFidgetContainer"></nav>
      </div>
    </div>
  );
}

export default Header;
