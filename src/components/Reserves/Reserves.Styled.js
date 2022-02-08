import styled from "styled-components";

import Image from "../../images/pexels-alexandr-podvalny-1008155.jpg";
export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.primary_variation};
`;
export const Content = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10rem;
  text-align: center;
`;
export const H1 = styled.h1`
  font-family: ${({ theme }) => theme.titles};
  font-size: ${({ theme }) => theme.text_medium};
  color: ${({ theme }) => theme.tertiary};
  margin-bottom: 2rem;
`;
export const Text = styled.div`
  font-family: ${({ theme }) => theme.titles};
  font-size: ${({ theme }) => theme.text_medium};
  color: ${({ theme }) => theme.tertiary};
  margin: 2rem 0;
`;
export const Bg = styled.div`
  background: linear-gradient(
      45deg,
      rgba(8, 8, 24, 0.62),
      rgba(194, 194, 217, 0.58)
    ),
    url(${Image}) center no-repeat;

  background-position: 50% 70%;
  background-size: 100%;
  margin: auto;
  width: 90%;
  height: 20rem;
  filter: blur(3px);
`;
