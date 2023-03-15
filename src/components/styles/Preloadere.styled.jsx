import styled from "styled-components";

export const StyledPreloader = styled.div`
  width: 5rem;
  height: 5rem;
  margin: 0 auto;
  /* margin-top: 10rem; */
  border-radius: 50%;
  border: 3px solid #CBE1C4;
  border-top-color: #43B02A;
  animation: spinner 0.6s linear infinite;

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`