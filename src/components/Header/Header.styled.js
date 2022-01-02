import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-height: 100%;
  position: relative;
`;

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 200px;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  display: block;
`;
export const Div = styled.div`
  height: 100%;
  width: 100%;
  display: inline-block;
`;
