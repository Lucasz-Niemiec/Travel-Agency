import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.tertiary};
  width: 100%;
  height: 10vh;
  flex-direction: row;
  box-shadow: 0px -5px 19px 20px #000;
  z-index: 2;
  margin-top: auto;
`;
