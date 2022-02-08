import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  border: none;
  background-color: ${({ theme }) => theme.secondary};
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  padding: 5%;
  width: 90%;
  height: 100%;
  margin-top: 6rem;
  font-family: ${({ theme }) => theme.text};
  font-size: ${({ theme }) => theme.text_small};
  display: flex;

  flex-direction:row;

  h1 {
    font-family: ${({ theme }) => theme.logo};
    color: ${({ theme }) => theme.tertiary};
    font-size: ${({ theme }) => theme.text_large};
    margin: 0.5rem;
  }
  h2 {
    font-size: ${({ theme }) => theme.text_medium}
    font-family: ${({ theme }) => theme.titles};
    color: ${({ theme }) => theme.tertiary};
    margin: 0.5rem;
    ;
  }
  p{margin:0.5rem;}
`;
export const TextContent = styled.div`
  width: 50%;
  height: 50%;
  background: ${({ theme }) => theme.primary_variation};
  box-shadow: -2px 5px 5px #1d1f1e;
`;
export const Img = styled.img`
  margin-right: 0.5rem;
  box-shadow: -2px 5px 5px #1d1f1e;
  object-fit: cover;
  width: 70%;
`;
