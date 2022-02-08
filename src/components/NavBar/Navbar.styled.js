import { Link } from "react-router-dom";
import styled from "styled-components";
import { Transition } from "../../themeAndGlobalStyles/ThemeProvider";

export const StyledLink = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.text_medium};
  text-decoration: none;
  font-family: ${({ theme }) => theme.titles};
  :hover {
    background-color: ${({ theme }) => theme.primary_variation};
    opacity: 0.8;
    border-radius: 0.2rem;
    color: #000;
  }
  :focus {
    background-color: ${({ theme }) => theme.primary_variation};
    opacity: 0.8;
    border-radius: 0.2rem;
    color: #000;
  }
  @media screen and (max-width: 1100px) {
    height: 100%;
  }
`;
export const MenuToggle = styled.a`
  visibility: hidden;

  @media screen and (max-width: 1100px) {
    visibility: visible;
    width: 50px;
    height: 40px;
    position: absolute;
    right: 5px;
    top: 5px;

    cursor: pointer;
    border-bottom: solid ${({ theme }) => theme.primary} 5px;

    ::before {
      content: "";
      border: solid ${({ theme }) => theme.primary} 2px;
      width: 90%;
      position: absolute;
      top: 50%;
    }
    ::after {
      content: "";
      border: solid ${({ theme }) => theme.primary} 2px;
      width: 90%;
      position: absolute;
    }
  }
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.tertiary};
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
  @media screen and (max-width: 1100px) {
    width: 90%;
    height: 6%;
    margin: 1rem;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    ${Transition}
    &.open {
      height: 90%;
    }
  }
`;
export const Nav = styled.nav`
  width: 50%;
  height: 90%;
  margin-right: 1rem;
  @media screen and (max-width: 1100px) {
    width: 90%;
    height: 90%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    visibility: hidden;
    opacity: 0;
    ${Transition}

    &.open {
      visibility: visible;
      opacity: 1;
    }
  }
`;
export const Ul = styled.ul`
  height: 100%;
  display: flex;
  text-align: center;
  @media screen and (max-width: 1100px) {
    width: 90%;
    height: 100%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    justify-content: space-around;
  }
`;
export const Li = styled.li`
  color: #fff;
  text-decoration: none;
  list-style: none;
  width: 100%;
`;
export const Logo = styled.p`
  color: #fff;
  font-size: ${({ theme }) => theme.text_large};
  justify-self: flex-start;
  margin-left: 1rem;

  font-family: ${({ theme }) => theme.logo};
  span {
    color: #5958d2;
  }
  @media screen and (max-width: 1100px) {
    width: 90%;
    height: 10%;
  }
`;
