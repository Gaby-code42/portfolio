import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./style.scss";

const LINKS = [
  { to: "/", label: "Accueil", command: "> navigate /home" },
  { to: "/realisation", label: "Réalisations", command: "> navigate /projects" },
  { to: "/about", label: "À propos", command: "> navigate /about" },
];

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <div className="mobile-menu">
      <button
        type="button"
        className="burger__btn"
        onClick={() => setIsOpen((open) => !open)}
        aria-label="Ouvrir le menu de navigation"
        aria-expanded={isOpen}
        aria-controls="mobile-menu-panel"
      >
        <span aria-hidden="true">☰</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="overlay"
            onClick={closeMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              id="mobile-menu-panel"
              className="terminal"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navigation"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <div className="terminal__header">
                <span>PORTFOLIO TERMINAL</span>

                <button
                  type="button"
                  className="burger__btn__close"
                  onClick={closeMenu}
                  aria-label="Fermer le menu"
                >
                  <span aria-hidden="true">X</span>
                </button>
              </div>

              <nav className="terminal__content" aria-label="Navigation mobile">
                {LINKS.map(({ to, label, command }) => (
                  <React.Fragment key={to}>
                    <p aria-hidden="true">{command}</p>
                    <Link to={to} onClick={closeMenu}>
                      {label}
                    </Link>
                  </React.Fragment>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
