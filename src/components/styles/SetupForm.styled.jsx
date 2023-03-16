import styled from "styled-components";

export const StyledFormCtn = styled.div`
  
  h2 {
    margin-bottom: 2rem;
  }
  .form-control {
    margin-bottom: 2rem;
  }
  .form-control label {
    display: block;
    text-transform: capitalize;
    font-weight: 500;
    color: var(--clr-grey-6);
    margin-bottom: 0.5rem;
  }
  .form-input,
  select {
    border: 1px solid var(--clr-grey-4);
    background: var(--clr-grey-5);
    font-size: 1rem;
    padding: 0.5rem 0.75rem;
    width: 100%;
    border-radius: var(--radius);

    &::placeholder {
      color: var(--clr-grey-3);
    }

    &.error {
      border-color: var(--clr-red-dark);
    }

    option {
      color: red;
    }

    option[hidden] {
      color: var(--clr-grey-3);
    }
  }
  .error {
    display: block;
    font-size: 0.85rem;
    color: var(--clr-red-dark);
    margin-top: 0.15rem;
    text-transform: capitalize;
  }
  .submit-btn {
    width: 100%;
    margin-top: 3rem;
  }
`