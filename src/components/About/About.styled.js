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
  justify-content: center;
  margin: 10rem auto;
  width: 100%;
  height: 90%;
  flex-wrap: wrap;

  div {
    text-align: center;
    width: 20%;

    margin: 1rem 2.5rem;
    border: solid ${({ theme }) => theme.tertiary} 5px;
    border-radius: 5rem;

    h3 {
      font-size: ${({ theme }) => theme.text_medium};
      font-family: ${({ theme }) => theme.titles};
      color: ${({ theme }) => theme.tertiary};
      margin: 1rem 0;
    }
    p {
      font-size: ${({ theme }) => theme.text_small};
      font-family: ${({ theme }) => theme.text};
      text-align: left;
      margin: 1rem 0;
      padding: 1.5rem;
    }
  }
  @media screen and (max-width: 1500px) {
    width: 90%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div {
      width: 30%;
    }
  }
  @media screen and (max-width: 1100px) {
    width: 70%;
    div {
      width: 30%;
      h3 {
        font-size: ${({ theme }) => theme.text_samll};
      }
    }
  }
  @media screen and (max-width: 1100px) {
    width: 100%;
    div {
      width: 90%;
      height: 50%;
      margin: 1rem auto;
    }
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
