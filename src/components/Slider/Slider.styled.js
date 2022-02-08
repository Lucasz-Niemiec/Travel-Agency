import styled from "styled-components";
import {
  Arrows,
  SliderButtons,
} from "../../themeAndGlobalStyles/ThemeProvider";
export const MainConatiner = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  padding: 0.9rem 0;
  margin: auto;
  width: 80%;
  position: relative;
`;
export const SliderContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  overflow: hidden;
`;
export const Slide = styled.div`
  margin: 0 40px;
  min-width: 400px;
  height: 500px;
  transform: translateX(50px);
  box-shadow: -2px 5px 5px #1d1f1e;
`;
export const Controllers = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  pointer-events: none;
  height: 100%;
  opacity: 1;
`;
export const Button = styled.div`
  ${SliderButtons}
`;
export const Span = styled.span`
  ${Arrows}
`;
