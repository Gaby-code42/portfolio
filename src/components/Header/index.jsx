import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import MobileMenu from "../MenuBurger";
import "./style.scss";

const LINKS = [
  { to: "/", label: "Accueil" },
  { to: "/realisation", label: "Réalisations" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "À propos" },
];

function Header() {
  const location = useLocation();
  // Le header est collant : sans fond, le contenu de la page défile par-dessus
  // les liens et l'avatar chevauche le menu. On ne l'opacifie qu'une fois
  // descendu, pour garder un haut de page transparent à l'arrivée.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (to) =>
    `NavContainer__link ${location.pathname === to ? "active__link" : ""}`;

  return (
    <header className={`NavContainer ${scrolled ? "NavContainer--scrolled" : ""}`}>
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
