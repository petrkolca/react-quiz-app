import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: var(--transition);
  z-index: -1;
  
  &.isOpen {
    opacity: 1;
    z-index: 999;
  }

  .modal-content {
    background: var(--clr-white);
    width: 90vw;
    max-width: var(--fixed-width);
    padding: 3rem;
    border-radius: var(--radius);
    text-align: center;
    position: relative;
  }
  .modal-content p {
    font-size: 1.5rem;
    text-transform: none;
  }
`