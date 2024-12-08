import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal"; // Assurez-vous que le chemin est correct
import ModalHeader from "../ModalContent/ModalSidebar"
import "./style.scss";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="NavContainer">
      <div>
        <Link className="Logo" to="/">
          RAPHAEL BONACINA
        </Link>
      </div>
      <div>
      <FontAwesomeIcon
        className="NavContainer__BurgerButton"
        icon={faBars}
        onClick={openModal}
         // Assurez-vous que le pointeur change au survol
      />
      <Modal
            isOpen={isModalOpen}
            onClose={closeModal}>
      <ModalHeader 
            onClose={closeModal}
      />
      </Modal>
      </div>
    </div>
  );
}

export default Header;