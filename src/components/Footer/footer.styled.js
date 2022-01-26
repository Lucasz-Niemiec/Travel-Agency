import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.tertiary};
  width: 100%;
  height: 10vh;
  flex-direction: row;

  z-index: 2;
  margin-top: auto;
`;
