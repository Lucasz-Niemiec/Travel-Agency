import styled from "styled-components";
export const MainConatiner = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  padding: 0.9rem 0;
  margin: auto;
  width: 80%;
  position: relative;
`;
export const SliderContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  flex-wrap: nowrap;
  overflow: hidden;
`;
export const Slide = styled.div`
  margin: 0 40px;
  min-width: 400px;
  height: 500px;
  transform: translateX(50px);
  &:focus {
    padding: 0.5rem;
    background-color: blue;
    opacity: 0.5;
    outline: solid 1px blue;
  }
`;
export const Controllers = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  pointer-events: none;
  height: 100%;
  opacity: 1;
`;
export const Button = styled.div`
  margin: 0%;
  background-color: transparent;
  pointer-events: all;
  position: absolute;
  cursor: pointer;
  height: 100%;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.primary_variation};
    opacity: 0.8;
    span {
      border-top: solid white 6px;
      border-right: solid white 6px;
    }
  }
  &:focus {
    background: black;
    opacity: 0.8;
  }

  ${(props) => (props.right ? "right:0" : "left:0")}
`;
export const Span = styled.span`
  width: 20px;
  height: 20px;
  border-top: solid 6px black;
  border-right: solid 6px black;
  transform: ${(props) => (props.right ? "rotate(45deg)" : "rotate(-135deg)")};
`;
