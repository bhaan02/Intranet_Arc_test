import React from "react";

const Modal = ({ isOpen, onClose, children, handleNombreClick, reservedUser}) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal">
          <button className="modal-close" onClick={onClose}>X</button>
          <button >Seleccionar Hora</button>
          {reservedUser && <p>recurso tomado por:{reservedUser}</p>}
        </div>
      </div>
    );
}

export default Modal;