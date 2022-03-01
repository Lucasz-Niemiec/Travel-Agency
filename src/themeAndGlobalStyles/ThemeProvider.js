import { ThemeProvider, css, keyframes } from "styled-components";

export const emmailAnimOut = keyframes`
from{left:50px;
        opacity: 1;
 
}to{
        left: 10px;
        opacity: 0;
}


`;
export const emmailAnimIn = keyframes`
from{
  left: 10px;
        opacity: 0;

}to{
  
  left:50px;
        opacity: 1;
}


`;

export const h2Anim = keyframes`
0%{opacity:0;}
50%{opacity:0;}
100%{opacity:1;}

`;
export const h1Anim = keyframes`
0%{opacity:0;}

100%{opacity:1;}

`;

export const Transition = css`
  transition: 300ms ease-in-out;
`;

export const SliderButtons = css`
  margin: 0;
  background-color: transparent;
  pointer-events: all;
  position: absolute;
  cursor: pointer;
  height: 100%;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  outline: none;
  @media screen and (max-width: 1100px) {
    height: 10%;
  }

  &:hover {
    background: ${({ theme }) => theme.primary_variation};
    opacity: 0.8;
    span {
      border-top: solid white 6px;
      border-right: solid white 6px;
    }
  }
  &:focus-visible {
    background: ${({ theme }) => theme.primary_variation};
    opacity: 0.8;
    span {
      border-top: solid white 6px;
      border-right: solid white 6px;
    }
  }

  ${(props) => (props.right ? "right:0" : "left:0")}
`;

export const Arrows = css`
  width: 20px;
  height: 20px;
  border-top: solid 6px black;
  border-right: solid 6px black;
  transform: ${(props) => (props.right ? "rotate(45deg)" : "rotate(-135deg)")};
`;

export const contactIcons = css`
  margin: 0;
  width: 50px;
  height: 50px;
  fill: ${({ theme }) => theme.primary};
  padding: 2px;
  border-radius: 0.2rem;
  display: inline-block;
  ${Transition};
  :hover {
    background-color: ${({ theme }) => theme.primary};
    opacity: 0.9;

    fill: ${({ theme }) => theme.tertiary};
  }
  @media screen and (max-width: 500px) {
    width: 30px;
    height: 30px;
  }
`;

export const svg = css`
  scale: 8;
  fill: ${({ theme }) => theme.tertiary};
  padding: 2px;
  border-radius: 0.2rem;
  display: inline-block;
  width: 5%;
  ${Transition};
  margin: 50px;
  width: 50;

  :hover {
    background-color: ${({ theme }) => theme.tertiary};
    opacity: 0.9;

    fill: ${({ theme }) => theme.primary};
  }
  @media screen and (max-width: 1300px) {
    margin: 60px;
    height: 1rem;
    width: 1rem;
  }
`;

const theme = {
  //colors
  primary: "#C2C2D9",
  primary_variation: "#737F87",
  secondary: "#b8c2c4",
  tertiary: "#080818",

  //fonts
  logo: "'Permanent Marker'",
  titles: "'Inter'",
  text: "'Lato'",
  text_logo: "5rem",
  text_large: "3rem",
  text_medium: "2rem",
  text_small: "1.5rem",
  text_cards: "1rem",
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
