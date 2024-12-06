import React from "react";
import "./style.scss"; // Style pour la modale
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark}  from "@fortawesome/free-solid-svg-icons";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>
        <FontAwesomeIcon icon={faCircleXmark} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;