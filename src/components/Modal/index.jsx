import React from 'react';

import './style.scss';

const Modal = ({ show, handleClose, children }) => {
  if (!show) return null;

  return (
    <div className='modal'>
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={handleClose}>X</button>
        {children}
      </div>
    </div>
    </div>
  );
};

export default Modal;