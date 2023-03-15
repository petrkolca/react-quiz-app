import React, { useContext } from "react";
import { AppContext } from "../store/app-context";
import { StyledModal } from "./styles/Modal.styled";

const Modal = () => {
  const {
    correctAnswer,
    questions,
    isModalOpen,
    closeModal} = useContext(AppContext);

  return (
    <StyledModal className={`${isModalOpen ? "isOpen" : null}`}>
      <div className="modal-content">
        <h2>Congrats!</h2>
        <p>You answered {((correctAnswer / questions.length) * 100).toFixed(0)}% of questions correctly</p>
        <button
          className="close-btn"
          onClick={() => closeModal()}
          >
            Play Again
        </button>
      </div>
    </StyledModal>
  );
}

export default Modal;