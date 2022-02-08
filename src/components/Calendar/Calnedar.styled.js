import styled from "styled-components";

import {
  Arrows,
  SliderButtons,
  Transition,
} from "../../themeAndGlobalStyles/ThemeProvider";

export const Wrapper = styled.div`
  background-color: white;
  width: 70%;
  height: 40rem;
  margin: auto;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: aqua;
  padding: 0.5rem;
  position: relative;
  ${Transition}
  background-color: ${({ theme }) => theme.secondary};
  :focus-within {
    box-shadow: -2px 2px 5px 2px ${({ theme }) => theme.tertiary};
    transform: scale(1.025);
  }
  @media screen and (max-width: 1100px) {
    font-size: 10px;
    width: 100%;
  }
  @media screen and (max-width: 300px) {
    font-size: 10px;
    height: 20rem;
  }
`;

export const CalendarContainer = styled.div`
  margin: auto;
  width: 50%;
  height: fit-content;
  background-color: ${({ theme }) => theme.primary};
  h1 {
    background-color: red;
    width: 100%;
    padding: 0.5rem;
    font-family: ${({ theme }) => theme.logo};
    background-color: ${({ theme }) => theme.tertiary};
    color: ${({ theme }) => theme.primary};
    box-shadow: -3px 0px 10px ${({ theme }) => theme.tertiary};
  }
  @media screen and (max-width: 1100px) {
    font-size: 10px;
    width: 100%;
  }
`;

export const DayNameConatainer = styled.div`
  display: flex;
  height: 3rem;
  background-color: ${({ theme }) => theme.primary_variation};
  font-family: ${({ theme }) => theme.titles};
  box-shadow: -3px 0px 10px ${({ theme }) => theme.tertiary};
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;
export const DayNames = styled.div`
  color: ${({ theme }) => theme.tertiary};
  width: 90%;
  height: 3rem;
  padding: 0.5rem;
  font-size: ${({ theme }) => theme.text_small};
  @media screen and (max-width: 1100px) {
    font-size: ${({ theme }) => theme.text_cards};
    width: 90%;
  }
  @media screen and (max-width: 300px) {
    font-size: 10px;
    width: 100%;
  }
`;

export const Week = styled.div`
  color: ${({ theme }) => theme.tertiary};

  display: flex;
  width: 100%;
  height: 5rem;
  @media screen and (max-width: 500px) {
    font-size: 20px;
    height: 40px;
  }
  @media screen and (max-width: 300px) {
    font-size: 10px;
    height: 30px;
  }
`;

export const Day = styled.div`
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgorund};
  font-family: ${({ theme }) => theme.text};
  width: 100%;
  border: solid 3px ${({ theme }) => theme.secondary};
  font-size: 1.5rem;
  padding: 0.5rem;
  box-shadow: -3px 0px 10px ${({ theme }) => theme.tertiary};

  &.bg {
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.tertiary};
  }
  :hover {
    background-color: ${({ theme }) => theme.tertiary};
    color: ${({ theme }) => theme.primary};
    opacity: 0.9;
  }
  :focus {
    background-color: ${({ theme }) => theme.tertiary};
    color: ${({ theme }) => theme.primary};
    opacity: 0.9;
  }
  @media screen and (max-width: 500px) {
    font-size: 20px;
    height: 40px;
  }
  @media screen and (max-width: 300px) {
    font-size: 10px;
    height: 30px;
  }
`;
export const Button = styled.button`
  border: none;

  ${SliderButtons};
`;
export const Span = styled.span`
  ${Arrows};
`;
