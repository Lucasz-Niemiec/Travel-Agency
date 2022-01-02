import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  border: none;
  background-color: ${({ theme }) => theme.secondary};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Text = styled.div`
  margin-top: 5rem;
  text-align: left;
`;
