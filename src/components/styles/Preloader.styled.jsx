import styled from "styled-components";

export const StyledPreloader = styled.div`
  width: 5rem;
  height: 5rem;
  margin: 0 auto;
  /* margin-top: 10rem; */
  border-radius: 50%;
  border: 3px solid var(--clr-primary-6);
  border-top-color: var(--clr-primary-5);
  animation: spinner 0.6s linear infinite;

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`