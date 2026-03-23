import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./style.scss";


const MobileMenu = () => {

  const [isOpen, toggle] = useState(false);
  const toggleMenu = () => toggle(!isOpen);
  const closeMenu = () => toggle(false);
  const location = useLocation();

  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <div className="mobile-menu">

      <button className="burger__btn" onClick={toggleMenu}>
        ☰
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
              className="terminal"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
            >

              <div className="terminal__header">
                <span>PORTFOLIO TERMINAL</span>

                <button className="burger__btn__close" onClick={closeMenu}>
                  X
                </button>
              </div>

              <div className="terminal__content">

                <p>&gt; navigate /home</p>
                <Link to="/" onClick={closeMenu}>Accueil</Link>

                <p>&gt; navigate /projects</p>
                <Link to="/realisation" onClick={closeMenu}>Réalisations</Link>

                <p>&gt; navigate /about</p>
                <Link to="/about" onClick={closeMenu}>À propos</Link>

              </div>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default MobileMenu;