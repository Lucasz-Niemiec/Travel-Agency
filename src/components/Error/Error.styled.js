import styled from "styled-components";

export const Wrapper = styled.div`
  margin: auto;
  width: 50%;
  text-align: center;
`;
export const Text = styled.h1`font-family:${({ theme }) => theme.logo};
font-size::${({ theme }) => theme.text_large};
color::${({ theme }) => theme.tertiary};`;
