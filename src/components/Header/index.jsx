import React from "react";
import { useLocation, Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import MobileMenu from "../MenuBurger";
import "./style.scss";

const LINKS = [
  { to: "/", label: "Accueil" },
  { to: "/realisation", label: "Réalisations" },
  { to: "/about", label: "À propos" },
];

function Header() {
  const location = useLocation();

  const linkClass = (to) =>
    `NavContainer__link ${location.pathname === to ? "active__link" : ""}`;

  return (
    <header className="NavContainer">
      <div>
        <Link to="/" className={linkClass("/")}>
          <img src={Logo} alt="Raphaël Bonacina — accueil" className="LogoPro" />
        </Link>
      </div>
      <div>
        <nav className="NavBar" aria-label="Navigation principale">
          <ul>
            {LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={linkClass(to)}
                  aria-current={location.pathname === to ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}

export default Header;
