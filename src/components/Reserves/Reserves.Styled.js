import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.secondary};
`;
export const Content = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10rem;
  text-align: center;
`;
