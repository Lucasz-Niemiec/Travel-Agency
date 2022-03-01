import styled from "styled-components";
import {
  Arrows,
  SliderButtons,
} from "../../themeAndGlobalStyles/ThemeProvider";
export const MainConatiner = styled.div`
  padding: 0.9rem 0;
  margin: auto;
  width: 80%;
  height: 50rem;
  position: relative;
  background-color: aliceblue;
  @media screen and (max-width: 1400px) {
    width: 90%;
    height: 100%;
    padding: 0;
  }
`;
export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: antiquewhite;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;
  @media screen and (max-width: 1400px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    padding: 0;
  }
`;
export const Slide = styled.div`
  margin: 0 40px;
  min-width: 700px;
  height: 100%;
  transform: translateX(50px);
  box-shadow: -2px 5px 5px #1d1f1e;
  @media screen and (max-width: 1400px) {
    margin: 10rem auto;
    max-width: 100px;
    height: 800px;
    transform: translateX(-10px);
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
  @media screen and (max-width: 1400px) {
    visibility: hidden;
  }
`;
export const Button = styled.div`
  ${SliderButtons}
`;
export const Span = styled.span`
  ${Arrows}
`;
