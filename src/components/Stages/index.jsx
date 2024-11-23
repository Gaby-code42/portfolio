import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons'; 
import './style.scss';

const StageDot = ({ totalPages, currentPage, onDotClick }) => {
  return (
    <div className="pagination__dots">
      {Array.from({ length: totalPages }, (_, index) => (
        <div
          key={index}
          className={`pagination__dot ${index === currentPage ? "active" : ""}`}
          onClick={() => onDotClick(index)}
        >
          <FontAwesomeIcon
            icon={index === currentPage ? faGear : faGear}
            className={`pagination__icon ${index === currentPage ? "active-icon" : "inactive-icon"}`}
          />
        </div>
      ))}
    </div>
  );
};

export default StageDot;