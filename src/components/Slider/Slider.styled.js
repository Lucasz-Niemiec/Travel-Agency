import styled from "styled-components";
import {
  Arrows,
  SliderButtons,
} from "../../themeAndGlobalStyles/ThemeProvider";
export const MainConatiner = styled.div`
  padding: 0.9rem 0;
  margin: auto;
  width: 90%;
  height: 50rem;
  position: relative;
  @media screen and (max-width: 1100px) {
    width: 100%;
    height: 100%;
  }
`;
export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  overflow: hidden;
  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 520px) {
    width: 100%;
  }
`;
export const Slide = styled.div`
  margin: 0 40px;
  min-width: 28%;
  height: 80%;
  transform: translateX(50px);
  box-shadow: -2px 5px 5px #1d1f1e;
  @media screen and (max-width: 1100px) {
    margin: 2.5rem auto;
    max-width: 70%;
    height: 500px;
    transform: translateX(0px);
  }
  @media screen and (max-width: 520px) {
    min-width: 90%;
  }
`;
export const Controllers = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  pointer-events: none;
  height: 100%;
  opacity: 1;
  @media screen and (max-width: 1100px) {
    visibility: hidden;
  }
`;
export const Button = styled.div`
  ${SliderButtons}
`;
export const Span = styled.span`
  ${Arrows}
`;
