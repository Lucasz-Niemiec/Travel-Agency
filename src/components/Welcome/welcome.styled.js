import styled from "styled-components";
import { h2Anim, h1Anim } from "../../themeAndGlobalStyles/ThemeProvider";
export const Wrapper = styled.div`
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  h1 {
    animation: ${h1Anim} 500ms linear forwards;
    font-family: ${({ theme }) => theme.logo};
    font-size: 5rem;
    color: ${({ theme }) => theme.tertiary};
    text-shadow: 2px 2px ${({ theme }) => theme.primary};
    span {
      color: ${({ theme }) => theme.primary};
      text-shadow: 2px 2px ${({ theme }) => theme.tertiary};
    }
  }
  h2 {
    animation: ${h2Anim} 2s linear forwards;
    font-family: ${({ theme }) => theme.logo};
    font-size: ${({ theme }) => theme.text_large};
    color: ${({ theme }) => theme.tertiary};
    text-shadow: 2px 2px ${({ theme }) => theme.primary};
  }
`;
