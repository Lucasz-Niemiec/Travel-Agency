import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  border: none;
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Content = styled.div`
  padding: 5rem;
  width: 100%;
  margin-top: 10rem;
`;
