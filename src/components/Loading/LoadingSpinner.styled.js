import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  place-content: center;

  background-color: transparent;
  margin-top: 2rem;
  margin: auto;
`;
export const Spinner = styled.div`
  border: 5px solid ${({ theme }) => theme.primary};
  border-top: 3px solid ${({ theme }) => theme.tertiary};
  border-bottom: 3px solid ${({ theme }) => theme.prymary};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
