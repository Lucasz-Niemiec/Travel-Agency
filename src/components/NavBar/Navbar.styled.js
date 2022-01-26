import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  text-decoration: none;
  :hover {
    background-color: ${({ theme }) => theme.primary_variation};
    opacity: 0.8;
    border-radius: 0.2rem;
    color: #000;
  }
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.tertiary};
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;

  position: fixed;
  z-index: 1;
`;
export const Nav = styled.nav`
  width: 50%;
  height: 90%;
  margin-right: 1rem;
`;
export const Ul = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;

  text-align: center;
  justify-content: flex-end;
`;
export const Li = styled.li`
  color: #fff;
  text-decoration: none;
  list-style: none;
`;
