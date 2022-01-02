import styled from "styled-components";

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
`;
export const Content = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  background: url(${(props) => props.src}) no-repeat;
  padding: 0.5rem;
  overflow: hidden;
`;
export const H2 = styled.h2`
  align-self: center;
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
`;
export const TextContainer = styled.div`
  height: 36%;
  overflow: hidden;
  text-align: left;
`;
export const H3 = styled.h3`
  padding: 0%.5rem;
  margin: 5px 0;
`;
export const Text = styled.p`
  font-size: 0.9rem;
  word-spacing: 0px;
  padding: 0 0.5rem 2rem 0.5rem;
`;
export const Pack = styled.p`
  color: yellow;
  position: absolute;
  bottom: 0.4rem;
  left: 0.5rem;
`;
export const Number = styled.p`
  color: white;
  position: absolute;
  bottom: 0.4rem;
  right: 0.5rem;
`;
