import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal"; // Assurez-vous que le chemin est correct
import ModalHeader from "../ModalContent/ModalSidebar"
import Logo from "../../assets/logo pro gaby-02.svg"
import "./style.scss";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="NavContainer">
      
      <img src={Logo} alt="Logo pro" className="LogoPro"></img>
      <FontAwesomeIcon
        className="NavContainer__BurgerButton"
        icon={faBars}
        onClick={openModal}
      />
      <Modal
            isOpen={isModalOpen}
            onClose={closeModal}>
      <ModalHeader 
            onClose={closeModal}
      />
      </Modal>
    </div>
  );
}

export default Header;