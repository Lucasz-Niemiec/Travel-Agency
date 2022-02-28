import styled from "styled-components";
import { svg } from "../../themeAndGlobalStyles/ThemeProvider";
import Plane from "../icons/Plane";
import Lugage from "../icons/Lugage";
import Bed from "../icons/Bed";

export const Wrapper = styled.div`
  min-height: 100vh;
  border: none;
  background-color: ${({ theme }) => theme.secondary};
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Content = styled.div`
  padding: 3rem 2rem 2rem 2rem;
  width: 100%;
  margin-top: 5%;
  font-family: ${({ theme }) => theme.text};
  text-align: center;
  h1 {
    font-family: ${({ theme }) => theme.titles};
    margin: 1rem;
    font-size: ${({ theme }) => theme.text_large};
    color: ${({ theme }) => theme.tertiary};
  }
  p {
    padding: 1rem 10%;
    text-align: justify;
    font-size: ${({ theme }) => theme.text_small};
    line-height: 1.5;
  }
  @media screen and (max-width: 810px) {
    p {
      font-size: ${({ theme }) => theme.text_cards};
    }
  }
`;

export const SvgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 3rem 0;
  width: 70%;
  height: 10%;

  div {
    text-align: center;
    width: 90%;
    margin: 0 0.5rem;

    h3 {
      font-family: ${({ theme }) => theme.titles};
      color: ${({ theme }) => theme.tertiary};
      margin: 1rem 0;
    }
    p {
      font-family: ${({ theme }) => theme.text};
      text-align: center;
      margin: 2.5rem 0;
    }
  }
  @media screen and (max-width: 810px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PLaneStyled = styled(Plane)`
  ${svg}
`;
export const LugageStyled = styled(Lugage)`
  ${svg}
`;
export const BedStyled = styled(Bed)`
  ${svg}
`;
