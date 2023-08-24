import React from "react";

const Modal = ({ isOpen, onClose, children, handleNombreClick }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal">
          <button className="modal-close" onClick={onClose}>X</button>
          <button onClick={handleNombreClick}>Seleccionar Hora</button>
          <p>recurso tomado por:{"hola"}</p>
        </div>
      </div>
    );
}

export default Modal;