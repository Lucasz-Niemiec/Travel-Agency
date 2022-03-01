import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.tertiary};
`;

export const Wrapper = styled.article`
  background-color: ${({ theme }) => theme.primary};
  margin: auto;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-bottom: 5px solid ${({ theme }) => theme.primary_variation};
  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.primary_variation};
    transition: all 0.5s ease-in-out;
  }
  &:hover {
    :after {
      top: 0;
      opacity: 0.8;
    }
    p {
      opacity: 1;
    }
  }
  &:focus-within {
    :after {
      top: 0;
      opacity: 0.8;
    }
    p {
      opacity: 1;
    }
  }
`;
export const Content = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: column;
  background: url(${(props) => props.src}) no-repeat;
  background-size: cover;

  padding: 0.5rem;
  overflow: hidden;
`;
export const H2 = styled.h2`
  align-self: center;
  font-family: ${({ theme }) => theme.logo};
  font-size: ${({ theme }) => theme.text_medium};
`;
export const KnowMore = styled.p`
  opacity: 0;
  color: white;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 20%;
  text-align: center;
  z-index: 2;
  transition: all 0.5s ease-in-out;
  font-size: ${({ theme }) => theme.text_medium};
  font-family: ${({ theme }) => theme.logo};
`;
export const TextContainer = styled.div`
  height: 36%;
  overflow: hidden;
  text-align: left;
`;
export const H3 = styled.h3`
  padding: 0.5rem;
  margin: 5px 0;
  font-family: ${({ theme }) => theme.titles};
  font-size: ${({ theme }) => theme.text_small};
`;
export const Text = styled.p`
  font-size: 0.9rem;
  word-spacing: 1px;
  padding: 0 0.5rem 2rem 0.5rem;
  font-family: ${({ theme }) => theme.text};
  color: black;
  line-height: 1.2;
  font-size: ${({ theme }) => theme.text_cards};
  margin-top: 10px;
`;
export const Pack = styled.p`
  color: black;
  left: 0.5rem;
  font-family: ${({ theme }) => theme.titles};
  margin: 0%.5rem;
  display: inline-block;
  font-size: ${({ theme }) => theme.text_cards};
`;
export const Number = styled.p`
  color: black;
  display: inline-block;
  right: 0.5rem;
  margin: 10px;
  font-family: ${({ theme }) => theme.titles};
  font-size: ${({ theme }) => theme.text_cards};
`;
