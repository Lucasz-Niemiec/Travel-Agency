import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.secondary};
  display: flex;
  flex-direction: column;
`;

export const Text = styled.div`
  margin-top: 15rem;
  text-align: left;
  font-family: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  text-align: center;
  h1 {
    font-family: ${({ theme }) => theme.titles};
    font-size: ${({ theme }) => theme.text_large};
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.tertiary};
  }
  p {
    font-family: ${({ theme }) => theme.text};
    font-size: ${({ theme }) => theme.text_medium};
  }
`;
